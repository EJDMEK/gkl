import React from 'react'
import { useI18n } from '../i18n/i18n'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Divider from '../components/ui/Divider'
import PageHero from '../components/ui/PageHero'
import { FiPhone, FiCheck } from 'react-icons/fi'

const BavSeGolfemPage: React.FC = () => {
  useI18n()

  return (
    <div>
      {/* Hero Title */}
      <PageHero 
        title="Bav se golfem - kurzy pro negolfisty"
        backgroundImage="/gkl fotografie doplneni/hriste z dronu11.jpeg"
      />

      {/* Introduction */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8">
            <p className="text-lg text-neutral-dark leading-relaxed mb-4">
              <strong>Pro naprosté začátečníky</strong> (zájemce o golf, kteří ještě golf nikdy nehráli) jsou ve spolupráci s ČGF v nabídce <strong>Bav se golfem</strong> připraveny na našem hřišti tyto golfové balíčky.
            </p>
          </Card>
        </div>
      </Section>

      {/* Package 1 */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 border-l-4 border-secondary">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-secondary">1</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark">
                    Začínám s golfem - Ochutnávka golfu
                  </h2>
                  <p className="text-neutral-dark mt-1">Balíček</p>
                </div>
              </div>
              <p className="text-lg text-neutral-dark leading-relaxed mb-6">
                Naše trenérka Vás ve dvou hodinách seznámí s golfem, vyzkoušíte si odpálit první míčky a projdete se po hřišti. Veškeré vybavení Vám zapůjčíme.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-heading font-semibold text-primary-dark mb-4">
                Balíček obsahuje:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-dark">2 hodiny s trenérem</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-dark">zapůjčení golfových holí</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-dark">drivingové míče na Vaše první odpaly s trenérem</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-dark">vstup na tréninkové plochy</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-dark">komentovaná prohlídka hřiště</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/10">
              <h4 className="text-lg font-heading font-semibold text-primary-dark mb-3">
                Cena za balíček:
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="text-center p-3 bg-white/80 rounded-lg">
                  <div className="text-sm text-neutral-dark mb-1">1 osoba</div>
                  <div className="text-xl font-display font-bold text-secondary">590,- Kč</div>
                </div>
                <div className="text-center p-3 bg-white/80 rounded-lg">
                  <div className="text-sm text-neutral-dark mb-1">2 osoby</div>
                  <div className="text-xl font-display font-bold text-secondary">690,- Kč</div>
                </div>
                <div className="text-center p-3 bg-white/80 rounded-lg">
                  <div className="text-sm text-neutral-dark mb-1">3 osoby</div>
                  <div className="text-xl font-display font-bold text-secondary">790,- Kč</div>
                </div>
                <div className="text-center p-3 bg-white/80 rounded-lg">
                  <div className="text-sm text-neutral-dark mb-1">4 osoby</div>
                  <div className="text-xl font-display font-bold text-secondary">890,- Kč</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      <Divider variant="image" />

      {/* Package 2 */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 border-l-4 border-primary">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-display font-bold text-primary">2</span>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-dark">
                    Seznamuji se s hrou - Já se ten golf naučím
                  </h2>
                  <p className="text-neutral-dark mt-1">Balíček</p>
                </div>
              </div>
              <p className="text-lg text-neutral-dark leading-relaxed mb-4">
                Pokud jste absolvovali 1. balíček, můžete na něj navázat balíčkem 2.
              </p>
              <p className="text-lg text-neutral-dark leading-relaxed mb-6">
                Naše trenérka Vás v 6 lekcích tohoto kurzu pro začátečníky seznámí se všemi druhy golfových úderů, golfovými pravidly a etiketou.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-heading font-semibold text-primary-dark mb-4">
                Balíček obsahuje:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-dark">6 x 55 minut s trenérem</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-dark">zapůjčení golfových holí</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-dark">vstup na tréninkové plochy</span>
                </li>
                <li className="flex items-start gap-3">
                  <FiCheck className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-dark">neomezené množství golfových míčků k tréninkovým lekcím s trenérem</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 border border-primary/10">
              <h4 className="text-lg font-heading font-semibold text-primary-dark mb-3">
                Cena za balíček:
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white/80 rounded-lg">
                  <div className="text-sm text-neutral-dark mb-2">1 osoba</div>
                  <div className="text-2xl font-display font-bold text-secondary">2.990,- Kč</div>
                </div>
                <div className="text-center p-4 bg-white/80 rounded-lg">
                  <div className="text-sm text-neutral-dark mb-2">Skupina 2 - 4 osoby</div>
                  <div className="text-2xl font-display font-bold text-secondary">4.980,- Kč</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section className="bg-neutral-cream/70 py-6 md:py-8">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 md:p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-display font-bold text-primary-dark mb-4">
                Kontakt
              </h3>
              <p className="text-lg text-neutral-dark mb-6 leading-relaxed">
                V případě Vašeho zájmu o tyto balíčky můžete kontaktovat přímo naší trenérku paní Moniku Vaňásek Hodinovou
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

export default BavSeGolfemPage

