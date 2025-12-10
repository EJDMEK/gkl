import React from 'react'
import FlowerDecoration from './FlowerDecoration'

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  className?: string
}

const PageHero: React.FC<PageHeroProps> = ({ 
  title, 
  subtitle, 
  backgroundImage = '/hero.jpg',
  className = '' 
}) => {
  // Escapování cesty pro URL - nahrazení mezer a speciálních znaků
  // encodeURI správně escapuje mezery jako %20
  const escapedImagePath = backgroundImage ? encodeURI(backgroundImage) : encodeURI('/hero.jpg')
  
  return (
    <div
      className={`relative mt-24 h-[300px] sm:h-[350px] md:h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat ${className}`}
      style={{
        backgroundImage: `url(${escapedImagePath})`,
      }}
    >
      {/* Overlay pro lepší čitelnost textu - ztmavený */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      
      {/* Hlavní obsah */}
      <div className="relative z-10 text-center text-neutral-beige px-4 sm:px-6 md:px-8 max-w-5xl mx-auto w-full">
        {/* Dekorativní prvek nad nadpisem */}
        <div className="flex justify-center mb-4">
          <FlowerDecoration size="md" className="text-neutral-beige/80" />
        </div>
        
        {/* Nadpis */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-2 sm:mb-3 md:mb-4 text-balance leading-tight tracking-tight drop-shadow-lg text-neutral-beige">
          {title}
        </h1>
        
        {/* Podnadpis */}
        {subtitle && (
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-beige/95 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-md mt-2 sm:mt-3">
            {subtitle}
          </p>
        )}
        
        {/* Dekorativní prvek pod nadpisem */}
        <div className="flex justify-center mt-4 sm:mt-5 md:mt-6">
          <FlowerDecoration size="sm" className="text-neutral-beige/70" />
        </div>
      </div>
    </div>
  )
}

export default PageHero

