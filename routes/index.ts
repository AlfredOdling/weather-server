import { Router, Request, Response } from 'express'
import { saveAlert } from './saveAlert'
import { testAlert } from './testAlert'

const router = Router()

router.post('/saveAlert', async (req: Request, res: Response) => {
  const {
    extremeTemperatureThreshold,
    heavyRainThreshold,
    hurricanesThreshold,
    notificationEmail,
    pushNotifications,
    smsNumber,
    stormsThreshold,
    location,
  } = req.body

  try {
    const data = await saveAlert({
      extremeTemperatureThreshold,
      heavyRainThreshold,
      hurricanesThreshold,
      notificationEmail,
      pushNotifications,
      smsNumber,
      stormsThreshold,
      location,
    })
    res.status(200).send({ data })
  } catch (error) {
    console.log('🚀  error:', error)
    console.error(error)
    res.status(500).send({ error: 'Failed', msg: error })
  }
})

router.post('/testAlert', async (req: Request, res: Response) => {
  const { notificationEmail } = req.body

  try {
    const data = await testAlert({
      notificationEmail,
    })
    console.log('🚀  data:', data)

    res.status(200).send({ data })
  } catch (error) {
    console.log('🚀  error:', error)
    console.error(error)
    res.status(500).send({ error: 'Failed', msg: error })
  }
})

export default router
