import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Divider from '../components/ui/Divider'
import PageHero from '../components/ui/PageHero'
import FilterButtons from '../components/ui/FilterButtons'
import { memberships } from '../data/memberships'
import { FiExternalLink } from 'react-icons/fi'

const PricingPage: React.FC = () => {
  useI18n()
  const [selectedFilter, setSelectedFilter] = useState<string>('all')

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
        title="Ceník"
        backgroundImage="/gkl fotografie doplneni/hriste z dronu4.jpeg"
      />

      {/* Filtry */}
      <FilterButtons
        filters={[
          { id: 'all', label: 'Vše' },
          { id: 'green-fee', label: 'Green Fee' },
          { id: 'vstupni-poplatky', label: 'Vstupní poplatky' },
          { id: 'rocni-karty', label: 'Roční karty' },
          { id: 'registrace', label: 'Registrace' },
          { id: 'sluzby', label: 'Služby' },
        ]}
        selectedFilter={selectedFilter}
        onFilterClick={handleFilterClick}
      />

      {/* Green Fee - první sekce */}
      <Section id="green-fee" className="bg-neutral-cream/70 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-4 text-center">
            Green Fee
          </h2>

          {/* Akční ceny - kompaktní tabulka */}
          <Card className="mb-6">
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-base sm:text-lg">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-base sm:text-lg">Kategorie</th>
                    <th className="text-right py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-base sm:text-lg">9 jamek</th>
                    <th className="text-right py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-base sm:text-lg">18 jamek</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Standard</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-bold text-secondary text-xl sm:text-2xl">540 Kč</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-bold text-secondary text-xl sm:text-2xl">870 Kč</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Senior 65+</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">430 Kč</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">690 Kč</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Mládež</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">320 Kč</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">540 Kč</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral-dark mt-4 text-center italic">
              Pondělí - neděle, svátky. Ceník platí do odvolání.
            </p>
          </Card>

          {/* Smluvní kluby - kompaktní */}
          <Card>
            <h3 className="text-lg font-heading font-semibold text-primary-dark mb-4 text-center">
              Smluvní kluby
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <div className="text-xs sm:text-sm font-semibold text-primary-dark mb-1.5 sm:mb-2">9 jamek - 50% sleva</div>
                <div className="text-xs sm:text-sm text-neutral-dark">Standard: 270 Kč | Mládež: 160 Kč</div>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold text-primary-dark mb-1.5 sm:mb-2">9 jamek - 20% sleva</div>
                <div className="text-xs sm:text-sm text-neutral-dark">Standard: 430 Kč | Mládež: 250 Kč</div>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold text-primary-dark mb-1.5 sm:mb-2">18 jamek - 50% sleva</div>
                <div className="text-xs sm:text-sm text-neutral-dark">Standard: 435 Kč | Mládež: 270 Kč</div>
              </div>
              <div>
                <div className="text-xs sm:text-sm font-semibold text-primary-dark mb-1.5 sm:mb-2">18 jamek - 20% sleva</div>
                <div className="text-xs sm:text-sm text-neutral-dark">Standard: 690 Kč | Mládež: 430 Kč</div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Driving Range - druhá sekce */}
      <Section className="bg-neutral-cream/70 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-4 text-center">
            Driving Range
          </h2>
          <Card>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-base sm:text-lg">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-base sm:text-lg">Služba</th>
                    <th className="text-right py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-base sm:text-lg">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Košík míčků (30 ks)</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-bold text-secondary text-xl sm:text-2xl">150 Kč</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Členové klubu</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">40 Kč</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral-dark mt-4 text-center italic">
              Pondělí - neděle: 8:00 - 20:00
            </p>
          </Card>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Vstupní poplatky - třetí sekce */}
      <Section id="vstupni-poplatky" className="bg-neutral-cream/70 py-6">
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
                  <div className="text-2xl sm:text-3xl font-display font-bold text-secondary">
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

      {/* Roční registrace - čtvrtá sekce */}
      <Section id="registrace" className="bg-neutral-cream/70 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-4 text-center">
            Roční registrace
          </h2>
          <Card>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-base sm:text-lg">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-base sm:text-lg">Kategorie</th>
                    <th className="text-right py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-base sm:text-lg">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Dospělý</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-bold text-secondary text-xl sm:text-2xl">1 500 Kč</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Senior 65+</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">1 200 Kč</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Mládež do 18 let</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">800 Kč</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Student do 24 let</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">1 000 Kč</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral-dark mt-4 text-center italic">
              Registrace v České golfové federaci (ČGF) je povinná pro všechny hráče
            </p>
          </Card>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Roční karty - pátá sekce */}
      <Section id="rocni-karty" className="bg-neutral-cream/70 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-2 text-center">
            Roční karty
          </h2>
          <Card>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-base sm:text-lg">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-base sm:text-lg">Kategorie</th>
                    <th className="text-right py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-base sm:text-lg">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Dospělý</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-bold text-secondary text-xl sm:text-2xl">10 000 Kč</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Senior 65+</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">7 000 Kč</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Dvojice</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">18 000 Kč</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Rodina</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">23 000 Kč</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Mládež do 13 let</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">3 500 Kč</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Mládež 13-18 let (+ studenti do 24 let)</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">5 000 Kč</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Ostatní služby - šestá sekce */}
      <Section id="sluzby" className="bg-neutral-cream/70 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-4 text-center">
            Ostatní služby
          </h2>
          <Card>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-base sm:text-lg">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-base sm:text-lg">Služba</th>
                    <th className="text-right py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-base sm:text-lg">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Půjčení golfového vozíku</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-bold text-secondary text-xl sm:text-2xl">500 Kč / 18 jamek</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Půjčení golfových holí</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">400 Kč / 18 jamek</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Půjčení holí + vozíku</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">800 Kč / 18 jamek</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-base sm:text-lg">Půjčení holí pro 9 jamek</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-lg sm:text-xl">250 Kč</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral-dark mt-4 text-center italic">
              Rezervace doporučujeme předem
            </p>
          </Card>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Seznam smluvních klubů */}
      <Section className="bg-neutral-cream/70 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-4 text-center">
            Seznam smluvních klubů
          </h2>
          <Card>
            <div className="space-y-4">
              <p className="text-neutral-dark text-base sm:text-lg text-center mb-6">
                Níže naleznete seznam golfových klubů, se kterými máme uzavřenou smlouvu o reciprocity.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                  <div className="flex-1">
                    <h3 className="text-lg font-heading font-semibold text-primary-dark mb-1">
                      Golf club Molitorov u Prahy
                    </h3>
                    <a 
                      href="http://www.golfmolitorov.cz/reciprocity/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark font-medium transition-colors text-sm sm:text-base inline-flex items-center gap-2"
                    >
                      www.golfmolitorov.cz
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-sm text-neutral-dark text-center italic mt-6">
                Seznam smluvních klubů je průběžně aktualizován. Pro aktuální informace nás prosím kontaktujte.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Členský roční poplatek - sedmá sekce */}
      <Section className="bg-neutral-cream/70 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-4 text-center">
            Členský roční poplatek
          </h2>
          <Card>
            <div className="text-center py-8">
              <p className="text-neutral-dark mb-6 text-sm sm:text-base">
                Podrobné informace o členských ročních poplatcích naleznete v sekci klubu.
              </p>
              <Link 
                to="/cs/klub" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-semibold text-sm sm:text-base"
              >
                Zobrazit ceník poplatků
                <FiExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  )
}

export default PricingPage

