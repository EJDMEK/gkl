import React from 'react'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
}

const Section: React.FC<SectionProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-6 sm:py-8 md:py-12 lg:py-16 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {children}
      </div>
    </section>
  )
}

export default Section

