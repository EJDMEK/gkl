import React from 'react'
import { useI18n } from '../i18n/i18n'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import PageHero from '../components/ui/PageHero'
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi'

const ContactPage: React.FC = () => {
  const { t } = useI18n()

  const openingHoursGolf = [
    { day: 'Pondělí - Pátek', hours: '8:00 - 20:00' },
    { day: 'Sobota', hours: '7:00 - 20:00' },
    { day: 'Neděle', hours: '7:00 - 19:00' },
  ]

  const openingHoursReception = [
    { day: 'Pondělí - Pátek', hours: '8:00 - 20:00' },
    { day: 'Sobota', hours: '7:00 - 20:00' },
    { day: 'Neděle', hours: '7:00 - 19:00' },
  ]

  const openingHoursDrivingRange = [
    { day: 'Pondělí - Neděle', hours: '8:00 - 20:00' },
  ]

  return (
    <div>
      {/* Hero Title */}
      <PageHero 
        title={t('nav.contact')}
        backgroundImage="/gkl fotografie doplneni/hriste z dronu9.jpeg"
      />

          {/* Contact Info */}
      <Section className="bg-neutral-cream/70 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {/* Contact Details */}
            <Card>
              <h2 className="text-2xl font-display font-bold text-primary-dark mb-6">
                Kontaktní údaje
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-6 h-6 text-primary" />
                  </div>
                <div>
                  <div className="text-sm text-neutral-dark mb-1">Adresa</div>
                  <div className="text-primary-dark font-medium">
                    Golfový klub Líšnice<br />
                      Líšnice 94<br />
                      252 10 Líšnice<br />
                    Česká republika
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <div className="text-sm text-neutral-dark mb-1">Telefon</div>
                    <a href="tel:+420318123456" className="text-primary-dark font-medium hover:text-primary transition-colors">
                      +420 318 123 456
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiMail className="w-6 h-6 text-primary" />
                </div>
                <div>
                    <div className="text-sm text-neutral-dark mb-1">Email</div>
                    <a href="mailto:info@gkl.cz" className="text-primary-dark font-medium hover:text-primary transition-colors">
                      info@gkl.cz
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiClock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-neutral-dark mb-1">GPS</div>
                  <div className="text-primary-dark font-medium">49.8656° N, 14.2564° E</div>
                  </div>
                </div>
              </div>
            </Card>

          </div>

          {/* Opening Hours - Split into 3 sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {/* Golf Course Hours */}
            <Card>
              <h2 className="text-xl font-display font-bold text-primary-dark mb-4">
                GOLFOVÉ HŘIŠTĚ
              </h2>
              <div className="space-y-3">
                {openingHoursGolf.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-light last:border-0">
                    <span className="text-sm text-neutral-dark">{schedule.day}</span>
                    <span className="text-sm text-primary-dark font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Reception Hours */}
            <Card>
              <h2 className="text-xl font-display font-bold text-primary-dark mb-4">
                RECEPCE
              </h2>
              <div className="space-y-3">
                {openingHoursReception.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-light last:border-0">
                    <span className="text-sm text-neutral-dark">{schedule.day}</span>
                    <span className="text-sm text-primary-dark font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Driving Range Hours */}
            <Card>
              <h2 className="text-xl font-display font-bold text-primary-dark mb-4">
                DRIVING RANGE
              </h2>
              <div className="space-y-3">
                {openingHoursDrivingRange.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-light last:border-0">
                    <span className="text-sm text-neutral-dark">{schedule.day}</span>
                    <span className="text-sm text-primary-dark font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Opening Hours Note */}
          <Card className="bg-primary/5 border-primary/20">
            <p className="text-sm text-neutral-dark italic text-center">
              * Otevírací doba se může lišit v závislosti na počasí a sezóně. Pro aktuální informace nás prosím kontaktujte.
            </p>
          </Card>

          {/* Map */}
          <Card className="overflow-hidden p-0">
            <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=Líšnice+94,+252+10+Líšnice,+Česká+republika&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Golfový klub Líšnice - mapa"
              />
            </div>
            <div className="p-4 bg-neutral-cream/70 border-t border-neutral-light">
              <div className="flex items-center gap-2 text-sm text-neutral-dark">
                <FiMapPin className="w-4 h-4 text-primary" />
                <span>Líšnice 94, 252 10 Líšnice</span>
              </div>
            </div>
          </Card>
        </div>
      </Section>

    </div>
  )
}

export default ContactPage

