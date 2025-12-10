import React, { useState } from 'react'
import { useI18n } from '../i18n/i18n'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Divider from '../components/ui/Divider'
import PageHero from '../components/ui/PageHero'
import FilterButtons from '../components/ui/FilterButtons'
import { clubHistory } from '../data/clubHistory'
import { leaders } from '../data/leaders'
import { memberships } from '../data/memberships'
import { FiX, FiChevronLeft, FiChevronRight, FiAward } from 'react-icons/fi'

const AboutPage: React.FC = () => {
  const { t } = useI18n()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  const openLightbox = (image: string) => {
    setSelectedImage(image)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  // Získat všechny fotky z událostí pro lightbox navigaci
  const allHistoryImages = clubHistory
    .filter(event => event.image)
    .map(event => event.image!)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100 // Offset pro header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter)
    if (filter === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      scrollToSection(filter)
    }
  }

  return (
    <div>
      {/* Hero Title */}
      <PageHero 
        title={t('about.hero.title')}
        backgroundImage="/gkl fotografie doplneni/hriste z dronu1.jpeg"
      />

      {/* Filtry */}
      <FilterButtons
        filters={[
          { id: 'all', label: 'Vše' },
          { id: 'clenstvi', label: 'Členství' },
          { id: 'poplatky', label: 'Poplatky' },
          { id: 'historie', label: 'Historie' },
          { id: 'vedeni', label: 'Vedení' },
        ]}
        selectedFilter={selectedFilter}
        onFilterClick={handleFilterClick}
      />

      {/* Úvod o klubu a členství - první sekce */}
      <Section id="clenstvi" className="bg-neutral-cream/70 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-4 text-center">
            O členství
          </h2>
          <Card>
            <div className="prose prose-sm max-w-none">
              <p className="text-neutral-dark mb-4 leading-relaxed">
                Golfový klub Líšnice je jedním z nejstarších a nejprestižnějších golfových klubů v České republice. 
                Založený v roce 1928, náš klub má bohatou historii sahající téměř 100 let zpět.
              </p>
              <p className="text-neutral-dark mb-4 leading-relaxed">
                Členství v Golfovém klubu Líšnice přináší řadu výhod a privilegií. Jako člen máte přístup k našemu 
                18jamkovému šampionátnímu hřišti po celý rok, včetně zimních měsíců. Členství zahrnuje také registraci 
                v České golfové federaci (ČGF), která je povinná pro všechny aktivní hráče.
              </p>
              <h3 className="text-lg font-heading font-semibold text-primary-dark mb-3 mt-6">
                Povinnosti členů
              </h3>
              <ul className="list-disc list-inside text-neutral-dark space-y-2 mb-4">
                <li>Pravidelná úhrada ročního členského poplatku</li>
                <li>Dodržování pravidel golfu a etikety na hřišti</li>
                <li>Respektování řádů a nařízení klubu</li>
                <li>Účast na valných hromadách (podle stanov klubu)</li>
                <li>Zachování dobrého jména klubu</li>
              </ul>
              <h3 className="text-lg font-heading font-semibold text-primary-dark mb-3 mt-6">
                Výhody členství
              </h3>
              <ul className="list-disc list-inside text-neutral-dark space-y-2">
                <li>Neomezená hra na hřišti po celý rok</li>
                <li>Zvýhodněné ceny míčů na driving range</li>
                <li>Možnost hrát s hosty za zvýhodněné ceny</li>
                <li>Slevy na partnerských hřištích (reciprocity)</li>
                <li>Účast na klubových turnajích a akcích</li>
                <li>Přístup do klubových zařízení a služeb</li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Vstupní poplatky */}
      <Section id="poplatky" className="bg-neutral-cream/70 py-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-2 text-center">
            Vstupní poplatky
          </h2>
          <p className="text-center text-sm text-neutral-dark mb-6">
            Včetně ročního členského poplatku na rok 2025
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {memberships.map((membership) => (
              <Card key={membership.id} className="border-l-4 border-secondary">
                <h3 className="text-lg font-heading font-semibold text-primary-dark mb-1">
                  {membership.name}
                </h3>
                {membership.description && (
                  <p className="text-xs text-neutral-dark mb-3 italic">{membership.description}</p>
                )}
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-3 mb-2">
                  <div className="text-xs text-neutral-dark mb-1">Vstupní poplatek</div>
                  <div className="text-xl font-display font-bold text-secondary">
                    {membership.entryFee.toLocaleString('cs-CZ')} Kč
                  </div>
                </div>
                <div className="text-xs text-neutral-dark">
                  Roční poplatek: <span className="font-semibold text-primary">{membership.annualFee.toLocaleString('cs-CZ')} Kč</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Roční členské poplatky - třetí sekce */}
      <Section className="bg-neutral-cream/70 py-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-2 text-center">
            Roční členské poplatky
          </h2>
          <p className="text-center text-sm text-neutral-dark mb-6">
            Roční poplatky pro stávající členy (od 2. roku členství)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {memberships.map((membership) => (
              <Card key={membership.id} className="border-l-4 border-secondary">
                <h3 className="text-lg font-heading font-semibold text-primary-dark mb-1">
                  {membership.name}
                </h3>
                {membership.description && (
                  <p className="text-xs text-neutral-dark mb-3 italic">{membership.description}</p>
                )}
                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-3 mb-2">
                  <div className="text-xs text-neutral-dark mb-1">Roční členský poplatek</div>
                  <div className="text-xl font-display font-bold text-secondary">
                    {membership.annualFee.toLocaleString('cs-CZ')} Kč
                  </div>
                </div>
                <div className="text-xs text-neutral-dark">
                  Vstupní poplatek: <span className="font-semibold text-primary">{membership.entryFee.toLocaleString('cs-CZ')} Kč</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Sportovní činnost */}
      <div className="bg-neutral-cream/70 pt-4 pb-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-6 text-center">
              Sportovní činnost
            </h2>
            <Card className="mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiAward className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-primary-dark mb-1">
                      Muži
                    </h3>
                    <p className="text-neutral-dark">1. liga</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiAward className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-primary-dark mb-1">
                      Ženy
                    </h3>
                    <p className="text-neutral-dark">1. liga</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-neutral-light">
                <p className="text-sm text-neutral-dark text-center italic">
                  Více informací o sportovní činnosti naleznete v sekci Aktuality.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <Divider variant="image" />

      {/* Timeline */}
      <div id="historie" className="bg-neutral-cream/70 pt-4 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-8 text-center">
            {t('about.timeline.title')}
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-light transform md:-translate-x-1/2"></div>
              
              {clubHistory.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:pl-0 md:text-right' : 'md:pl-1/2 md:pr-0 md:ml-auto'}`}
                >
                  <div className="flex items-start md:items-center">
                    {index % 2 === 0 && (
                      <div className="hidden md:block flex-1 pr-8">
                        <Card className="max-w-md ml-auto">
                          <div className="text-2xl font-display font-bold text-secondary mb-2">
                            {event.year}
                          </div>
                          <h3 className="text-xl font-heading font-semibold text-primary-dark mb-2">
                            {event.event}
                          </h3>
                          {event.image && (
                            <div 
                              onClick={() => openLightbox(event.image!)}
                              className="mb-3 rounded-lg overflow-hidden border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group bg-neutral-light/30"
                            >
                              <img 
                                src={event.image} 
                                alt={`${event.event} - ${event.year}`}
                                className="w-full max-h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <p className="text-neutral-dark">{event.description}</p>
                        </Card>
                      </div>
                    )}
                    
                    {/* Timeline dot */}
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-secondary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{event.year}</span>
                    </div>
                    
                    {index % 2 === 1 && (
                      <div className="hidden md:block flex-1 pl-8">
                        <Card className="max-w-md">
                          <div className="text-2xl font-display font-bold text-secondary mb-2">
                            {event.year}
                          </div>
                          <h3 className="text-xl font-heading font-semibold text-primary-dark mb-2">
                            {event.event}
                          </h3>
                          {event.image && (
                            <div 
                              onClick={() => openLightbox(event.image!)}
                              className="mb-3 rounded-lg overflow-hidden border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group bg-neutral-light/30"
                            >
                              <img 
                                src={event.image} 
                                alt={`${event.event} - ${event.year}`}
                                className="w-full max-h-64 object-contain group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                          )}
                          <p className="text-neutral-dark">{event.description}</p>
                        </Card>
                      </div>
                    )}
                    
                    {/* Mobile content */}
                    <div className="md:hidden ml-4 flex-1">
                      <Card>
                        <div className="text-2xl font-display font-bold text-secondary mb-2">
                          {event.year}
                        </div>
                        <h3 className="text-xl font-heading font-semibold text-primary-dark mb-2">
                          {event.event}
                        </h3>
                        {event.image && (
                          <div 
                            onClick={() => openLightbox(event.image!)}
                            className="mb-3 rounded-lg overflow-hidden border border-primary/10 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group"
                          >
                            <img 
                              src={event.image} 
                              alt={`${event.event} - ${event.year}`}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        )}
                        <p className="text-neutral-dark">{event.description}</p>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Divider variant="image" />

      {/* Zajímavosti - šestá sekce */}
      <Section className="bg-neutral-cream/70 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-4 text-center">
            Zajímavosti
          </h2>
          <Card>
            <div className="prose prose-sm max-w-none">
              <p className="text-neutral-dark mb-4 leading-relaxed text-center italic">
                Tato sekce bude brzy doplněna zajímavými informacemi o klubu, jeho historii a aktivitách.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Leadership - sedmá sekce */}
      <div id="vedeni" className="bg-neutral-cream/70 pt-4 pb-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-2">
                {t('about.leadership.title')}
              </h2>
              <p className="text-sm text-neutral-dark italic mb-4">
                Vedení se volí každé 4 roky
              </p>
              <div className="flex justify-center mb-6">
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {leaders.map((leader, idx) => (
                <Card 
                  key={leader.id} 
                  className="text-center hover:shadow-lg transition-all duration-400"
                  animated
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {leader.image ? (
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-secondary/20 shadow-md">
                      <img 
                        src={leader.image} 
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-20 h-20 mx-auto mb-3 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white text-lg font-bold">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  <h3 className="text-base font-heading font-semibold text-primary-dark mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-sm text-secondary font-medium">{leader.position}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (() => {
        const currentIndex = allHistoryImages.indexOf(selectedImage)
        const nextImage = currentIndex < allHistoryImages.length - 1 ? allHistoryImages[currentIndex + 1] : allHistoryImages[0]
        const prevImage = currentIndex > 0 ? allHistoryImages[currentIndex - 1] : allHistoryImages[allHistoryImages.length - 1]
        
        return (
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
            
            {allHistoryImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(prevImage)
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary transition-colors z-10 p-3 bg-black/50 rounded-full backdrop-blur-sm"
                  aria-label="Předchozí"
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(nextImage)
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
                src={selectedImage} 
                alt="Historie klubu"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              {allHistoryImages.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                  {currentIndex + 1} / {allHistoryImages.length}
                </div>
              )}
            </div>
          </div>
        )
      })()}
    </div>
  )
}

export default AboutPage

