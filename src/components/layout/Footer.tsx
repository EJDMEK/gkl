import React from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/i18n'
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiInstagram, FiArrowRight } from 'react-icons/fi'

const Footer: React.FC = () => {
  const { t, language } = useI18n()

  const getBasePath = () => {
    return language === 'cs' ? '/cs' : '/en'
  }

  const getPath = (path: string) => {
    return `${getBasePath()}${path}`
  }

  return (
    <footer className="bg-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* O klubu */}
          <div>
            <h3 className="font-display text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t('footer.about')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={getPath(language === 'cs' ? '/klub' : '/club')} className="text-neutral-beige hover:text-secondary transition-colors duration-500 ease-out text-sm sm:text-base py-1 block min-h-[44px] flex items-center">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to={getPath(language === 'cs' ? '/hriste' : '/courses')} className="text-neutral-beige hover:text-secondary transition-colors text-sm sm:text-base py-1 block min-h-[44px] flex items-center">
                  {t('nav.courses')}
                </Link>
              </li>
              <li>
                <Link to={getPath(language === 'cs' ? '/vyuka-golfu' : '/golf-lessons')} className="text-neutral-beige hover:text-secondary transition-colors text-sm sm:text-base py-1 block min-h-[44px] flex items-center">
                  {t('nav.services')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Rychlé odkazy */}
          <div>
            <h3 className="font-display text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to={getPath(language === 'cs' ? '/cenik' : '/pricing')} className="text-neutral-beige hover:text-secondary transition-colors text-sm sm:text-base py-1 block min-h-[44px] flex items-center">
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link to={getPath(language === 'cs' ? '/souteze' : '/tournaments')} className="text-neutral-beige hover:text-secondary transition-colors text-sm sm:text-base py-1 block min-h-[44px] flex items-center">
                  {t('nav.tournaments')}
                </Link>
              </li>
              <li>
                <Link to={getPath(language === 'cs' ? '/fotogalerie' : '/gallery')} className="text-neutral-beige hover:text-secondary transition-colors text-sm sm:text-base py-1 block min-h-[44px] flex items-center">
                  {t('nav.gallery')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="font-display text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-3 text-neutral-beige">
              <li>
                <Link to={getPath('/kontakt')} className="hover:text-secondary transition-colors flex items-center gap-2 text-sm sm:text-base py-1 min-h-[44px]">
                  <FiArrowRight className="w-4 h-4 flex-shrink-0" />
                  {t('nav.contact')}
                </Link>
              </li>
              <li className="flex items-start gap-2 text-sm sm:text-base">
                <FiMapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Líšnice 94<br />252 10 Líšnice</span>
              </li>
              <li className="flex items-center gap-2 text-sm sm:text-base">
                <FiPhone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+420318123456" className="hover:text-secondary transition-colors py-1 min-h-[44px] flex items-center">+420 318 123 456</a>
              </li>
              <li className="flex items-center gap-2 text-sm sm:text-base">
                <FiMail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@gkl.cz" className="hover:text-secondary transition-colors py-1 min-h-[44px] flex items-center break-all">info@gkl.cz</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-display text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{t('footer.social')}</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-neutral-beige hover:text-secondary transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10"
                  aria-label="Facebook"
                >
                  <FiFacebook className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="text-neutral-beige hover:text-secondary transition-all duration-300 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/10"
                  aria-label="Instagram"
                >
                  <FiInstagram className="w-6 h-6" />
                </a>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/20 text-center text-neutral-beige text-sm">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

