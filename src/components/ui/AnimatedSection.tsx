import React from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', id }) => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id={id}
      ref={ref}
      className={`py-16 md:py-24 transition-opacity duration-700 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  )
}

export default AnimatedSection

