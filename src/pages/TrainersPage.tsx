import React from 'react'
import { useI18n } from '../i18n/i18n'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import PageHero from '../components/ui/PageHero'
import { FiPhone, FiMail, FiAward } from 'react-icons/fi'

interface Trainer {
  id: string
  name: string
  title?: string
  qualifications: string[]
  bio?: string
  phone?: string
  email?: string
}

const trainers: Trainer[] = [
  {
    id: '1',
    name: 'Květoslav Strachota',
    qualifications: [
      'Profesionální trenér a hráč golfu',
      'Člen GKL od roku 1993',
      'Člen PGA od roku 2003',
      'Člen Výboru GKL a předseda STK od roku 2018',
      'Golf Professional licence A: I. třída',
    ],
    phone: '+420 606 136 222',
    email: 'kvetoslavstrachota@seznam.cz',
  },
  {
    id: '2',
    name: 'Monika Vaňásek Hodinová',
    qualifications: [
      'Profesionální trenérka',
      'Specializace na začátečníky a mládež',
    ],
    phone: '+420 777 221 967',
  },
  {
    id: '3',
    name: 'Mgr. Pavel Máj',
    qualifications: [
      'Člen PGA C',
      'Golf Professional licence A',
      'Trenér 1. třídy',
    ],
  },
  {
    id: '4',
    name: 'Václav Lébl jr.',
    qualifications: [
      'Profesionální trenér',
    ],
  },
]

const TrainersPage: React.FC = () => {
  useI18n()

  return (
    <div>
      {/* Hero Title */}
      <PageHero 
        title="Trenéři GKL"
        backgroundImage="/gkl fotografie doplneni/hriste z dronu7.jpeg"
      />

      {/* Introduction */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8">
            <p className="text-lg text-neutral-dark leading-relaxed mb-4 text-center">
              Naši profesionální trenéři Vám pomohou zlepšit vaši hru. Seznamte se s našimi certifikovanými instruktory a jejich specializacemi.
            </p>
          </Card>
        </div>
      </Section>

      {/* Trainers List */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {trainers.map((trainer) => (
              <Card key={trainer.id} className="p-6 md:p-8 border-l-4 border-primary hover:shadow-lg transition-all duration-500 ease-out">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiAward className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-1">
                      {trainer.name}
                    </h2>
                    {trainer.title && (
                      <p className="text-neutral-dark text-sm mb-2">{trainer.title}</p>
                    )}
                  </div>
                </div>

                {trainer.bio && (
                  <p className="text-neutral-dark leading-relaxed mb-4">
                    {trainer.bio}
                  </p>
                )}

                <div className="mb-4">
                  <h3 className="text-lg font-heading font-semibold text-primary-dark mb-3">
                    Kvalifikace:
                  </h3>
                  <ul className="space-y-2">
                    {trainer.qualifications.map((qual, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-secondary mt-1">•</span>
                        <span className="text-neutral-dark">{qual}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {(trainer.phone || trainer.email) && (
                  <div className="pt-4 border-t border-neutral-light">
                    <div className="flex flex-col gap-2">
                      {trainer.phone && (
                        <a 
                          href={`tel:${trainer.phone.replace(/\s/g, '')}`}
                          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                        >
                          <FiPhone className="w-4 h-4" />
                          <span>{trainer.phone}</span>
                        </a>
                      )}
                      {trainer.email && (
                        <a 
                          href={`mailto:${trainer.email}`}
                          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
                        >
                          <FiMail className="w-4 h-4" />
                          <span>{trainer.email}</span>
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}

export default TrainersPage

