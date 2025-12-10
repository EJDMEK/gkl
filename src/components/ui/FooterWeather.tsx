import React from 'react'
import { useCurrentWeather } from '../../hooks/useCurrentWeather'
import { useWeather } from '../../hooks/useWeather'
import { useI18n } from '../../i18n/i18n'
import { FiCloud, FiLoader } from 'react-icons/fi'

const FooterWeather: React.FC = () => {
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

    return { label, dateFormatted }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center gap-2 text-neutral-beige text-sm py-4">
        <FiLoader className="w-4 h-4 animate-spin" />
        <span>{language === 'cs' ? 'Načítání...' : 'Loading...'}</span>
      </div>
    )
  }

  if (hasError || !temp) {
    return null
  }

  return (
    <div className="bg-white/10 rounded-lg p-4 border border-white/20 backdrop-blur-sm">
      <h4 className="text-white font-semibold text-sm mb-3 pb-2 border-b border-white/20">
        {language === 'cs' ? 'Počasí' : 'Weather'}
      </h4>
      
      {/* Kombinujeme aktuální počasí s předpovědí pro dnes, zítra a pozítří */}
      {(() => {
        const today = new Date()
        today.setHours(0, 0, 0, 0)
        const todayStr = today.toISOString().split('T')[0]
        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)
        const tomorrowStr = tomorrow.toISOString().split('T')[0]
        const dayAfter = new Date(today)
        dayAfter.setDate(dayAfter.getDate() + 2)
        const dayAfterStr = dayAfter.toISOString().split('T')[0]

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
          <div className="space-y-2">
            {allDays.map((day, idx) => {
              const dateInfo = formatDate(day.date)
              const isToday = idx === 0
              
              return (
                <div key={idx} className="flex items-center gap-3 text-sm">
                  <div className="flex-shrink-0 w-20 text-neutral-beige text-xs">
                    <div>{dateInfo.label}</div>
                    <div className="text-neutral-beige/70">{dateInfo.dateFormatted}</div>
                  </div>
                  <div className="flex-shrink-0">
                    {day.icon ? (
                      <img 
                        src={isToday ? day.icon : `https://openweathermap.org/img/wn/${day.icon}@2x.png`}
                        alt={day.description}
                        className="w-8 h-8 object-contain"
                      />
                    ) : (
                      <FiCloud className="w-8 h-8 text-white" />
                    )}
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <span className="text-white font-semibold">{day.temp}°C</span>
                    <span className="text-neutral-beige text-xs capitalize hidden sm:inline truncate ml-2">
                      {day.description}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        )
      })()}
    </div>
  )
}

export default FooterWeather

