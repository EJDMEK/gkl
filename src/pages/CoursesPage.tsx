import React, { useState } from 'react'
import { useI18n } from '../i18n/i18n'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Divider from '../components/ui/Divider'
import PageHero from '../components/ui/PageHero'
import FilterButtons from '../components/ui/FilterButtons'
import { courses } from '../data/courses'
import { courseInfo } from '../data/courseInfo'
import { FiInfo, FiFlag, FiTarget, FiFileText, FiBook, FiShield } from 'react-icons/fi'

const CoursesPage: React.FC = () => {
  const { language } = useI18n()
  const selectedCourse = courses[0] // Championship hřiště
  const [selectedHole, setSelectedHole] = useState<number>(1) // Aktuálně zobrazená jamka (1-9)
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

  const getPath = (path: string) => {
    return `/${language === 'cs' ? 'cs' : 'en'}${path}`
  }

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
        title={selectedCourse.name}
        subtitle={selectedCourse.description}
        backgroundImage="/gkl fotografie doplneni/hriste z dronu2.jpeg"
      />

      {/* Filtry */}
      <FilterButtons
        filters={[
          { id: 'all', label: 'Vše' },
          { id: 'technicke-parametry', label: 'Technické parametry' },
          { id: 'jamky', label: 'Jamky' },
          { id: 'score-card', label: 'Score card' },
          { id: 'mistni-pravidla', label: 'Místní pravidla' },
          { id: 'provozni-rad', label: 'Provozní řád' },
          { id: 'zajimavosti', label: 'Zajímavosti' },
        ]}
        selectedFilter={selectedFilter}
        onFilterClick={handleFilterClick}
      />

      {/* Technical Parameters */}
      <Section id="technicke-parametry" className="bg-neutral-cream/70 py-4 md:py-6">
        <div className="max-w-6xl mx-auto">
          <Card className="mb-4">
            <div className="flex items-center gap-3 mb-4">
              <FiInfo className="w-5 h-5 text-primary" />
              <h2 className="text-xl md:text-2xl font-display font-bold text-primary-dark">
                Technické parametry
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="text-center p-3 sm:p-4 bg-neutral-cream/70 rounded-lg">
                <div className="text-xs sm:text-sm text-neutral-dark mb-1 sm:mb-2">Par</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary">{selectedCourse.par}</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-neutral-cream/70 rounded-lg">
                <div className="text-xs sm:text-sm text-neutral-dark mb-1 sm:mb-2">Délka</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary">{selectedCourse.length}m</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-neutral-cream/70 rounded-lg">
                <div className="text-xs sm:text-sm text-neutral-dark mb-1 sm:mb-2">Rating</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary">{selectedCourse.rating}</div>
              </div>
              <div className="text-center p-3 sm:p-4 bg-neutral-cream/70 rounded-lg">
                <div className="text-xs sm:text-sm text-neutral-dark mb-1 sm:mb-2">Slope</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-primary">{selectedCourse.slope}</div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Hole by Hole */}
      <Section id="jamky" className="bg-neutral-cream/70 py-4 md:py-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-2">
              Naše jamky mají jména
            </h2>
          </div>

          {/* Filtrování podle čísel jamek - nahoře */}
          <div className="mb-6 sm:mb-8">
            <div className="text-center mb-3 sm:mb-4">
              <p className="text-sm sm:text-base md:text-lg text-neutral-dark mb-3 font-medium">
                Vyberte jamku:
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3">
              {Array.from({ length: 9 }, (_, i) => i + 1).map((holeNum) => {
                const hole = selectedCourse.holesDetail.find(h => 
                  h.holeNumber9 === holeNum
                ) || selectedCourse.holesDetail.find(h => 
                  h.number === holeNum && !h.holeNumber9
                )
                const hasHole = !!hole
                return (
                  <button
                    key={holeNum}
                    onClick={() => {
                      setSelectedHole(holeNum)
                    }}
                    disabled={!hasHole}
                    className={`
                      px-4 sm:px-5 py-2.5 sm:py-3 
                      rounded-lg 
                      font-bold 
                      text-base sm:text-lg 
                      transition-all 
                      duration-300 
                      ease-out
                      min-h-[48px] 
                      min-w-[48px]
                      touch-manipulation
                      ${
                        !hasHole
                          ? 'opacity-40 cursor-not-allowed bg-neutral-light text-neutral-dark'
                          : selectedHole === holeNum
                          ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg scale-[1.05] ring-2 ring-primary/30'
                          : 'bg-white/90 text-primary-dark border-2 border-primary/30 hover:border-primary hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98] shadow-sm'
                      }
                    `}
                  >
                    {holeNum}
                  </button>
                )
              })}
            </div>
          </div>


          {/* Zobrazení aktuální jamky */}
          {(() => {
            // Najít jamku podle holeNumber9 nebo podle number (pokud není holeNumber9)
            const currentHole = selectedCourse.holesDetail.find(h => 
              h.holeNumber9 === selectedHole
            ) || selectedCourse.holesDetail.find(h => 
              h.number === selectedHole && !h.holeNumber9
            )

            if (!currentHole) return null

            return (
              <Card id="hole-detail" className="p-6 md:p-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                      <FiFlag className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-1">
                        Jamka {currentHole.holeNumber9 || currentHole.number}
                        {currentHole.holeNumber9 && currentHole.holeNumber18 && (
                          <span className="text-lg md:text-xl text-neutral-dark font-normal ml-2">
                            (devítka {currentHole.holeNumber9} / osmnáctka {currentHole.holeNumber18})
                          </span>
                        )}
                      </h3>
                      {currentHole.name && (
                        <p className="text-lg md:text-xl text-secondary font-semibold">{currentHole.name}</p>
                      )}
                    </div>
                  </div>
                  {/* Params */}
                  <div className="flex items-center gap-4 text-sm md:text-base flex-wrap">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/5 rounded-lg">
                      <FiTarget className="w-4 h-4 text-secondary" />
                      <span className="font-semibold text-primary">Par {currentHole.par}</span>
                    </div>
                    <div className="px-3 py-1.5 bg-primary/5 rounded-lg">
                      <span className="font-semibold text-primary">{currentHole.length}m</span>
                    </div>
                    <div className="px-3 py-1.5 bg-primary/5 rounded-lg">
                      <span className="text-neutral-dark">HCP:</span>
                      <span className="font-semibold text-primary ml-1">{currentHole.handicap}</span>
                    </div>
                  </div>
                </div>

                {/* Nákres jamky - nejdůležitější, velký a viditelný */}
                {currentHole.planImage && (
                  <div className="mb-6 sm:mb-8 rounded-xl overflow-hidden shadow-2xl border-2 sm:border-4 border-primary/40 bg-gradient-to-br from-white to-neutral-cream/30 p-4 sm:p-6 md:p-8">
                    <div className="text-center mb-4 sm:mb-6">
                      <h4 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-primary-dark mb-2">
                        Nákres jamky
                      </h4>
                      <div className="flex justify-center">
                      </div>
                    </div>
                    <div className="w-full flex justify-center items-center bg-white rounded-xl p-3 sm:p-4 md:p-6 lg:p-8 shadow-inner">
                      <img 
                        src={currentHole.planImage} 
                        alt={`Nákres jamky ${currentHole.holeNumber9 || currentHole.number} - ${currentHole.name || ''}`}
                        className="w-full max-w-5xl h-auto object-contain drop-shadow-lg"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}

                {/* Video s průletem z dronu */}
                {currentHole.video && (
                  <div className="mb-6 rounded-xl overflow-hidden shadow-xl border-2 border-primary/20">
                    <div className="relative aspect-video bg-black">
                      <iframe
                        src={currentHole.video}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}

                {/* Description a současné fotky - vždy viditelné současně */}
                {(currentHole.description || (currentHole.images && currentHole.images.length > 0)) && (
                  <div className="mb-4 sm:mb-6">
                    <div className={`grid ${currentHole.description && currentHole.images && currentHole.images.length > 0 ? 'md:grid-cols-2' : 'grid-cols-1'} gap-4 sm:gap-6`}>
                      {/* Description */}
                      {currentHole.description && (
                        <div className="text-neutral-dark leading-relaxed text-sm sm:text-base md:text-lg space-y-2 sm:space-y-3">
                          {currentHole.description.split('. ').filter(s => s.trim()).map((sentence, idx, arr) => (
                            <p key={idx} className={idx === 0 ? 'font-medium text-primary-dark text-base sm:text-lg md:text-xl' : ''}>
                              {sentence}{idx < arr.length - 1 ? '.' : ''}
                            </p>
                          ))}
                        </div>
                      )}
                      
                      {/* Současné fotky - větší, všechny, vždy viditelné */}
                      {currentHole.images && currentHole.images.length > 0 && (
                        <div>
                          <h4 className="text-base sm:text-lg font-heading font-semibold text-primary-dark mb-3">
                            Současné fotky
                          </h4>
                          <div className={`grid ${currentHole.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'} gap-3 sm:gap-4`}>
                            {currentHole.images.map((image, imgIdx) => (
                              <div
                                key={imgIdx}
                                className="rounded-lg overflow-hidden border-2 border-primary/20 shadow-md"
                              >
                                <img 
                                  src={image} 
                                  alt={`${currentHole.name || `Jamka ${currentHole.number}`} - foto ${imgIdx + 1}`}
                                  className="w-full h-auto object-contain"
                                  loading="lazy"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Historické fotky */}
                {currentHole.historicalImages && currentHole.historicalImages.length > 0 && (
                  <div className="mb-4 sm:mb-6">
                    <h4 className="text-base sm:text-lg font-heading font-semibold text-primary-dark mb-3">
                      Historické fotky
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
                      {currentHole.historicalImages.map((image, imgIdx) => (
                        <div
                          key={imgIdx}
                          className="aspect-video rounded-lg overflow-hidden border border-primary/10 shadow-sm hover:shadow-lg transition-all duration-300 group"
                        >
                          <img 
                            src={image} 
                            alt={`${currentHole.name || `Jamka ${currentHole.number}`} - historická fotka ${imgIdx + 1}`}
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            )
          })()}

          {/* Ostatní jamky bez detailů */}
          {selectedCourse.holesDetail.filter(h => !h.images && !h.description).length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {selectedCourse.holesDetail.filter(h => !h.images && !h.description).map((hole, idx) => (
                <Card 
                  key={hole.number}
                  className="hover:shadow-xl transition-all duration-400"
                  animated
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <FiFlag className="w-5 h-5 text-secondary" />
                        <div className="text-2xl font-display font-bold text-primary">
                          Jamka {hole.number}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 justify-end mb-1">
                        <FiTarget className="w-4 h-4 text-primary" />
                        <div className="text-lg font-semibold text-secondary">Par {hole.par}</div>
                      </div>
                      <div className="text-sm text-neutral-dark">{hole.length}m</div>
                      <div className="text-xs text-neutral-dark mt-1">HCP: {hole.handicap}</div>
                    </div>
                  </div>
                  
                  <div className="aspect-video bg-gradient-to-br from-primary-light/20 to-primary/20 rounded-lg border-2 border-dashed border-primary/20 flex items-center justify-center">
                    <FiFlag className="w-12 h-12 text-primary/30" />
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </Section>

      <Divider />

      {/* Score Card a hrací HCP */}
      {courseInfo.scoreCard && (
        <Section id="score-card" className="bg-neutral-cream/70 py-4 md:py-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-2">
                {courseInfo.scoreCard.title}
              </h2>
            </div>
            <Card className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <FiFileText className="w-5 h-5 text-primary" />
                <h3 className="text-xl md:text-2xl font-display font-bold text-primary-dark">
                  Score card
                </h3>
              </div>
              {courseInfo.scoreCard.description && (
                <p className="text-neutral-dark mb-4 text-base md:text-lg">
                  {courseInfo.scoreCard.description}
                </p>
              )}
              {courseInfo.scoreCard.pdfUrl && (
                <div className="mb-6">
                  <a
                    href={courseInfo.scoreCard.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
                  >
                    Stáhnout score card (PDF)
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              )}
              {courseInfo.scoreCard.imageUrl && (
                <div className="mb-6 rounded-xl overflow-hidden shadow-xl border-2 border-primary/20">
                  <img
                    src={courseInfo.scoreCard.imageUrl}
                    alt="Score card"
                    className="w-full h-auto object-contain bg-neutral-cream/70"
                  />
                </div>
              )}
              {courseInfo.scoreCard.playingHandicap && (
                <div className="mt-6 pt-6 border-t border-primary/10">
                  <div className="flex items-center gap-3 mb-3">
                    <FiTarget className="w-5 h-5 text-secondary" />
                    <h4 className="text-lg md:text-xl font-heading font-semibold text-primary-dark">
                      {courseInfo.scoreCard.playingHandicap.title}
                    </h4>
                  </div>
                  <p className="text-neutral-dark text-base md:text-lg">
                    {courseInfo.scoreCard.playingHandicap.description}
                  </p>
                </div>
              )}
            </Card>
          </div>
        </Section>
      )}

      <Divider variant="image" />

      {/* Místní pravidla */}
      {courseInfo.localRules && (
        <Section id="mistni-pravidla" className="bg-neutral-cream/70 py-4 md:py-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-2">
                {courseInfo.localRules.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {courseInfo.localRules.rules.map((rule, idx) => (
                <Card key={idx} className="p-5 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <FiBook className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-primary-dark">
                      {rule.title}
                    </h3>
                  </div>
                  <p className="text-neutral-dark text-base leading-relaxed">
                    {rule.content}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      )}

      <Divider variant="image" />

      {/* Provozní řád */}
      {courseInfo.operatingRules && (
        <Section id="provozni-rad" className="bg-neutral-cream/70 py-4 md:py-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-2">
                {courseInfo.operatingRules.title}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {courseInfo.operatingRules.rules.map((rule, idx) => (
                <Card key={idx} className="p-5 md:p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <FiShield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <h3 className="text-lg md:text-xl font-heading font-semibold text-primary-dark">
                      {rule.title}
                    </h3>
                  </div>
                  <p className="text-neutral-dark text-base leading-relaxed">
                    {rule.content}
                  </p>
                </Card>
              ))}
            </div>
            {courseInfo.operatingRules.pdfUrl && (
              <Card className="p-5 md:p-6 bg-primary/5">
                <div className="text-center">
                  <a
                    href={courseInfo.operatingRules.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors text-base md:text-lg"
                  >
                    Stáhnout provozní řád (PDF)
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </Card>
            )}
          </div>
        </Section>
      )}

      <Divider variant="image" />

      {/* Zajímavosti */}
      {courseInfo.interestingFacts && (
        <Section id="zajimavosti" className="bg-neutral-cream/70 py-4 md:py-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-2">
                {courseInfo.interestingFacts.title}
              </h2>
            </div>
            {courseInfo.interestingFacts.description && (
              <Card className="p-5 md:p-6 mb-6">
                <p className="text-neutral-dark text-base md:text-lg text-center leading-relaxed">
                  {courseInfo.interestingFacts.description}
                </p>
              </Card>
            )}
            {courseInfo.interestingFacts.images && courseInfo.interestingFacts.images.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {courseInfo.interestingFacts.images.map((image, imgIdx) => (
                  <Card
                    key={imgIdx}
                    className="p-0 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={image}
                        alt={`Vývoj hřiště - foto ${imgIdx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </Section>
      )}

      <Divider />

      {/* CTA */}
      <Section className="bg-neutral-cream/70 py-4 md:py-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-display font-bold text-primary-dark mb-3">
            Chcete si zahrát?
          </h2>
          <p className="text-base md:text-lg text-neutral-dark mb-4">
            Rezervujte si tee time ještě dnes
          </p>
          <a href={getPath('/tee-times')}>
            <Button variant="primary" size="lg">Rezervovat tee time</Button>
          </a>
        </div>
      </Section>
    </div>
  )
}

export default CoursesPage
