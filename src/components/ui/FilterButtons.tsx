import React, { useState, useEffect, useRef } from 'react'
import { FiFilter } from 'react-icons/fi'

export interface FilterOption {
  id: string
  label: string
  disabled?: boolean
}

interface FilterButtonsProps {
  filters: FilterOption[]
  selectedFilter: string
  onFilterClick: (filterId: string) => void
  title?: string
  className?: string
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  filters,
  selectedFilter,
  onFilterClick,
  title,
  className = '',
}) => {
  const [isFixed, setIsFixed] = useState(false)
  const filterRef = useRef<HTMLDivElement>(null)
  const placeholderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!filterRef.current || window.innerWidth < 768) {
        setIsFixed(false)
        return
      }

      const filterTop = filterRef.current.getBoundingClientRect().top
      const headerHeight = 96 // Přibližná výška headeru
      
      // Když se filtry dostanou nad horní okraj, přilepí se
      if (filterTop <= headerHeight) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Zkontrolovat při načtení

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      {/* Placeholder pro zachování prostoru při fixed pozici */}
      {isFixed && (
        <div ref={placeholderRef} className="hidden md:block h-[100px] sm:h-[110px] md:h-[120px]" />
      )}
      
      <div 
        ref={filterRef}
        className={`
          bg-neutral-cream/70 py-4 sm:py-5 md:py-6 
          ${isFixed ? 'hidden md:block fixed top-24 left-0 right-0 z-40 shadow-lg border-b border-neutral-light/50' : ''}
          ${className}
        `}
      >
        <div className="container mx-auto px-3 sm:px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            {title && (
              <div className="text-center mb-3 sm:mb-4">
                <h3 className="text-base sm:text-lg md:text-xl font-display font-semibold text-primary-dark flex items-center justify-center gap-2">
                  <FiFilter className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                  {title}
                </h3>
              </div>
            )}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => !filter.disabled && onFilterClick(filter.id)}
                  disabled={filter.disabled}
                  className={`
                    px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 
                    text-xs sm:text-sm md:text-base 
                    font-semibold 
                    rounded-lg 
                    transition-all 
                    duration-300 
                    ease-out
                    min-h-[44px]
                    min-w-[44px]
                    touch-manipulation
                    ${
                      filter.disabled
                        ? 'opacity-40 cursor-not-allowed bg-neutral-light text-neutral-dark'
                        : selectedFilter === filter.id
                        ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg scale-[1.05] ring-2 ring-primary/30'
                        : 'bg-white/90 text-primary-dark border-2 border-primary/30 hover:border-primary hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98] shadow-sm'
                    }
                  `}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FilterButtons

