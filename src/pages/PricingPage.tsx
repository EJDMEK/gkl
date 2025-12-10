import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Divider from '../components/ui/Divider'
import PageHero from '../components/ui/PageHero'
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
      <div className="bg-neutral-cream/70 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleFilterClick('all')}
                className={`px-3 py-2 text-xs font-medium rounded-full transition-all min-h-[44px] ${
                  selectedFilter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-white/80 text-neutral-dark border border-primary/20 hover:bg-primary/10 active:bg-primary/20'
                }`}
              >
                Vše
              </button>
              <button
                onClick={() => handleFilterClick('green-fee')}
                className={`px-3 py-2 text-xs font-medium rounded-full transition-all min-h-[44px] ${
                  selectedFilter === 'green-fee'
                    ? 'bg-primary text-white'
                    : 'bg-white/80 text-neutral-dark border border-primary/20 hover:bg-primary/10 active:bg-primary/20'
                }`}
              >
                Green Fee
              </button>
              <button
                onClick={() => handleFilterClick('vstupni-poplatky')}
                className={`px-3 py-2 text-xs font-medium rounded-full transition-all min-h-[44px] ${
                  selectedFilter === 'vstupni-poplatky'
                    ? 'bg-primary text-white'
                    : 'bg-white/80 text-neutral-dark border border-primary/20 hover:bg-primary/10 active:bg-primary/20'
                }`}
              >
                Vstupní poplatky
              </button>
              <button
                onClick={() => handleFilterClick('rocni-karty')}
                className={`px-3 py-2 text-xs font-medium rounded-full transition-all min-h-[44px] ${
                  selectedFilter === 'rocni-karty'
                    ? 'bg-primary text-white'
                    : 'bg-white/80 text-neutral-dark border border-primary/20 hover:bg-primary/10 active:bg-primary/20'
                }`}
              >
                Roční karty
              </button>
              <button
                onClick={() => handleFilterClick('registrace')}
                className={`px-3 py-2 text-xs font-medium rounded-full transition-all min-h-[44px] ${
                  selectedFilter === 'registrace'
                    ? 'bg-primary text-white'
                    : 'bg-white/80 text-neutral-dark border border-primary/20 hover:bg-primary/10 active:bg-primary/20'
                }`}
              >
                Registrace
              </button>
              <button
                onClick={() => handleFilterClick('sluzby')}
                className={`px-3 py-2 text-xs font-medium rounded-full transition-all min-h-[44px] ${
                  selectedFilter === 'sluzby'
                    ? 'bg-primary text-white'
                    : 'bg-white/80 text-neutral-dark border border-primary/20 hover:bg-primary/10 active:bg-primary/20'
                }`}
              >
                Služby
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Green Fee - první sekce */}
      <Section id="green-fee" className="bg-neutral-cream/70 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-4 text-center">
            Green Fee
          </h2>

          {/* Akční ceny - kompaktní tabulka */}
          <Card className="mb-6">
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-sm sm:text-base">Kategorie</th>
                    <th className="text-right py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-sm sm:text-base">9 jamek</th>
                    <th className="text-right py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-sm sm:text-base">18 jamek</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Standard</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-bold text-secondary text-sm sm:text-base">540 Kč</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-bold text-secondary text-sm sm:text-base">870 Kč</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Senior 65+</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">430 Kč</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">690 Kč</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Mládež</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">320 Kč</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">540 Kč</td>
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
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-sm sm:text-base">Služba</th>
                    <th className="text-right py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-sm sm:text-base">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Košík míčků (30 ks)</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-bold text-secondary text-sm sm:text-base">150 Kč</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Členové klubu</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">40 Kč</td>
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

      {/* Roční registrace - čtvrtá sekce */}
      <Section id="registrace" className="bg-neutral-cream/70 py-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-4 text-center">
            Roční registrace
          </h2>
          <Card>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-sm sm:text-base">Kategorie</th>
                    <th className="text-right py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-sm sm:text-base">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Dospělý</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-bold text-secondary text-sm sm:text-base">1 500 Kč</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Senior 65+</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">1 200 Kč</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Mládež do 18 let</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">800 Kč</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Student do 24 let</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">1 000 Kč</td>
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
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-sm sm:text-base">Kategorie</th>
                    <th className="text-right py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-sm sm:text-base">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Dospělý</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-bold text-secondary text-sm sm:text-base">10 000 Kč</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Senior 65+</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">7 000 Kč</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Dvojice</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">18 000 Kč</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Rodina</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">23 000 Kč</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Mládež do 13 let</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">3 500 Kč</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Mládež 13-18 let (+ studenti do 24 let)</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">5 000 Kč</td>
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
              <table className="w-full text-sm sm:text-base">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-sm sm:text-base">Služba</th>
                    <th className="text-right py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-primary-dark text-sm sm:text-base">Cena</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Půjčení golfového vozíku</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-bold text-secondary text-sm sm:text-base">500 Kč / 18 jamek</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Půjčení golfových holí</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">400 Kč / 18 jamek</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Půjčení holí + vozíku</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">800 Kč / 18 jamek</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-neutral-dark text-sm sm:text-base">Půjčení holí pro 9 jamek</td>
                    <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-right font-semibold text-primary text-sm sm:text-base">250 Kč</td>
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

