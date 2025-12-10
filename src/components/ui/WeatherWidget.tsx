import React from 'react'
import { useCurrentWeather } from '../../hooks/useCurrentWeather'
import { useWeather } from '../../hooks/useWeather'
import { useI18n } from '../../i18n/i18n'
import { FiCloud, FiLoader } from 'react-icons/fi'
import Card from './Card'

const WeatherWidget: React.FC = () => {
  const { language } = useI18n()
  const { temp, description, icon, loading: currentLoading, error: currentError } = useCurrentWeather(language)
  const { weather: forecast, loading: forecastLoading, error: forecastError } = useWeather(language, 3)

  const isLoading = currentLoading || forecastLoading
  const hasError = currentError || forecastError

  // Formátování data
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const dayAfter = new Date(today)
    dayAfter.setDate(dayAfter.getDate() + 2)

    const dateStrOnly = dateStr.split('T')[0]
    const todayStr = today.toISOString().split('T')[0]
    const tomorrowStr = tomorrow.toISOString().split('T')[0]
    const dayAfterStr = dayAfter.toISOString().split('T')[0]

    let label = ''
    if (dateStrOnly === todayStr) {
      label = language === 'cs' ? 'Dnes' : 'Today'
    } else if (dateStrOnly === tomorrowStr) {
      label = language === 'cs' ? 'Zítra' : 'Tomorrow'
    } else if (dateStrOnly === dayAfterStr) {
      label = language === 'cs' ? 'Pozítří' : 'Day after tomorrow'
    } else {
      label = date.toLocaleDateString(language === 'cs' ? 'cs-CZ' : 'en-US', { 
        weekday: 'short',
        day: 'numeric',
        month: 'short'
      })
    }

    const dateFormatted = date.toLocaleDateString(language === 'cs' ? 'cs-CZ' : 'en-US', {
      day: 'numeric',
      month: 'numeric'
    })

    return { label, dateFormatted, date }
  }

  if (isLoading) {
    return (
      <Card className="p-6">
        <div className="flex items-center justify-center gap-3 py-8">
          <FiLoader className="w-5 h-5 animate-spin text-primary" />
          <span className="text-neutral-dark">{language === 'cs' ? 'Načítání počasí...' : 'Loading weather...'}</span>
        </div>
      </Card>
    )
  }

  if (hasError || !temp) {
    return null
  }

  // Kombinujeme aktuální počasí s předpovědí
  // Vytvoříme pole pro dnes, zítra a pozítří
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const todayStr = today.toISOString().split('T')[0]
  
  const allDays = []
  
  // Dnes - použijeme aktuální počasí
  allDays.push({
    date: todayStr,
    temp,
    description,
    icon: icon || '',
    isToday: true
  })
  
  // Zítra a pozítří - použijeme předpověď
  if (forecast && forecast.length > 0) {
    // Najdeme zítra a pozítří v předpovědi
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)
    const tomorrowStr = tomorrow.toISOString().split('T')[0]
    
    const dayAfter = new Date(today)
    dayAfter.setDate(dayAfter.getDate() + 2)
    const dayAfterStr = dayAfter.toISOString().split('T')[0]
    
    const tomorrowForecast = forecast.find(f => f.date === tomorrowStr)
    const dayAfterForecast = forecast.find(f => f.date === dayAfterStr)
    
    if (tomorrowForecast) {
      allDays.push({
        ...tomorrowForecast,
        isToday: false
      })
    }
    
    if (dayAfterForecast) {
      allDays.push({
        ...dayAfterForecast,
        isToday: false
      })
    }
  }

  return (
    <div>
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-display font-bold text-primary-dark">
          {language === 'cs' ? 'Předpověď počasí' : 'Weather Forecast'}
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
        {allDays.map((day, idx) => {
          const dateInfo = formatDate(day.date)
          const isToday = idx === 0
          
          return (
            <div
              key={idx}
              className="relative bg-white rounded-lg p-4 border border-neutral-light shadow-sm"
            >
              {isToday && (
                <div className="absolute top-2 right-2">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {language === 'cs' ? 'Aktuálně' : 'Now'}
                  </span>
                </div>
              )}
              
              <div className="text-center">
                <div className="text-xs md:text-sm font-medium text-neutral-dark mb-1">
                  {dateInfo.label}
                </div>
                <div className="text-xs text-neutral-dark/70 mb-2">
                  {dateInfo.dateFormatted}
                </div>
                
                <div className="flex justify-center mb-2">
                  {day.icon ? (
                    <img 
                      src={isToday ? day.icon : `https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                      alt={day.description}
                      className="w-12 h-12 md:w-14 md:h-14 object-contain"
                    />
                  ) : (
                    <FiCloud className="w-12 h-12 md:w-14 md:h-14 text-primary" />
                  )}
                </div>
                
                <div className="mb-1">
                  <span className="text-2xl md:text-3xl font-display font-bold text-primary-dark">
                    {day.temp}°C
                  </span>
                </div>
                
                {day.description && (
                  <div className="text-xs text-neutral-dark capitalize">
                    {day.description}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WeatherWidget
