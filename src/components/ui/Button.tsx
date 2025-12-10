import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseStyles = 'font-medium rounded-lg transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center gap-2 active:scale-[0.98]'
  
  const variants = {
    primary: 'bg-secondary text-white hover:bg-secondary-light shadow-md hover:shadow-lg focus:ring-secondary relative overflow-hidden',
    secondary: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    tertiary: 'bg-transparent text-primary underline-offset-4 hover:underline focus:ring-primary',
  }
  
  const sizes = {
    sm: 'px-4 py-2.5 text-sm min-h-[44px] sm:min-h-[40px]',
    md: 'px-5 py-3 text-sm sm:text-base min-h-[44px] sm:min-h-[44px]',
    lg: 'px-6 sm:px-8 py-3.5 sm:py-4 text-base sm:text-lg min-h-[48px] sm:min-h-[52px]',
  }
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {variant === 'primary' && (
        <>
          <div 
            className="absolute left-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'url(/mm1_btn_bgl.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
            }}
          />
          <div 
            className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'url(/mm1_btn_bgr.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
            }}
          />
        </>
      )}
      <span className="relative z-10 flex items-center gap-2">
        {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
        {children}
        {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
      </span>
    </button>
  )
}

export default Button

