import React, { useState } from 'react'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Divider from '../components/ui/Divider'
import PageHero from '../components/ui/PageHero'
import { memberships } from '../data/memberships'
import { FiCheck, FiInfo } from 'react-icons/fi'

const MembershipPage: React.FC = () => {

  const faqs = [
    {
      question: 'Jak se mohu stát členem?',
      answer: 'Pro vstup do Golfového klubu Líšnice je nutné vyplnit a podepsat přihlášku, odevzdat na recepci nebo poslat emailem. Přihláška do klubu je v sekci Klub - Přihláška za člena.',
    },
    {
      question: 'Kdo rozhoduje o přijetí?',
      answer: 'O nabytí členství v GKL rozhoduje výbor GKL na základě žádosti uchazeče o členství - Přihlášky za člena GKL.',
    },
    {
      question: 'Jak mohu zaplatit?',
      answer: 'Forma úhrady je možná osobně na recepci hřiště v Líšnici nebo bankovním převodem na číslo účtu 19-1519360277/0100. Jako variabilní symbol uveďte Vaše rodné číslo.',
    },
    {
      question: 'Kdy musím zaplatit?',
      answer: 'Přijetí za člena GKL je v současné době vázáno na zaplacení vstupního poplatku.',
    },
  ]

  return (
    <div>
      {/* Hero Title */}
      <PageHero 
        title="Členství v GKL"
        backgroundImage="/gkl fotografie doplneni/hriste z dronu4.jpeg"
      />

      {/* Introduction */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8">
            <p className="text-lg text-neutral-dark leading-relaxed mb-4">
              Členem Golfového klubu Líšnice se může stát každá fyzická osoba, která souhlasí se stanovami klubu, s posláním a cílem činnosti GKL a chce se na jejich naplňování podílet.
            </p>
            <p className="text-lg text-neutral-dark leading-relaxed">
              Protože GKL patří mezi kluby s bohatou a slavnou historií a mezi jeho členy patřila řada vynikajících osobností, je kladen důraz zejména na zachování tradic a golfové etikety.
            </p>
          </Card>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Membership Types */}
      <Section className="bg-neutral-cream/70">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-4 text-center">
            Vstupní poplatky do klubu včetně ročního členského poplatku na r. 2025
          </h2>
          <p className="text-center text-neutral-dark mb-8">
            Roční poplatek v prvním roce již neplatíte (je zahrnut ve vstupním poplatku)
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberships.map((membership) => (
              <Card
                key={membership.id}
                className="flex flex-col border-l-4 border-secondary"
              >
                <h3 className="text-xl font-heading font-semibold text-primary-dark mb-2">
                  {membership.name}
                </h3>
                {membership.description && (
                  <p className="text-sm text-neutral-dark mb-4 italic">
                    {membership.description}
                  </p>
                )}
                
                <div className="mb-4 space-y-2">
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-4 border border-primary/10">
                    <div className="text-xs text-neutral-dark mb-1">Vstupní poplatek včetně ročního poplatku</div>
                    <div className="text-2xl font-display font-bold text-secondary">
                      {membership.entryFee.toLocaleString('cs-CZ')} Kč
                    </div>
                  </div>
                  <div className="bg-neutral-light/30 rounded-lg p-3 border border-neutral-light">
                    <div className="text-xs text-neutral-dark mb-1">Roční poplatek (od 2. roku)</div>
                    <div className="text-lg font-display font-semibold text-primary">
                      {membership.annualFee.toLocaleString('cs-CZ')} Kč
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6 flex-grow">
                  {membership.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-neutral-dark">
                      <FiCheck className="w-4 h-4 text-secondary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Benefits */}
      <Section className="bg-neutral-cream/70">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-8 text-center">
            Výhody členství v Golfovém klubu Líšnice
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Celoroční neomezená hra na hřišti v Líšnici',
              'Registrace v ČGF',
              'Zvýhodněná cena míčů na drivingu',
              'Hra Vašich hostů za zvýhodněné ceny',
              'Slevy na partnerských hřištích',
            ].map((benefit, idx) => (
              <Card key={idx} className="flex items-center gap-4 p-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center flex-shrink-0">
                  <FiCheck className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-base font-medium text-primary-dark">{benefit}</span>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Application Info */}
      <Section className="bg-neutral-cream/70">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                <FiInfo className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-4">
                  Jak se stát členem
                </h3>
                <p className="text-lg text-neutral-dark leading-relaxed mb-4">
                  Pro vstup do Golfového klubu Líšnice je nutné vyplnit a podepsat přihlášku, odevzdat na recepci nebo poslat emailem.
                </p>
                <p className="text-lg text-neutral-dark leading-relaxed mb-6">
                  Přihláška do klubu je v sekci <strong>Klub - Přihláška za člena</strong>.
                </p>
                <p className="text-base text-neutral-dark leading-relaxed mb-4">
                  O nabytí členství v GKL rozhoduje výbor GKL na základě žádosti uchazeče o členství - Přihlášky za člena GKL.
                </p>
                <p className="text-base text-neutral-dark leading-relaxed">
                  Přijetí za člena GKL je v současné době vázáno na zaplacení vstupního poplatku.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Payment Info */}
      <Section className="bg-neutral-cream/70">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 border-l-4 border-primary">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-6">
              Platební údaje
            </h3>
            <div className="space-y-4">
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                <div className="text-sm text-neutral-dark mb-1">Číslo účtu</div>
                <div className="text-xl font-display font-bold text-primary">19-1519360277/0100</div>
              </div>
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                <div className="text-sm text-neutral-dark mb-1">Variabilní symbol</div>
                <div className="text-lg font-display font-semibold text-primary">Vaše rodné číslo</div>
              </div>
              <p className="text-base text-neutral-dark mt-4">
                Forma úhrady je možná osobně na recepci hřiště v Líšnici nebo bankovním převodem.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <Divider variant="image" />

      {/* FAQ */}
      <Section className="bg-neutral-cream/70">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-8 text-center">
          Často kladené otázky
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </Section>
    </div>
  )
}

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-heading font-semibold text-primary-dark pr-4">
          {question}
        </h3>
        <svg
          className={`w-6 h-6 text-primary transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <p className="mt-4 text-neutral-dark leading-relaxed">{answer}</p>
      )}
    </Card>
  )
}

export default MembershipPage
