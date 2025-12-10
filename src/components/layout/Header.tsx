import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useI18n } from '../../i18n/i18n'
import Navigation from './Navigation'
import { FiLogIn, FiUser } from 'react-icons/fi'

const Header: React.FC = () => {
  const { language, setLanguage, t } = useI18n()
  const location = useLocation()
  const navigate = useNavigate()
  const [isOnHero, setIsOnHero] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const checkHeroSection = () => {
      const heroSection = document.querySelector('[data-hero-section]')
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect()
        setIsOnHero(rect.top < window.innerHeight * 0.8 && rect.bottom > 0)
      } else {
        setIsOnHero(false)
      }
    }

    const timer = setTimeout(checkHeroSection, 100)
    checkHeroSection()
    window.addEventListener('scroll', checkHeroSection)
    window.addEventListener('resize', checkHeroSection)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', checkHeroSection)
      window.removeEventListener('resize', checkHeroSection)
    }
  }, [location.pathname])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const getBasePath = () => {
    return language === 'cs' ? '/cs' : '/en'
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isHomePage = location.pathname === '/cs' || location.pathname === '/en' || location.pathname === '/'
    
    if (isHomePage) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const getPath = (path: string) => {
    return `/${language === 'cs' ? 'cs' : 'en'}${path}`
  }

  const changeLanguage = (lang: 'cs' | 'en') => {
    setLanguage(lang)
    // Když přepínáme z angličtiny do češtiny, přesměruj na homepage
    if (lang === 'cs' && language === 'en') {
      navigate('/cs')
    } else {
      const currentPath = location.pathname
      const pathWithoutLang = currentPath.replace(/^\/(cs|en)/, '')
      const newPath = `/${lang}${pathWithoutLang || ''}`
      navigate(newPath)
    }
  }


  const navItems = [
    { key: 'home', path: '' },
    { key: 'news', path: language === 'cs' ? '/aktuality' : '/news' },
    { key: 'about', path: language === 'cs' ? '/klub' : '/club' },
    { key: 'courses', path: language === 'cs' ? '/hriste' : '/courses' },
    { key: 'pricing', path: language === 'cs' ? '/cenik' : '/pricing' },
    { key: 'tournaments', path: language === 'cs' ? '/souteze' : '/tournaments' },
    { key: 'services', path: language === 'cs' ? '/vyuka-golfu' : '/golf-lessons' },
    { key: 'contact', path: '/kontakt' },
  ]

  const isActive = (path: string, key: string) => {
    if (language === 'en') {
      const hash = window.location.hash
      const anchorMap: Record<string, string> = {
        'home': '',
        'news': '#news',
        'about': '#about',
        'courses': '#course',
        'pricing': '#pricing',
        'tournaments': '#tournaments',
        'services': '#services',
        'contact': '#contact',
      }
      return location.pathname === '/en' && hash === anchorMap[key]
    }
    const fullPath = getPath(path)
    return location.pathname === fullPath || (path === '' && location.pathname === `/${language}`)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-neutral-light/30 transition-all duration-500 ${
      isMobileMenuOpen 
        ? 'bg-white shadow-lg' 
        : isOnHero 
          ? 'bg-white/98 backdrop-blur-md border-white/30 shadow-lg' 
          : 'bg-white/98 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link 
            to={getBasePath()} 
            onClick={handleLogoClick}
            className="flex items-center flex-shrink-0"
          >
            <img 
              src="/2025_GKL_1928_logo.svg" 
              alt="GKL Logo" 
              className="h-32 md:h-36 lg:h-40 xl:h-44 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="flex-1 flex justify-center max-w-4xl mx-4">
            <Navigation />
          </div>

          {/* Right Side - Login & Language */}
          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 text-primary hover:text-primary-dark transition-all duration-500 ease-out group border border-primary/20 hover:border-primary/30 hover:shadow-sm backdrop-blur-sm min-h-[44px]"
            >
              <div className="relative">
                <FiUser className="w-4 h-4 group-hover:scale-105 transition-transform duration-500 ease-out relative z-10" />
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{language === 'cs' ? 'Přihlášení pro členy' : 'Member Login'}</span>
            </Link>

            <div className="flex items-center gap-1 pl-3 md:pl-4 border-l border-neutral-light/60">
              <button
                onClick={() => changeLanguage('cs')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-500 ease-out min-h-[40px] min-w-[40px] relative ${
                  language === 'cs' 
                    ? 'text-primary bg-primary/10 shadow-sm' 
                    : 'text-neutral-dark/70 hover:text-primary hover:bg-primary/5'
                }`}
              >
                CZ
                {language === 'cs' && (
                  <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-secondary rounded-full"></span>
                )}
              </button>
              <span className="text-neutral-light/40 text-xs">|</span>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-500 ease-out min-h-[40px] min-w-[40px] relative ${
                  language === 'en' 
                    ? 'text-primary bg-primary/10 shadow-sm' 
                    : 'text-neutral-dark/70 hover:text-primary hover:bg-primary/5'
                }`}
              >
                EN
                {language === 'en' && (
                  <span className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-secondary rounded-full"></span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between h-16 relative">
          {/* Logo */}
          <Link 
            to={getBasePath()} 
            className="flex items-center flex-shrink-0"
            onClick={(e) => {
              setIsMobileMenuOpen(false)
              handleLogoClick(e)
            }}
          >
            <img 
              src="/2025_GKL_1928_logo.svg" 
              alt="GKL Logo" 
              className="h-32 sm:h-36 md:h-28 w-auto object-contain"
            />
          </Link>

          {/* Right Side - Menu Button, Login, Language */}
          <div className="flex items-center gap-2">
            {/* Login Icon */}
            <Link
              to="/login"
              className="p-2 rounded-lg bg-primary/5 hover:bg-primary/10 text-primary transition-all duration-500 ease-out min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label={language === 'cs' ? 'Přihlášení' : 'Login'}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiLogIn className="w-5 h-5" />
            </Link>

            {/* Language Switcher */}
            <div className="flex items-center gap-0.5 border-l border-neutral-light/60 pl-2">
              <button
                onClick={() => changeLanguage('cs')}
                className={`px-2.5 py-2 rounded text-xs font-semibold min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  language === 'cs' 
                    ? 'text-primary bg-primary/10' 
                    : 'text-neutral-dark/70'
                }`}
              >
                CZ
              </button>
              <span className="text-neutral-light/40 text-xs">|</span>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2.5 py-2 rounded text-xs font-semibold min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  language === 'en' 
                    ? 'text-primary bg-primary/10' 
                    : 'text-neutral-dark/70'
                }`}
              >
                EN
              </button>
            </div>

            {/* Hamburger Menu Button */}
            <button
              className="p-2 rounded-lg bg-white/90 backdrop-blur-sm border border-neutral-light/30 shadow-sm min-w-[44px] min-h-[44px] flex flex-col items-center justify-center gap-1.5"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className={`block w-5 h-0.5 bg-neutral-dark transition-all duration-500 ease-out ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-neutral-dark transition-all duration-500 ease-out ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-5 h-0.5 bg-neutral-dark transition-all duration-500 ease-out ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/30 z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          {/* Menu */}
          <div className="fixed top-16 left-0 right-0 bg-white shadow-xl z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-neutral-light/50 md:hidden">
            <nav className="flex flex-col">
              {/* Nadpis Menu */}
              <div className="px-6 py-4 border-b border-neutral-light/50 bg-neutral-cream/30">
                <h2 className="text-xl font-display font-bold text-primary-dark">Menu</h2>
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={getPath(item.path)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-6 py-4 text-base font-medium min-h-[48px] flex items-center border-b border-neutral-light/30 ${
                    isActive(item.path, item.key)
                      ? 'text-primary bg-primary/5 border-l-4 border-secondary font-semibold'
                      : 'text-neutral-dark hover:text-primary hover:bg-primary/5 active:bg-primary/10'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  )
}

export default Header
