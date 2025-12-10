import { useState, useEffect } from 'react'

export interface CurrentWeatherData {
  temp: number
  description: string
  icon: string
  loading: boolean
  error: string | null
}

// Koordináty pro Líšnice 94, 252 10 Líšnice
const LAT = 49.9111
const LON = 14.3250

// API klíč
const API_KEY = '354a5035ba18c5c819736f6c5cff8515'

export const useCurrentWeather = (language: 'cs' | 'en' = 'cs') => {
  const [weather, setWeather] = useState<CurrentWeatherData>({
    temp: 0,
    description: '',
    icon: '',
    loading: true,
    error: null
  })

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      try {
        setWeather(prev => ({ ...prev, loading: true, error: null }))

        // OpenWeatherMap API - Current Weather
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&lang=${language === 'cs' ? 'cz' : 'en'}&appid=${API_KEY}`
        )

        if (!response.ok) {
          if (response.status === 401) {
            throw new Error('Invalid API key')
          }
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()

        setWeather({
          temp: Math.round(data.main.temp),
          description: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
          loading: false,
          error: null
        })
      } catch (err) {
        console.error('Weather fetch error:', err)
        setWeather({
          temp: 0,
          description: '',
          icon: '',
          loading: false,
          error: err instanceof Error ? err.message : 'Failed to fetch weather'
        })
      }
    }

    fetchCurrentWeather()
    
    // Aktualizovat každých 10 minut
    const interval = setInterval(fetchCurrentWeather, 10 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [language])

  return weather
}

