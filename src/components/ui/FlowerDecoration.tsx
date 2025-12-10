import React from 'react'

interface FlowerDecorationProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const FlowerDecoration: React.FC<FlowerDecorationProps> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6'
  }

  // Stylizovaná kytička - design inspirovaný starými stránkami
  const FlowerIcon = ({ className: iconClassName }: { className?: string }) => (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      xmlns="http://www.w3.org/2000/svg"
      className={iconClassName}
    >
      {/* Střed květu */}
      <circle cx="12" cy="12" r="2" opacity="0.7" />
      {/* Okvětní lístky - 5 lístků kolem středu ve tvaru hvězdy */}
      <path 
        d="M12 3 L13.5 8.5 L19 10 L14.5 13.5 L15.5 19 L12 16 L8.5 19 L9.5 13.5 L5 10 L10.5 8.5 Z" 
        opacity="0.5"
      />
    </svg>
  )

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <FlowerIcon className={`${sizeClasses[size]} text-primary/60`} />
      <FlowerIcon className={`${sizeClasses[size]} text-primary/70`} />
      <FlowerIcon className={`${sizeClasses[size]} text-primary/60`} />
    </div>
  )
}

export default FlowerDecoration

