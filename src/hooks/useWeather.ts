import { useState, useEffect } from 'react'

export interface WeatherData {
  date: string
  temp: number
  description: string
  icon: string
  humidity: number
  windSpeed: number
  feelsLike?: number
}

interface WeatherApiResponse {
  list: Array<{
    dt: number
    dt_txt: string
    main: {
      temp: number
      feels_like: number
      humidity: number
    }
    weather: Array<{
      description: string
      icon: string
    }>
    wind: {
      speed: number
    }
  }>
}

// Koordináty pro Líšnice 94, 252 10 Líšnice
// Přesné souřadnice pro tuto adresu
const LAT = 49.9111
const LON = 14.3250

// API klíč
const API_KEY = '354a5035ba18c5c819736f6c5cff8515'

export const useWeather = (language: 'cs' | 'en' = 'cs', days: number = 5) => {
  const [weather, setWeather] = useState<WeatherData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true)
        setError(null)

        // OpenWeatherMap API - 5 day / 3 hour forecast
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&units=metric&lang=${language === 'cs' ? 'cz' : 'en'}&appid=${API_KEY}`
        )

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('Invalid API key')
          }
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data: WeatherApiResponse = await response.json()

        // Zpracování dat - vezmeme dnešek a další dny
        const processedData: WeatherData[] = []
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        for (let i = 0; i < days; i++) {
          const targetDate = new Date(today)
          targetDate.setDate(today.getDate() + i)
          const dateStr = targetDate.toISOString().split('T')[0]

          // Najdeme předpověď pro tento den (preferujeme 12:00, jinak první dostupnou)
          let forecast = data.list.find(
            (item) => item.dt_txt.startsWith(dateStr) && item.dt_txt.includes('12:00:00')
          )

          if (!forecast) {
            // Pokud není 12:00, vezmeme první předpověď pro tento den
            forecast = data.list.find((item) => item.dt_txt.startsWith(dateStr))
          }

          if (forecast) {
            processedData.push({
              date: dateStr,
              temp: Math.round(forecast.main.temp),
              description: forecast.weather[0].description,
              icon: forecast.weather[0].icon,
              humidity: forecast.main.humidity,
              windSpeed: Math.round(forecast.wind.speed * 3.6), // m/s to km/h
              feelsLike: Math.round(forecast.main.feels_like),
            })
          }
        }

        setWeather(processedData)
      } catch (err) {
        console.error('Weather fetch error:', err)
        setError(err instanceof Error ? err.message : 'Failed to fetch weather')
        setWeather([])
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [language, days])

  return { weather, loading, error }
}

