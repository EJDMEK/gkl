import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useI18n } from '../../i18n/i18n'

interface NavigationProps {
  isMobileMenuOpen?: boolean
  setIsMobileMenuOpen?: (open: boolean) => void
}

const Navigation: React.FC<NavigationProps> = ({ isMobileMenuOpen = false, setIsMobileMenuOpen }) => {
  const { t, language } = useI18n()
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  // Use parent state if provided, otherwise use local state
  const menuOpen = setIsMobileMenuOpen ? isMobileMenuOpen : isOpen
  const setMenuOpen = setIsMobileMenuOpen || setIsOpen

  const getPath = (path: string) => {
    return `/${language === 'cs' ? 'cs' : 'en'}${path}`
  }

  // For English version, use anchor links for single-page navigation
  const getNavPath = (key: string, path: string) => {
    if (language === 'en') {
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
      return anchorMap[key] || path
    }
    return path
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
      // For English, check if we're on the main page and the anchor matches
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { key: string; path: string }) => {
    if (language === 'en' && item.key !== 'home') {
      const anchorMap: Record<string, string> = {
        'about': '#about',
        'courses': '#course',
        'pricing': '#pricing',
        'tournaments': '#tournaments',
        'services': '#services',
        'contact': '#contact',
      }
      const anchor = anchorMap[item.key]
      if (anchor) {
        e.preventDefault()
        if (location.pathname !== '/en') {
          window.location.href = `/en${anchor}`
        } else {
          const element = document.querySelector(anchor)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }
      }
    }
  }

  // Close menu when route changes
  React.useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname, setMenuOpen])

  // Close menu when clicking outside
  React.useEffect(() => {
    if (!menuOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.mobile-menu-container') && !target.closest('[aria-label="Toggle menu"]')) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen, setMenuOpen])

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
        {navItems.map((item) => {
          const navPath = language === 'en' ? getNavPath(item.key, item.path) : getPath(item.path)
          const isAnchor = language === 'en' && item.key !== 'home' && navPath.startsWith('#')
          
          if (isAnchor) {
            return (
              <a
                key={item.key}
                href={navPath}
                onClick={(e) => handleNavClick(e, item)}
                className={`text-sm lg:text-base font-medium transition-all duration-500 ease-out px-3 py-2 rounded-lg relative group ${
                  isActive(item.path, item.key)
                    ? 'text-primary font-semibold'
                    : 'text-neutral-dark hover:text-primary'
                }`}
              >
                <span className="relative z-10">{t(`nav.${item.key}`)}</span>
                {isActive(item.path, item.key) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"></span>
                )}
                {!isActive(item.path, item.key) && (
                  <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></span>
                )}
              </a>
            )
          }
          
          return (
          <Link
            key={item.key}
              to={navPath}
            className={`text-sm lg:text-base font-medium transition-all duration-300 px-3 py-2 rounded-lg relative group ${
                isActive(item.path, item.key)
                ? 'text-primary font-semibold'
                : 'text-neutral-dark hover:text-primary'
            }`}
          >
            <span className="relative z-10">{t(`nav.${item.key}`)}</span>
              {isActive(item.path, item.key) && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"></span>
            )}
              {!isActive(item.path, item.key) && (
              <span className="absolute inset-0 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            )}
          </Link>
          )
        })}
      </nav>


      {/* Mobile Navigation */}
      <div className="mobile-menu-container md:hidden">
        {menuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            {/* Menu */}
            <div className="fixed top-16 sm:top-20 left-0 right-0 bg-white/98 backdrop-blur-md shadow-xl z-50 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-neutral-light/50">
              <nav className="flex flex-col">
                {navItems.map((item) => {
                  const navPath = language === 'en' ? getNavPath(item.key, item.path) : getPath(item.path)
                  const isAnchor = language === 'en' && item.key !== 'home' && navPath.startsWith('#')
                  
                  if (isAnchor) {
                    return (
                      <a
                        key={item.key}
                        href={navPath}
                        onClick={(e) => {
                          handleNavClick(e, item)
                          setMenuOpen(false)
                        }}
                        className={`px-6 py-4 text-base font-medium transition-all duration-300 min-h-[48px] flex items-center relative ${
                          isActive(item.path, item.key)
                            ? 'text-primary bg-primary/5 border-l-4 border-secondary font-semibold'
                            : 'text-neutral-dark hover:text-primary hover:bg-primary/5 active:bg-primary/10'
                        }`}
                      >
                        {t(`nav.${item.key}`)}
                      </a>
                    )
                  }
                  
                  return (
                  <Link
                    key={item.key}
                      to={navPath}
                    onClick={() => setMenuOpen(false)}
                    className={`px-6 py-4 text-base font-medium transition-all duration-300 min-h-[48px] flex items-center relative ${
                        isActive(item.path, item.key)
                        ? 'text-primary bg-primary/5 border-l-4 border-secondary font-semibold'
                        : 'text-neutral-dark hover:text-primary hover:bg-primary/5 active:bg-primary/10'
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                  )
                })}
              </nav>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Navigation

