import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  hover?: boolean
  animated?: boolean
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  hover?: boolean
  animated?: boolean
  withBackground?: boolean // Pro použití hpboxes_more_bg.png
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = true, animated = false, withBackground = false, ...props }) => {
  const baseStyles = 'bg-white/90 rounded-xl shadow-md p-4 sm:p-5 md:p-6 lg:p-8 text-sm sm:text-base'
  const hoverStyles = hover ? 'transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]' : ''
  const animatedStyles = animated ? 'animate-fade-in-up' : ''
  const backgroundStyles = withBackground ? 'relative overflow-hidden' : ''
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${animatedStyles} ${backgroundStyles} ${className}`} {...props}>
      {withBackground && (
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'url(/hpboxes_more_bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}
      <div className={withBackground ? 'relative z-10' : ''}>
      {children}
      </div>
    </div>
  )
}

export default Card

