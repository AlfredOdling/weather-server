import * as dotenv from 'dotenv'
import fs from 'fs'

dotenv.config()
export const readAlert = async ({ notificationEmail }) => {
  return new Promise((resolve, reject) => {
    fs.readFile(
      `routes/saveAlert/alerts/alert-${notificationEmail}.json`,
      'utf8',
      (err, data) => {
        if (err) {
          console.error('Error reading alert:', err)
          reject(err)
        } else {
          resolve(JSON.parse(data))
        }
      }
    )
  })
}
