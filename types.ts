export enum ActorAction {
  GET_PROFILES = 'get-profiles',
}

export interface LinkedInProfile {
  url: string
  firstName: string
  lastName: string
  headline: string
  LICENSES_AND_CERTIFICATIONS: LicenseAndCertification[]
  ABOUT: AboutSection[]
  EDUCATION: EducationSection[]
  EXPERIENCE: ExperienceSection[]
  PROJECTS: ProjectSection[]
}

interface LicenseAndCertification {
  subtitle: string
  title: string
  caption: string
  level: number
  child: any[] // Use 'any[]' if there's no further specification, otherwise replace with a more specific type
}

interface AboutSection {
  text: string
  level: number
  child: any[] // Similar to above, specify more if details are available
}

interface EducationSection {
  subtitle: string
  title: string
  caption?: string // Optional because it's not present in all education entries
  level: number
  child: any[] // Assuming no further details provided
}

interface ExperienceSection {
  subtitle: string
  title: string
  meta: string
  caption: string
  level: number
  child: ExperienceDetail[]
}

interface ExperienceDetail {
  text: string
  level: number
  child: any[] // Assuming no further details provided
}

interface ProjectSection {
  subtitle: string
  title: string
  level: number
  child: ProjectDetail[]
}

interface ProjectDetail {
  text: string
  level: number
  child: any[] // Assuming no further details provided
}
