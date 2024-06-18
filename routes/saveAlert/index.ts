import * as dotenv from 'dotenv'
import nodemailer from 'nodemailer'
import cron from 'node-cron'
import fs from 'fs'

dotenv.config()

// https://www.youtube.com/watch?v=QDIOBsMBEI0&ab_channel=WebWizard

export const saveAlert = ({
  extremeTemperatureThreshold,
  heavyRainThreshold,
  hurricanesThreshold,
  notificationEmail,
  pushNotifications,
  smsNumber,
  stormsThreshold,
  location,
}) => {
  // Save to local storage in the form of a JSON file with fs
  const alert = {
    extremeTemperatureThreshold,
    heavyRainThreshold,
    hurricanesThreshold,
    notificationEmail,
    pushNotifications,
    smsNumber,
    stormsThreshold,
    location,
  }

  fs.writeFile(
    `routes/saveAlert/alerts/alert-${notificationEmail}.json`,
    JSON.stringify(alert),
    (err) => {
      if (err) {
        console.error('Error saving alert:', err)
      } else {
        console.log('Alert saved successfully!')
      }
    }
  )
}

export const sendEmailAlert = ({ toEmail, emailText }) => {
  // Create a transporter using SMTP or an email service
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail', 'yahoo', 'outlook', etc.
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'alfredodling@gmail.com',
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  })

  // Define email data
  const mailOptions = {
    from: 'alfredodling@gmail.com',
    to: toEmail,
    subject: 'Weather Alert',
    text: emailText,
  }

  // Send the email
  let e = transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error)
    } else {
      console.log('Email sent:', info.response)
    }
  })
  return e
}

export const syncAll = async () => {
  // if (res) {
  //   console.log('Syncing all profiles is done ✅')
  // }
}

// Crontab expression
// * * * * *
// │ │ │ │ │
// │ │ │ │ └─────────── Day of the week (0 - 6)
// │ │ │ └───────────── Month (1 - 12)
// │ │ └─────────────── Day of the month (1 - 31)
// │ └───────────────── Hour (0 - 23)
// └─────────────────── Minute (0 - 59)

// Runs every Wednesday at 12:00
cron.schedule(`0 12 * * 3`, async () => {
  console.log('Syncing all profiles... 🚀')
  syncAll()
})
