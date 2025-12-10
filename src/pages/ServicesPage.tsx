import React from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import PageHero from '../components/ui/PageHero'
import Button from '../components/ui/Button'
import { FiArrowRight, FiUsers, FiAward } from 'react-icons/fi'

const ServicesPage: React.FC = () => {
  const { t, language } = useI18n()

  const getPath = (path: string) => {
    return `/${language === 'cs' ? 'cs' : 'en'}${path}`
  }

  return (
    <div>
      {/* Hero Title */}
      <PageHero 
        title={t('services.title')}
        backgroundImage="/gkl fotografie doplneni/hriste z dronu7.jpeg"
      />

      {/* Introduction */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8">
            <p className="text-lg text-neutral-dark leading-relaxed mb-4 text-center">
              Naše golfová škola nabízí širokou škálu výukových programů pro všechny věkové kategorie a úrovně dovedností. Vyberte si sekci, která vás zajímá.
            </p>
          </Card>
        </div>
      </Section>

      {/* Sections Overview */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Individuální/skupinová výuka */}
            <Card className="p-6 md:p-8 border-l-4 border-secondary hover:shadow-lg transition-all duration-500 ease-out">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiUsers className="w-8 h-8 text-secondary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark">
                  Individuální a skupinová výuka
                </h2>
              </div>
              <p className="text-lg text-neutral-dark leading-relaxed mb-6">
                Pro naprosté začátečníky (zájemce o golf, kteří ještě golf nikdy nehráli) jsou ve spolupráci s ČGF v nabídce <strong>Bav se golfem</strong> připraveny na našem hřišti golfové balíčky pro individuální i skupinovou výuku.
              </p>
              <Link to={getPath('/vyuka-golfu/individualni')}>
                <Button variant="primary" size="lg" icon={<FiArrowRight />} iconPosition="right" className="w-full md:w-auto">
                  Zobrazit nabídku
                </Button>
              </Link>
            </Card>

            {/* Dětská/mládežnická sekce */}
            <Card className="p-6 md:p-8 border-l-4 border-primary hover:shadow-lg transition-all duration-500 ease-out">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiAward className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark">
                  Dětská a mládežnická sekce
                </h2>
              </div>
              <p className="text-lg text-neutral-dark leading-relaxed mb-6">
                Golf je skvělý sport pro děti a mládež. Rozvíjí koordinaci, koncentraci a respekt k pravidlům. Naše trenérka připravila speciální programy pro různé věkové kategorie.
              </p>
              <Link to={getPath('/vyuka-golfu/mladez')}>
                <Button variant="primary" size="lg" icon={<FiArrowRight />} iconPosition="right" className="w-full md:w-auto">
                  Zobrazit nabídku
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default ServicesPage
