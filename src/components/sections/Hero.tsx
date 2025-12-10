import React from 'react'
import Button from '../ui/Button'
import FlowerDecoration from '../ui/FlowerDecoration'

interface HeroProps {
  title: string
  subtitle?: string
  cta1?: { text: string; link: string }
  cta2?: { text: string; link: string }
  cta3?: { text: string; link: string }
  backgroundImage?: string
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  cta1,
  cta2,
  cta3,
  backgroundImage = '/hero.jpg',
}) => {
  // Escapování cesty pro URL - nahrazení mezer a speciálních znaků
  const escapedImagePath = backgroundImage ? encodeURI(backgroundImage) : encodeURI('/hero.jpg')
  
  return (
    <div
      className="relative h-screen min-h-[600px] flex items-center justify-center bg-cover bg-center bg-fixed sm:bg-fixed bg-no-repeat"
      style={{
        backgroundImage: `url(${escapedImagePath})`,
      }}
    >
      {/* Velmi jemný overlay pro lepší čitelnost textu */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/15 sm:from-black/5 sm:via-transparent sm:to-black/10"></div>
      
      {/* Hlavní obsah */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 max-w-5xl mx-auto w-full pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-20 sm:pb-24">
        {/* Logo nad nadpisem */}
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 group animate-fade-in-down">
          <img 
            src="/gkl-logo.png" 
            alt="GKL Logo" 
            className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain drop-shadow-2xl"
          />
        </div>
        
        {/* Nadpis - větší na mobilu */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-5 md:mb-6 lg:mb-8 text-balance leading-[1.1] sm:leading-tight tracking-tight px-2 sm:px-4 group animate-fade-in-up animation-delay-100">
          <span className="inline-block">
            {title}
          </span>
        </h1>
        
        {/* Podnadpis - větší na mobilu */}
        {subtitle && (
          <div className="mb-5 sm:mb-6 md:mb-8 lg:mb-10 px-2 sm:px-4 group animate-fade-in-up animation-delay-200">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 sm:text-neutral-beige max-w-3xl mx-auto leading-relaxed font-light">
              {subtitle}
            </p>
          </div>
        )}
        
        {/* Dekorativní prvek pod podnadpisem - kytičky */}
        <div className="flex justify-center mb-6 sm:mb-7 md:mb-8 lg:mb-10 group animate-fade-in-up animation-delay-200">
          <FlowerDecoration size="sm" className="text-white/70" />
        </div>
        
        {/* Tlačítka - vedle sebe na desktopu */}
        {(cta1 || cta2 || cta3) && (
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-stretch md:items-center px-2 sm:px-4 animate-fade-in-up animation-delay-300">
            {cta1 && (
              <Button 
                variant="primary" 
                size="lg" 
                onClick={() => {
                  if (cta1.link.startsWith('#')) {
                    const element = document.querySelector(cta1.link)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  } else {
                    window.location.href = cta1.link
                  }
                }}
                className="w-full md:w-auto md:min-w-[200px] lg:min-w-[220px] shadow-xl hover:shadow-lg hover:shadow-secondary/30 active:scale-[0.98] transition-all duration-500 ease-out min-h-[52px] text-base sm:text-lg font-semibold"
              >
                {cta1.text}
              </Button>
            )}
            {cta2 && (
              <button
                onClick={() => {
                  if (cta2.link.startsWith('#')) {
                    const element = document.querySelector(cta2.link)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  } else {
                    window.location.href = cta2.link
                  }
                }}
                className="w-full md:w-auto md:min-w-[200px] lg:min-w-[220px] px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border-2 border-white/90 text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-white/15 hover:border-white active:scale-[0.98] transition-all duration-500 ease-out backdrop-blur-sm shadow-lg min-h-[52px]"
              >
                {cta2.text}
              </button>
            )}
            {cta3 && (
              <button
                onClick={() => {
                  if (cta3.link.startsWith('#')) {
                    const element = document.querySelector(cta3.link)
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  } else {
                    window.location.href = cta3.link
                  }
                }}
                className="w-full md:w-auto md:min-w-[200px] lg:min-w-[220px] px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border-2 border-white/90 text-white text-base sm:text-lg font-semibold rounded-lg hover:bg-white/15 hover:border-white active:scale-[0.98] transition-all duration-500 ease-out backdrop-blur-sm shadow-lg min-h-[52px]"
              >
                {cta3.text}
              </button>
            )}
          </div>
        )}
      </div>
      
      {/* Scroll indicator - skrytý na mobilu */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="relative">
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white/80 hover:text-white transition-all duration-500 ease-out"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Hero

