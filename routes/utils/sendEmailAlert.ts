import * as dotenv from 'dotenv'
import nodemailer from 'nodemailer'

dotenv.config()

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
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error)
    } else {
      console.log('Email sent:', info.response)
    }
  })
}
