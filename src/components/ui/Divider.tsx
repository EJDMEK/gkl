import React from 'react'
import FlowerDecoration from './FlowerDecoration'

interface DividerProps {
  variant?: 'simple' | 'decorative' | 'image'
  className?: string
  flipped?: boolean // Pro otočení obrázku (uzavření sekce)
}

const Divider: React.FC<DividerProps> = ({ variant = 'image', className = '', flipped = false }) => {
  if (variant === 'image') {
    return (
      <div className={`bg-neutral-cream/70 py-2 md:py-3 ${className}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center">
            <img 
              src="/oddelovac.png" 
              alt="Oddělovač" 
              className={`w-full max-w-md md:max-w-lg h-auto object-contain opacity-60 ${flipped ? 'scale-x-[-1]' : ''}`}
            />
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'decorative') {
    return (
      <div className={`bg-neutral-cream/70 py-4 ${className}`}>
        <div className="container mx-auto px-4 md:px-6 flex justify-center">
          <FlowerDecoration size="md" />
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-neutral-cream/70 py-4 ${className}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <FlowerDecoration size="sm" />
      </div>
    </div>
  )
}

export default Divider

