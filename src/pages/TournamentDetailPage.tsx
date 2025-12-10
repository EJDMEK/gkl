import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import { tournaments2025 } from '../data/tournaments2025'
import { FiCalendar, FiClock, FiUsers, FiAward, FiX, FiChevronLeft, FiChevronRight, FiExternalLink } from 'react-icons/fi'

const TournamentDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { language } = useI18n()
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const tournament = tournaments2025.find(t => t.id === id)

  if (!tournament) {
    return (
      <div>
        <Section className="bg-neutral-cream/70 pt-32 pb-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-display font-bold text-primary-dark mb-4">
              Turnaj nenalezen
            </h1>
            <Link to={language === 'cs' ? '/cs/souteze' : '/en/tournaments'}>
              <Button variant="primary">Zpět na soutěže</Button>
            </Link>
          </div>
        </Section>
      </div>
    )
  }

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

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImageIndex(null)
  }

  const nextImage = () => {
    if (tournament.images && selectedImageIndex !== null) {
      const nextIndex = (selectedImageIndex + 1) % tournament.images.length
      setSelectedImageIndex(nextIndex)
    }
  }

  const prevImage = () => {
    if (tournament.images && selectedImageIndex !== null) {
      const prevIndex = selectedImageIndex === 0 ? tournament.images.length - 1 : selectedImageIndex - 1
      setSelectedImageIndex(prevIndex)
    }
  }

  return (
    <div>
      {/* Hero Title */}
      <PageHero 
        title={tournament.name}
        subtitle={tournament.description}
        backgroundImage="/gkl fotografie doplneni/hriste z dronu5.jpeg"
      />
      <Section className="bg-neutral-cream/70">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to={language === 'cs' ? '/cs/souteze' : '/en/tournaments'}>
              <Button variant="tertiary" size="sm" className="mb-6">
                ← Zpět na soutěže
              </Button>
            </Link>
          </div>

          <Card className="mb-6">
            {/* Header Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-neutral-light">
              <span className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1 ${getTypeColor(tournament.type)}`}>
                {getTypeIcon(tournament.type)}
                {tournament.type}
              </span>
              <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                <FiCalendar className="w-4 h-4" />
                {tournament.date} ({tournament.day})
              </div>
              {tournament.time && (
                <div className="flex items-center gap-2 text-sm text-neutral-dark">
                  <FiClock className="w-4 h-4 text-secondary" />
                  {tournament.time}
                </div>
              )}
              {tournament.format && (
                <div className="text-sm text-neutral-dark">
                  Formát: <span className="font-semibold text-primary">{tournament.format}</span>
                </div>
              )}
            </div>

            {/* Description */}
            {tournament.description && (
              <div className="mb-6">
                <h2 className="text-xl font-heading font-semibold text-primary-dark mb-3">
                  O turnaji
                </h2>
                <p className="text-neutral-dark leading-relaxed">
                  {tournament.description}
                </p>
              </div>
            )}

            {/* Entry Fee */}
            {tournament.entryFee && (
              <div className="mb-6 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                <div className="text-sm text-neutral-dark mb-1">Startovné</div>
                <div className="text-2xl font-display font-bold text-secondary">
                  {tournament.entryFee.toLocaleString('cs-CZ')} Kč
                </div>
              </div>
            )}

            {/* Registration Link */}
            {tournament.registrationLink && (
              <div className="mb-6">
                <a 
                  href={tournament.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
                >
                  <span>Přihlásit se na turnaj</span>
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}

            {/* Default Registration Link */}
            {!tournament.registrationLink && (
              <div className="mb-6">
                <a 
                  href="https://www.cgf.cz/turnaje"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
                >
                  <span>Přihlásit se na turnaj (www.cgf.cz/turnaje)</span>
                  <FiExternalLink className="w-4 h-4" />
                </a>
              </div>
            )}
          </Card>

          {/* Gallery */}
          {tournament.images && tournament.images.length > 0 && (
            <Card className="mb-6">
              <h2 className="text-xl font-heading font-semibold text-primary-dark mb-4">
                Galerie
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {tournament.images.map((image, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(idx)}
                    className="aspect-video rounded-lg overflow-hidden border border-primary/10 shadow-sm hover:shadow-lg transition-all duration-500 ease-out cursor-pointer group"
                  >
                    <img 
                      src={image} 
                      alt={`${tournament.name} - foto ${idx + 1}`}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Results */}
          {tournament.results && (
            <Card>
              <h2 className="text-xl font-heading font-semibold text-primary-dark mb-4">
                Výsledky
              </h2>
              {tournament.results.winners && tournament.results.winners.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-heading font-semibold text-primary-dark mb-3">
                    Vítězové
                  </h3>
                  <div className="space-y-3">
                    {tournament.results.winners.map((winner, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                        <div>
                          <div className="font-semibold text-primary-dark">{winner.name}</div>
                          {winner.category && (
                            <div className="text-sm text-neutral-dark">{winner.category}</div>
                          )}
                        </div>
                        <div className="text-lg font-bold text-secondary">{winner.score}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {tournament.results.fullResults && (
                <div className="mt-4">
                  <a 
                    href={tournament.results.fullResults}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
                  >
                    <span>Kompletní výsledky</span>
                    <FiExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
            </Card>
          )}
        </div>
      </Section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && tournament.images && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-secondary transition-colors z-10 p-2"
            aria-label="Zavřít"
          >
            <FiX className="w-6 h-6" />
          </button>
          
          {tournament.images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors duration-500 ease-out z-10 p-3 bg-black/50 rounded-full backdrop-blur-sm"
                aria-label="Předchozí"
              >
                <FiChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors z-10 p-3 bg-black/50 rounded-full backdrop-blur-sm"
                aria-label="Další"
              >
                <FiChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
          
          <div 
            className="relative max-w-7xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={tournament.images[selectedImageIndex]} 
              alt={`${tournament.name} - foto ${selectedImageIndex + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            {tournament.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                {selectedImageIndex + 1} / {tournament.images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default TournamentDetailPage

