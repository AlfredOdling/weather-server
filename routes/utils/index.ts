import process from 'process'
import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import { OpenAI } from 'langchain/llms/openai'
import { PromptTemplate } from 'langchain/prompts'
import { LLMChain } from 'langchain/chains'
import { extractSkillsTemplate, extractProfileInfoTemplate } from './templates'
import {
  parseJSON,
  parseOfficeFile,
  removeEmptyFields,
  updateSyncStatus,
} from './utils'
import { Database } from '../../types/supabase'

dotenv.config()

const model = new OpenAI({
  temperature: 0,
  openAIApiKey: process.env.OPENAI_API_KEY,
  modelName: 'gpt-4-0125-preview',
})

const supabase = createClient<Database>(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export const analyzeAndSyncResume = async ({
  profileId,
  fileResumeUrl,
  resumeSource,
}: {
  profileId: string
  fileResumeUrl: string
  resumeSource: string
}) => {
  let errorCount = 0

  const extractSkillsPrompt = PromptTemplate.fromTemplate(extractSkillsTemplate)
  const extractProfileInfoPrompt = PromptTemplate.fromTemplate(
    extractProfileInfoTemplate
  )

  const chainA = new LLMChain({ llm: model, prompt: extractSkillsPrompt })
  const chainB = new LLMChain({
    llm: model,
    prompt: extractProfileInfoPrompt,
  })

  while (errorCount < 4) {
    console.info('errorCount', errorCount)

    try {
      // Parse resume
      const resumeJSON = await parseOfficeFile({ fileResumeUrl })

      await updateSyncStatus(
        'Analyzing skills and profile info (3/4)',
        profileId
      )
      const [skills, profileInfo] = await Promise.all([
        await chainA.call({ textInput: resumeJSON }),
        await chainB.call({ textInput: resumeJSON }),
      ])

      // Deduplicate and parse skills
      const extractedSkills = [
        ...new Set(
          parseJSON(skills.text).skills?.map((skill) => skill.toLowerCase())
        ),
      ]
      const extractedResumeInfo_ = parseJSON(profileInfo.text)

      const resume = {
        profileId,
        resumeSyncedAt: new Date(),
        firstName: extractedResumeInfo_.firstName,
        lastName: extractedResumeInfo_.lastName,
        phone: extractedResumeInfo_.phoneNumber,
        resumeJson: resumeJSON,
        title: extractedResumeInfo_.title,
        industries: extractedResumeInfo_.industries,
        location: extractedResumeInfo_.location,
        language: extractedResumeInfo_.language,
        education: extractedResumeInfo_.education,
        traitsAndQualities: extractedResumeInfo_.traitsAndQualities,
        roles: extractedResumeInfo_.roles,
        personality: extractedResumeInfo_.personality,
        drivenBy: extractedResumeInfo_.drivenBy,
        profileDescription: extractedResumeInfo_.profileDescription,
        yearsOfExperience: extractedResumeInfo_.yearsOfExperience,
      }
      removeEmptyFields(resume)

      await updateSyncStatus('Building your profile (4/4)', profileId)
      await supabase.from('resumes').delete().eq('profileId', profileId)
      // @ts-ignore
      await supabase.from('resumes').upsert([resume]).select()

      // Reset tags for this profile
      await supabase.from('tags').delete().eq('profileId', profileId)

      // Insert skills
      await supabase
        .from('tags')
        .insert(
          extractedSkills.map((skill) => ({
            key: 'skill',
            // @ts-ignore
            value: skill.toLowerCase(),
            profileId,
          }))
        )
        .select()

      // Insert roles
      await supabase
        .from('tags')
        .insert(
          extractedResumeInfo_.roles?.map((role) => ({
            key: 'role',
            value: role.toLowerCase(),
            profileId,
          }))
        )
        .select()

      await supabase
        .from('profiles')
        .update({
          phone_number: extractedResumeInfo_.phoneNumber,
          first_name: extractedResumeInfo_.firstName,
          last_name: extractedResumeInfo_.lastName,
          title: extractedResumeInfo_.title,
          description: extractedResumeInfo_.profileDescription,
          personality: extractedResumeInfo_.personality,
          drivenBy: extractedResumeInfo_.drivenBy,
          roles: extractedResumeInfo_.roles,
          resumeSource,
          fileResumeUrl,
          seniority: Number(extractedResumeInfo_.yearsOfExperience || 1),
        })
        .eq('id', profileId)
        .select()
        .throwOnError()

      await updateSyncStatus('synced', profileId)
      console.log('🚀  Resume synced successfully!')

      return 'done'
    } catch (err) {
      console.error('Error analyzing resume:', err)
      errorCount++
      if (errorCount === 4) break
    }
  }

  if (errorCount === 3) {
    await updateSyncStatus('', profileId)
    return {
      success: false,
      message: 'Error analyzing resume',
    }
  }

  return {
    success: true,
    message: 'Resume synced successfully',
  }
}
