import React from 'react'
import { FiClock } from 'react-icons/fi'

interface OperatingHoursBarProps {
  className?: string
}

const OperatingHoursBar: React.FC<OperatingHoursBarProps> = ({ className = '' }) => {
  const operatingHours = [
    {
      label: 'Recepce',
      hours: '7:00 - 20:00',
      icon: <FiClock className="w-4 h-4" />
    },
    {
      label: 'Driving Range',
      hours: '7:00 - 20:00',
      icon: <FiClock className="w-4 h-4" />
    },
    {
      label: 'Restaurace',
      hours: '11:00 - 22:00',
      icon: <FiClock className="w-4 h-4" />
    }
  ]

  return (
    <div className={`bg-primary-dark text-white py-3 ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {operatingHours.map((item, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2 text-xs sm:text-sm md:text-base"
            >
              <span className="text-secondary">{item.icon}</span>
              <span className="font-medium">{item.label}:</span>
              <span className="text-neutral-beige">{item.hours}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OperatingHoursBar

