import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Divider from '../components/ui/Divider'
import FlowerDecoration from '../components/ui/FlowerDecoration'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import { tournaments2025, regularEvents } from '../data/tournaments2025'
import { FiCalendar, FiClock, FiUsers, FiExternalLink, FiAward, FiArrowRight } from 'react-icons/fi'

const TournamentsPage: React.FC = () => {
  const { t, language } = useI18n()

  const getPath = (path: string) => {
    return `/${language === 'cs' ? 'cs' : 'en'}${path}`
  }

  // Funkce pro získání čísla měsíce z názvu měsíce
  const getMonthNumber = (monthName: string): number => {
    const monthMap: Record<string, number> = {
      'duben': 4, 'květen': 5, 'červen': 6, 'červenec': 7,
      'srpen': 8, 'září': 9, 'říjen': 10, 'listopad': 11
    }
    return monthMap[monthName] || 0
  }

  // Filtrovat turnaje - zobrazit pouze aktuální a budoucí měsíce v roce 2025
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth() + 1 // 1-12

  // Pokud jsme v roce 2025, filtrujeme podle měsíce. Pokud už je rok 2026+, nezobrazujeme nic
  const months = ['duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad']
  const filteredMonths = currentYear === 2025 
    ? months.filter(month => {
        const monthNumber = getMonthNumber(month)
        return monthNumber >= currentMonth
      })
    : currentYear > 2025 
    ? [] // Pokud je rok 2026 nebo později, nezobrazujeme žádné turnaje
    : months // Pokud je rok před 2025, zobrazujeme všechny

  const groupedByMonth = useMemo(() => {
    return filteredMonths.reduce((acc, month) => {
    acc[month] = tournaments2025.filter(t => t.month === month)
    return acc
  }, {} as Record<string, typeof tournaments2025>)
  }, [currentMonth, currentYear])

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
      {/* Hero Title */}
      <PageHero 
        title={t('tournaments.title')}
        backgroundImage="/gkl fotografie doplneni/hriste z dronu5.jpeg"
      />

      {/* Registration Info */}
      <Section className="bg-neutral-cream/70 pt-6 pb-4">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-heading font-semibold text-primary-dark mb-2 flex items-center gap-2">
                  <FiCalendar className="w-6 h-6 text-secondary" />
                  Přihlašování do turnajů
                </h2>
                <p className="text-neutral-dark text-sm md:text-base">
                  Termínová listina pořádaných turnajů je průběžně aktualizována.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a 
                  href="https://www.cgf.cz/turnaje" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors text-sm md:text-base"
                >
                  <span>www.cgf.cz/turnaje</span>
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Regular Events */}
      <Section className="bg-neutral-cream/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-3">
              Pravidelné akce
            </h2>
            <div className="flex justify-center mb-4">
              <FlowerDecoration size="sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {regularEvents.map((event, idx) => (
              <Card 
                key={idx} 
                className="hover:shadow-xl transition-all duration-400 border-l-4 border-secondary bg-white/80"
                animated
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                      <FiCalendar className="w-6 h-6 text-secondary" />
                    </div>
                  </div>
                  <div className="flex-grow min-w-0">
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-primary-dark mb-3">
                      {event.name}
                    </h3>
                    <div className="space-y-2">
                      {event.period && (
                        <div className="flex items-start gap-2">
                          <FiCalendar className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <p className="text-neutral-dark text-sm md:text-base">
                            <span className="font-medium text-primary-dark">Období:</span> {event.period}
                          </p>
                        </div>
                      )}
                      {event.time && (
                        <div className="flex items-start gap-2">
                          <FiClock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                          <p className="text-neutral-dark text-sm md:text-base">
                            <span className="font-medium text-primary-dark">Čas:</span> {event.time}
                          </p>
                        </div>
                      )}
                      {event.last && (
                        <div className="mt-3 pt-3 border-t border-neutral-light">
                          <p className="text-secondary font-semibold flex items-center gap-2 text-sm md:text-base">
                            <FiAward className="w-5 h-5" />
                            {event.last}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Tournaments 2025 */}
      <Section className="bg-neutral-cream/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-3">
              Turnaje 2025
            </h2>
          </div>
          
          {Object.keys(groupedByMonth).length === 0 ? (
            <Card className="text-center py-12">
              <p className="text-neutral-dark text-lg">
                V tuto chvíli nejsou naplánované žádné turnaje.
              </p>
            </Card>
          ) : (
          <div className="space-y-8 md:space-y-12">
            {Object.entries(groupedByMonth).map(([month, tournaments], monthIdx) => {
              if (tournaments.length === 0) return null
              
              return (
                <div key={month} className="animate-fade-in-up" style={{ animationDelay: `${monthIdx * 100}ms` }}>
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-heading font-semibold text-primary-dark mb-2 flex items-center gap-3">
                      <span className="w-12 h-0.5 bg-secondary/60"></span>
                      {monthNames[month]}
                      <span className="text-lg font-normal text-neutral-dark">({tournaments.length})</span>
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {tournaments.map((tournament, idx) => (
                      <Card 
                        key={tournament.id || idx} 
                        className="flex flex-col hover:shadow-xl transition-all duration-400 border-t-4 bg-white/80"
                        style={{ borderTopColor: tournament.type === 'otevřený' ? '#C4A882' : tournament.type === 'uzavřený' ? '#D4AF37' : '#8B7355' }}
                        animated
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
                          <div className="flex items-center gap-2 text-sm text-neutral-dark mb-3">
                            <FiClock className="w-4 h-4 text-secondary flex-shrink-0" />
                            <span>{tournament.time}</span>
                          </div>
                        )}

                        <div className="mt-auto flex flex-col gap-2">
                          <Link 
                            to={getPath(`/souteze/${tournament.id}`)}
                            className="w-full"
                          >
                            <Button 
                              variant="tertiary" 
                              size="sm" 
                              className="w-full" 
                              icon={<FiArrowRight />} 
                              iconPosition="right"
                            >
                              Detail turnaje
                            </Button>
                          </Link>
                          {tournament.images && tournament.images.length > 0 && (
                            <Link 
                              to={getPath(`/souteze/${tournament.id}#gallery`)}
                              className="w-full"
                            >
                              <Button 
                                variant="secondary" 
                                size="sm" 
                                className="w-full" 
                              >
                                Fotogalerie
                              </Button>
                            </Link>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
          )}
        </div>
      </Section>
    </div>
  )
}

export default TournamentsPage
