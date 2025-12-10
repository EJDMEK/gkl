import React from 'react'
import Hero from '../components/sections/Hero'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import FacilitiesStatusBar from '../components/ui/FacilitiesStatusBar'
import { courses } from '../data/courses'
import { memberships } from '../data/memberships'
import { tournaments2025 } from '../data/tournaments2025'
import { FiMapPin, FiPhone, FiMail, FiCalendar, FiClock, FiUsers, FiAward, FiExternalLink } from 'react-icons/fi'

const EnglishSinglePage: React.FC = () => {
  const selectedCourse = courses[0] // Championship course

  const openingHours = [
    { day: 'Monday - Friday', hours: '8:00 - 20:00' },
    { day: 'Saturday', hours: '7:00 - 20:00' },
    { day: 'Sunday', hours: '7:00 - 19:00' },
  ]

  // Get upcoming tournaments (next 3)
  const upcomingTournaments = tournaments2025.slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <div data-hero-section>
        <Hero
          title="Golfový klub Líšnice"
          subtitle="Since 1928, we have been creating unforgettable golf experiences in the heart of the Czech Republic"
          cta1={{ text: 'Contact Us', link: '#contact' }}
          cta2={{ text: 'View Course', link: '#course' }}
          cta3={{ text: 'Pricing', link: '#pricing' }}
        />
      </div>

      {/* Facilities Status Bar */}
      <FacilitiesStatusBar />

      {/* Weather Widget - temporarily hidden */}
      {/* <Section className="bg-white/80 py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <WeatherWidget />
          </div>
        </div>
      </Section> */}

      {/* About Club */}
      <Section id="about" className="bg-neutral-cream/70 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-4">
              About Golfový klub Líšnice
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="/2025_GKL_1928_logo.svg" 
                alt="GKL Logo" 
                className="h-16 w-auto object-contain mb-6"
              />
              <p className="text-lg text-neutral-dark leading-relaxed mb-4">
                Golfový klub Líšnice is one of the oldest and most prestigious golf clubs in the Czech Republic. Founded in 1928, our club has a rich history spanning nearly 100 years.
              </p>
              <p className="text-lg text-neutral-dark leading-relaxed mb-4">
                Our 18-hole championship course is located approximately 15 km from Prague, offering a unique golfing experience in a beautiful natural setting with exceptional views of the surrounding landscape.
              </p>
              <p className="text-lg text-neutral-dark leading-relaxed">
                The club is managed by a board elected every 4 years, ensuring democratic governance and continuous development of our facilities and services.
              </p>
            </div>
            <div className="relative">
              <img 
                src={selectedCourse.heroImage || '/hero-golf-course.jpg'} 
                alt="Golf Course" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Course Information */}
      <Section id="course" className="bg-white/80 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-4">
              Our Championship Course
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center">
              <div className="text-4xl font-display font-bold text-secondary mb-2">{selectedCourse.holes}</div>
              <div className="text-neutral-dark">Holes</div>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-display font-bold text-secondary mb-2">Par {selectedCourse.par}</div>
              <div className="text-neutral-dark">Par</div>
            </Card>
            <Card className="text-center">
              <div className="text-4xl font-display font-bold text-secondary mb-2">{selectedCourse.length}m</div>
              <div className="text-neutral-dark">Length</div>
            </Card>
          </div>

          <Card>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary-dark mb-3">Course Details</h3>
                <div className="space-y-2 text-neutral-dark">
                  <div><strong>Rating:</strong> {selectedCourse.rating}</div>
                  <div><strong>Slope:</strong> {selectedCourse.slope}</div>
                  <div><strong>Type:</strong> Championship Course</div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary-dark mb-3">Description</h3>
                <p className="text-neutral-dark leading-relaxed">
                  {selectedCourse.description || 'An 18-hole championship course with exceptional views of the surrounding landscape. A challenging course for experienced players.'}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="bg-neutral-cream/70 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-4">
              Pricing
            </h2>
          </div>

          {/* Green Fee */}
          <Card className="mb-8">
            <h3 className="text-2xl font-display font-bold text-primary-dark mb-6">Green Fee</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-primary/20">
                    <th className="text-left py-3 px-4 font-semibold text-primary-dark">Category</th>
                    <th className="text-right py-3 px-4 font-semibold text-primary-dark">9 Holes</th>
                    <th className="text-right py-3 px-4 font-semibold text-primary-dark">18 Holes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-neutral-light">
                    <td className="py-3 px-4 text-neutral-dark">Standard</td>
                    <td className="py-3 px-4 text-right font-bold text-secondary">540 CZK</td>
                    <td className="py-3 px-4 text-right font-bold text-secondary">870 CZK</td>
                  </tr>
                  <tr className="border-b border-neutral-light">
                    <td className="py-3 px-4 text-neutral-dark">Senior 65+</td>
                    <td className="py-3 px-4 text-right font-semibold text-primary">430 CZK</td>
                    <td className="py-3 px-4 text-right font-semibold text-primary">690 CZK</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-neutral-dark">Youth</td>
                    <td className="py-3 px-4 text-right font-semibold text-primary">320 CZK</td>
                    <td className="py-3 px-4 text-right font-semibold text-primary">540 CZK</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-neutral-dark mt-4 text-center italic">
              Monday - Sunday, holidays. Prices valid until further notice.
            </p>
          </Card>

          {/* Membership */}
          <Card>
            <h3 className="text-2xl font-display font-bold text-primary-dark mb-6">Membership</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {memberships.slice(0, 3).map((membership) => (
                <Card key={membership.id} className="border-l-4 border-secondary">
                  <h4 className="text-lg font-heading font-semibold text-primary-dark mb-2">
                    {membership.name}
                  </h4>
                  <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-3 mb-2">
                    <div className="text-xs text-neutral-dark mb-1">Entry Fee</div>
                    <div className="text-xl font-display font-bold text-secondary">
                      {membership.entryFee.toLocaleString('en-US')} CZK
                    </div>
                  </div>
                  <div className="text-xs text-neutral-dark">
                    Annual Fee: <span className="font-semibold text-primary">{membership.annualFee.toLocaleString('en-US')} CZK</span>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* Tournaments */}
      <Section id="tournaments" className="bg-white/80 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-4">
              Upcoming Tournaments
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingTournaments.map((tournament, idx) => (
              <Card key={idx} className="border-t-4" style={{ borderTopColor: tournament.type === 'otevřený' ? '#C4A882' : tournament.type === 'uzavřený' ? '#D4AF37' : '#8B7355' }}>
                <div className="flex items-center gap-2 mb-3">
                  <FiCalendar className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-neutral-dark">
                    {tournament.date}
                  </span>
                </div>
                <h4 className="text-lg font-heading font-semibold text-primary-dark mb-2">
                  {tournament.name}
                </h4>
                {tournament.time && (
                  <div className="flex items-center gap-2 text-sm text-neutral-dark">
                    <FiClock className="w-4 h-4 text-secondary" />
                    <span>{tournament.time}</span>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <a 
              href="https://www.cgf.cz/turnaje" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              <span>View all tournaments on CGF website</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services" className="bg-neutral-cream/70 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-4">
              Golf Lessons & Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-heading font-semibold text-primary-dark mb-3">
                Golf Lessons
              </h3>
              <p className="text-neutral-dark leading-relaxed mb-4">
                We offer professional golf lessons for beginners and advanced players. Our experienced instructors will help you improve your game.
              </p>
              <ul className="space-y-2 text-neutral-dark">
                <li className="flex items-start gap-2">
                  <FiUsers className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Individual and group lessons</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiUsers className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Beginner packages available</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiUsers className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Equipment rental</span>
                </li>
              </ul>
            </Card>

            <Card>
              <h3 className="text-xl font-heading font-semibold text-primary-dark mb-3">
                Additional Services
              </h3>
              <p className="text-neutral-dark leading-relaxed mb-4">
                Our club offers a range of additional services to enhance your golfing experience.
              </p>
              <ul className="space-y-2 text-neutral-dark">
                <li className="flex items-start gap-2">
                  <FiAward className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Driving range</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiAward className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Clubhouse with restaurant</span>
                </li>
                <li className="flex items-start gap-2">
                  <FiAward className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span>Pro shop</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-white/80 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-4">
              Contact Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <h3 className="text-xl font-display font-bold text-primary-dark mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiMapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-dark mb-1">Address</div>
                    <div className="text-primary-dark font-medium">
                      Golfový klub Líšnice<br />
                      Líšnice 94<br />
                      252 10 Líšnice<br />
                      Czech Republic
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiPhone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-neutral-dark mb-1">Phone</div>
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
              </div>
            </Card>

            <Card>
              <h3 className="text-xl font-display font-bold text-primary-dark mb-6">Opening Hours</h3>
              <div className="space-y-3">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-neutral-light last:border-0">
                    <span className="text-neutral-dark">{schedule.day}</span>
                    <span className="text-primary-dark font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Map */}
          <Card className="overflow-hidden p-0">
            <div className="w-full h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps?q=Líšnice+94,+252+10+Líšnice,+Česká+republika&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Golfový klub Líšnice - map"
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

export default EnglishSinglePage

