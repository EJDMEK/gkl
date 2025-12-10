import React from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import Hero from '../components/sections/Hero'
import Section from '../components/ui/Section'
import Button from '../components/ui/Button'
import FacilitiesStatusBar from '../components/ui/FacilitiesStatusBar'
import Divider from '../components/ui/Divider'
import { FiArrowRight } from 'react-icons/fi'

const FontPreview3: React.FC = () => {
  const { t, language } = useI18n()

  const getPath = (path: string) => {
    return `/${language === 'cs' ? 'cs' : 'en'}${path}`
  }


  return (
    <div className="font-preview-3">
      {/* Hero Section */}
      <div data-hero-section>
        <Hero
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        cta1={{ text: t('home.hero.cta1'), link: getPath(language === 'cs' ? '/hriste' : '/courses') }}
        cta2={{ text: t('home.hero.cta2'), link: getPath(language === 'cs' ? '/cenik' : '/pricing') }}
        cta3={{ text: t('home.hero.cta3'), link: getPath(language === 'cs' ? '/kontakt' : '/contact') }}
        />
      </div>

      {/* Facilities Status Bar */}
      <FacilitiesStatusBar />

      {/* Weather Widget - temporarily hidden */}
      {/* <Section className="bg-white/80 py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <WeatherWidget />
          </div>
        </div>
      </Section> */}

      {/* About Preview */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in-left">
              <div className="flex justify-center mb-6">
                <img 
                  src="/2025_GKL_1928_logo.svg" 
                  alt="GKL Logo" 
                  className="h-32 md:h-40 w-auto object-contain"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 animate-fade-in-right">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-4">
                {t('home.about.title')}
              </h2>
              <p className="text-lg text-neutral-dark mb-6 leading-relaxed">
                {t('home.about.description')}
              </p>
              <Link to={getPath(language === 'cs' ? '/klub' : '/club')}>
                <Button variant="secondary" icon={<FiArrowRight />} iconPosition="right">
                  {t('home.about.cta')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Font Info Banner */}
      <Section className="bg-primary-dark text-white py-4">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-lg font-semibold">Náhled fontu: <span className="text-secondary">Crimson Text</span></p>
          <p className="text-sm mt-2 opacity-90">Toto je skrytá stránka pro výběr fontu</p>
        </div>
      </Section>
    </div>
  )
}

export default FontPreview3

