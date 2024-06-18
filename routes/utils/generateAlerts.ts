import * as dotenv from 'dotenv'

dotenv.config()

interface GenerateAlertsProps {
  extremeTemperatureThreshold
  heavyRainThreshold
  hurricanesThreshold
  notificationEmail
  pushNotifications
  smsNumber
  stormsThreshold
  location
}

export const generateAlerts = async (data: GenerateAlertsProps) => {
  const apiKey = '8630ff89e58549dba2d82630230707' //process.env.REACT_APP_WEATHER_API_KEY
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${data.location}`

  let response: any = await fetch(url)
  if (!response.ok) throw new Error('Error fetching weather data')
  response = await response.json()

  const wind = Math.round(response?.current?.wind_kph / 3.6)
  const rain = response?.current?.precip_mm
  const temp = response?.current?.temp_c

  const alerts = {
    stormAlert: rain > data.stormsThreshold,
    hurricaneAlert: wind > data.hurricanesThreshold,
    heavyRainAlert: rain > data.heavyRainThreshold,
    extremeTempAlert: temp > data.extremeTemperatureThreshold,
  }

  return alerts
}
