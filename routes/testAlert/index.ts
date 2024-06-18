import * as dotenv from 'dotenv'
import fs from 'fs'
import { readAlert } from '../utils/readAlert'
import { sendEmailAlert } from '../saveAlert'
import { generateAlerts } from '../utils/generateAlerts'

dotenv.config()

export const testAlert = async ({ notificationEmail }) => {
  const data: any = await readAlert({ notificationEmail })
  const res = await generateAlerts(data)

  return sendEmailAlert({
    toEmail: notificationEmail,
    emailText: JSON.stringify(res),
  })
}
