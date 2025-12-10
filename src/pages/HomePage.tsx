import React from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import Hero from '../components/sections/Hero'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import FlowerDecoration from '../components/ui/FlowerDecoration'
import FacilitiesStatusBar from '../components/ui/FacilitiesStatusBar'
import Divider from '../components/ui/Divider'
import WeatherWidget from '../components/ui/WeatherWidget'
import { memberships } from '../data/memberships'
import { news } from '../data/news'
import { tournaments2025 } from '../data/tournaments2025'
import { FiCalendar, FiClock, FiUsers, FiExternalLink, FiAward, FiArrowRight, FiCheck } from 'react-icons/fi'

const HomePage: React.FC = () => {
  const { t, language } = useI18n()

  const getPath = (path: string) => {
    return `/${language === 'cs' ? 'cs' : 'en'}${path}`
  }

  const months = ['duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad']
  const groupedByMonth = months.reduce((acc, month) => {
    acc[month] = tournaments2025.filter(t => t.month === month)
    return acc
  }, {} as Record<string, typeof tournaments2025>)

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'otevřený':
        return 'bg-primary-light text-white border-primary-light'
      case 'uzavřený':
        return 'bg-secondary text-white border-secondary'
      case 'klubový':
        return 'bg-primary-dark text-white border-primary-dark'
      default:
        return 'bg-neutral-light text-neutral-dark border-neutral-light'
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'otevřený':
        return <FiUsers className="w-4 h-4" />
      case 'uzavřený':
        return <FiAward className="w-4 h-4" />
      case 'klubový':
        return <FiAward className="w-4 h-4" />
      default:
        return <FiCalendar className="w-4 h-4" />
    }
  }

  const monthNames: Record<string, string> = {
    'duben': 'Duben',
    'květen': 'Květen',
    'červen': 'Červen',
    'červenec': 'Červenec',
    'srpen': 'Srpen',
    'září': 'Září',
    'říjen': 'Říjen',
    'listopad': 'Listopad',
  }

  return (
    <div>
      {/* Hero Section */}
      <div data-hero-section>
        <Hero
        title={t('home.hero.title')}
        subtitle={t('home.hero.subtitle')}
        cta1={{ text: t('home.hero.cta1'), link: getPath(language === 'cs' ? '/hriste' : '/courses') }}
        cta2={{ text: t('home.hero.cta2'), link: getPath(language === 'cs' ? '/cenik' : '/pricing') }}
        cta3={{ text: t('home.hero.cta3'), link: getPath(language === 'cs' ? '/kontakt' : '/contact') }}
        backgroundImage="/gkl fotografie doplneni/hriste z dronu1.jpeg"
        />
      </div>

      {/* Facilities Status Bar */}
      <FacilitiesStatusBar />

      {/* About Preview */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-in-left">
              <div className="flex items-center gap-2 sm:gap-3 mb-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary-dark">
                  {t('home.about.title')}
                </h2>
                <img 
                  src="/gkl-logo.png" 
                  alt="GKL Logo" 
                  className="h-6 sm:h-7 md:h-8 lg:h-10 w-auto object-contain"
                />
              </div>
              <div className="mb-6 flex justify-start"><FlowerDecoration size="sm" /></div>
              <p className="text-lg text-neutral-dark mb-6 leading-relaxed">
                {t('home.about.description')}
              </p>
              <Link to={getPath(language === 'cs' ? '/klub' : '/club')}>
                <Button variant="secondary" icon={<FiArrowRight />} iconPosition="right">
                  {t('home.about.more')}
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 animate-fade-in-right">
              <div className="relative rounded-xl overflow-hidden shadow-xl group">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src="/about-club.jpg" 
                    alt="Golfový klub Líšnice"
                    className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/20 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 border-2 border-secondary/30 rounded-xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Weather Widget */}
      <Section className="bg-neutral-cream/70 py-4 md:py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <WeatherWidget />
          </div>
        </div>
      </Section>

      {/* Divider */}
      <Divider variant="image" />

      {/* Aktuality */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-2">
                {t('home.news.title')}
              </h2>
              <div className="flex justify-center"><FlowerDecoration size="sm" /></div>
            </div>
            <Link to={getPath(language === 'cs' ? '/aktuality' : '/news')}>
              <Button variant="tertiary" icon={<FiArrowRight />} iconPosition="right">
                {t('home.news.viewAll')}
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {news.slice(0, 3).map((item, idx) => (
              <Card 
                key={item.id} 
                className="flex flex-col hover:shadow-lg transition-all duration-500 ease-out"
                animated
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-3">
                  {item.category && (
                    <span className="px-3 py-1 bg-primary-light text-white text-xs font-medium rounded-full">
                      {item.category}
                    </span>
                  )}
                  <span className="text-xs text-secondary font-medium flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" />
                    {item.date.toLocaleDateString(language === 'cs' ? 'cs-CZ' : 'en-US', { day: 'numeric', month: 'short' })}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-dark mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-neutral-dark mb-4 flex-grow leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                <Link to={getPath(`/aktuality/${item.id}`)}>
                  <Button variant="tertiary" size="sm" className="self-start" icon={<FiArrowRight />} iconPosition="right">
                    {t('home.news.readMore')}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Divider */}
      <Divider variant="image" flipped />

      {/* Tournaments Preview */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-3">
                Turnaje 2025
              </h2>
              <div className="mb-6 flex justify-center"><FlowerDecoration size="sm" /></div>
              <p className="text-neutral-dark text-sm md:text-base max-w-2xl mx-auto">
                Termínová listina pořádaných turnajů je průběžně aktualizována.
              </p>
            </div>

            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20 mb-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-heading font-semibold text-primary-dark mb-2 flex items-center gap-2">
                    <FiCalendar className="w-5 h-5 text-secondary" />
                    Přihlašování do turnajů
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <a 
                    href="https://www.cgf.cz/turnaje" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors duration-500 ease-out"
                  >
                    <span>www.cgf.cz/turnaje</span>
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Card>
            
            {/* Preview cards - first 3 months with tournaments */}
            <div className="space-y-6 mb-6">
              {Object.entries(groupedByMonth).filter(([_, tournaments]) => tournaments.length > 0).slice(0, 3).map(([month, tournaments], monthIdx) => (
                <div key={month} className="animate-fade-in-up" style={{ animationDelay: `${monthIdx * 150}ms` }}>
                  <div className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-heading font-semibold text-primary-dark mb-2 flex items-center gap-3">
                      <FlowerDecoration size="sm" className="mx-2" />
                      {monthNames[month]}
                      <span className="text-lg font-normal text-neutral-dark">({tournaments.length})</span>
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {tournaments.slice(0, 3).map((tournament, idx) => (
                      <Card 
                        key={idx} 
                        className="flex flex-col hover:shadow-xl transition-all duration-400 border-t-4 bg-white/80"
                        style={{ borderTopColor: tournament.type === 'otevřený' ? '#52B788' : tournament.type === 'uzavřený' ? '#D4AF37' : '#1B4332' }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <FiCalendar className="w-5 h-5 text-primary" />
                            <span className="text-sm font-medium text-neutral-dark">
                              {tournament.date}
                            </span>
                            <span className="text-xs text-neutral-dark/70 px-2 py-0.5 bg-neutral-light rounded">
                              {tournament.day}
                            </span>
                          </div>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getTypeColor(tournament.type)}`}>
                            {getTypeIcon(tournament.type)}
                            <span className="hidden sm:inline">{tournament.type}</span>
                            <span className="sm:hidden">{tournament.type.charAt(0).toUpperCase()}</span>
                          </span>
                        </div>
                        
                        <h4 className="text-lg font-heading font-semibold text-primary-dark mb-3 line-clamp-2">
                          {tournament.name}
                        </h4>
                        
                        {tournament.time && (
                          <div className="flex items-center gap-2 text-sm text-neutral-dark mt-auto pt-3 border-t border-neutral-light">
                            <FiClock className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span>{tournament.time}</span>
                          </div>
                        )}
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Link to={getPath(language === 'cs' ? '/souteze' : '/tournaments')}>
                <Button variant="secondary" size="lg" icon={<FiArrowRight />} iconPosition="right">
                  Zobrazit celou termínovou listinu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Divider - uzavírá sekci Turnaje */}
      <Divider variant="image" flipped />

      {/* Membership Preview */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-3">
              {t('home.membership.title')}
            </h2>
            <div className="flex justify-center"><FlowerDecoration size="sm" /></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {memberships.map((membership, idx) => (
              <Card 
                key={membership.id} 
                className="flex flex-col hover:shadow-xl transition-all duration-400 border-l-4 border-secondary"
                animated
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-xl font-heading font-semibold text-primary-dark mb-2">
                  {membership.name}
                </h3>
                {membership.description && (
                  <p className="text-sm text-neutral-dark mb-3 italic">
                    {membership.description}
                  </p>
                )}
                <div className="mb-4 space-y-2">
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-3 border border-primary/10">
                    <div className="text-xs text-neutral-dark mb-1">Vstupní poplatek včetně ročního poplatku</div>
                    <div className="text-2xl font-display font-bold text-secondary">
                      {membership.entryFee.toLocaleString('cs-CZ')} Kč
                    </div>
                  </div>
                  <div className="bg-neutral-light/30 rounded-lg p-2 border border-neutral-light">
                    <div className="text-xs text-neutral-dark mb-1">Roční poplatek (od 2. roku)</div>
                    <div className="text-lg font-display font-semibold text-primary">
                      {membership.annualFee.toLocaleString('cs-CZ')} Kč
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 mb-6 flex-grow">
                  {membership.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-neutral-dark">
                      <FiCheck className="w-4 h-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-xs">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link to={getPath(language === 'cs' ? '/cenik' : '/pricing')}>
                  <Button variant="primary" className="w-full" icon={<FiArrowRight />} iconPosition="right">
                    {t('membership.register')}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to={getPath(language === 'cs' ? '/cenik' : '/pricing')}>
              <Button variant="secondary" size="lg" icon={<FiArrowRight />} iconPosition="right">
                {t('home.membership.compare')}
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Divider - uzavírá sekci Členství */}
      <Divider variant="image" flipped />

    </div>
  )
}

export default HomePage
