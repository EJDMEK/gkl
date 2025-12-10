import React from 'react'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import PageHero from '../components/ui/PageHero'
import { FiPhone, FiCheck, FiClock, FiUsers } from 'react-icons/fi'
import { youthTrainings } from '../data/youthTraining'

const YouthTrainingPage: React.FC = () => {

  return (
    <div>
      {/* Hero Title */}
      <PageHero 
        title="Dětská a mládežnická sekce"
        backgroundImage="/gkl fotografie doplneni/hriste z dronu2.jpeg"
      />

      {/* Introduction */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8">
            <p className="text-lg text-neutral-dark leading-relaxed mb-4">
              Golf je skvělý sport pro děti a mládež. Rozvíjí koordinaci, koncentraci a respekt k pravidlům. Naše trenérka připravila speciální programy pro různé věkové kategorie.
            </p>
            <p className="text-lg text-neutral-dark leading-relaxed">
              Všechny kurzy jsou vedeny zkušenými trenéry s důrazem na bezpečnost, zábavu a postupné zdokonalování golfových dovedností.
            </p>
          </Card>
        </div>
      </Section>

      {/* Youth Trainings */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {youthTrainings.map((training) => (
              <Card 
                key={training.id} 
                className="p-6 md:p-8 border-l-4 border-secondary"
              >
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-3">
                    {training.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-neutral-dark">
                      <FiUsers className="w-5 h-5 text-secondary" />
                      <span className="font-medium">{training.ageGroup}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-dark">
                      <FiClock className="w-5 h-5 text-secondary" />
                      <span>{training.duration}</span>
                    </div>
                  </div>
                  <p className="text-lg text-neutral-dark leading-relaxed mb-4">
                    {training.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-heading font-semibold text-primary-dark mb-4">
                    Kurz obsahuje:
                  </h3>
                  <ul className="space-y-2">
                    {training.includes.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <FiCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-dark">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {training.schedule && (
                  <div className="mb-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                    <p className="text-neutral-dark">
                      <strong>Termín:</strong> {training.schedule}
                    </p>
                  </div>
                )}

                <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/10 mb-6">
                  <div className="text-center">
                    <div className="text-sm text-neutral-dark mb-2">Cena za kurz</div>
                    <div className="text-3xl font-display font-bold text-secondary">
                      {training.price}
                    </div>
                  </div>
                </div>

                {training.contact && (
                  <div className="text-center">
                    <p className="text-neutral-dark mb-3">
                      Kontakt: <strong>{training.contact.name}</strong>
                    </p>
                    <a 
                      href={`tel:+420${training.contact.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-light transition-all duration-500 ease-out shadow-md hover:shadow-lg"
                    >
                      <FiPhone className="w-5 h-5" />
                      <span className="font-semibold">{training.contact.phone}</span>
                    </a>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* General Contact */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-4">
                Máte dotazy?
              </h3>
              <p className="text-lg text-neutral-dark mb-6 leading-relaxed">
                Pro více informací o dětských a mládežnických programech kontaktujte naší trenérku paní Moniku Vaňásek Hodinovou
              </p>
              <a 
                href="tel:+420777221967"
                className="inline-flex items-center gap-3 px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary-light transition-all duration-500 ease-out shadow-md hover:shadow-lg"
              >
                <FiPhone className="w-5 h-5" />
                <span className="text-lg font-semibold">777 221 967</span>
              </a>
            </div>
          </Card>
        </div>
      </Section>
    </div>
  )
}

export default YouthTrainingPage

