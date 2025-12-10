import React from 'react'
import { useI18n } from '../../i18n/i18n'
import { getAllFacilities } from '../../data/facilities'

const FacilitiesStatusBar: React.FC = () => {
  const { language } = useI18n()
  const facilities = getAllFacilities().filter(f => f.id !== 'restaurant')

  return (
    <div className="relative w-full">
      {/* Top blurred background (10% of height) */}
      <div 
        className="absolute top-0 left-0 right-0 h-[10%] opacity-20"
        style={{
          backgroundImage: 'url(/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)'
        }}
      />
      
      {/* Main tan/brown background (90% of height) */}
      <div className="relative bg-[#D4C4A8] pt-[10%] py-2.5 sm:py-3 md:py-4">
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {facilities.map((facility) => {
              const displayName = language === 'en' && facility.nameEn ? facility.nameEn : facility.name
              const displayStatus = facility.status === 'open' 
                ? (facility.hours || facility.customMessage || 'open')
                : (facility.customMessage || 'closed')
              
              return (
                <div
                  key={facility.id}
                  className="text-center px-1 sm:px-0"
                >
                  {/* Title - bold white, uppercase */}
                  <div className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mb-0.5 sm:mb-1 md:mb-2 uppercase tracking-wide leading-tight">
                    {displayName}
                  </div>
                  {/* Status/Hours - smaller, lighter white */}
                  <div className={`text-[10px] sm:text-xs md:text-sm font-medium leading-tight ${
                    facility.status === 'open' 
                      ? 'text-white/90' 
                      : 'text-white/70'
                  }`}>
                    {displayStatus}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FacilitiesStatusBar

