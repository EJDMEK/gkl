import React, { useState } from 'react'
import { useI18n } from '../i18n/i18n'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Divider from '../components/ui/Divider'
import PageHero from '../components/ui/PageHero'
import { courses } from '../data/courses'

const TeeTimesPage: React.FC = () => {
  const { t } = useI18n()
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [selectedCourse, setSelectedCourse] = useState(courses[0].id)
  const [players, setPlayers] = useState(1)
  const [showBookingForm, setShowBookingForm] = useState(false)

  const timeSlots = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  ]

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    
    const days = []
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i))
    }
    return days
  }

  const days = getDaysInMonth(selectedDate)
  const monthNames = ['Leden', 'Únor', 'Březen', 'Duben', 'Květen', 'Červen', 'Červenec', 'Srpen', 'Září', 'Říjen', 'Listopad', 'Prosinec']

  const handleDateClick = (date: Date | null) => {
    if (date) {
      setSelectedDate(date)
    }
  }

  const handleTimeClick = (time: string) => {
    setSelectedTime(time)
    setShowBookingForm(true)
  }

  return (
    <div>
      {/* Hero Title */}
      <PageHero 
        title={t('teeTimes.title')}
        backgroundImage="/gkl fotografie doplneni/hriste z dronu6.jpeg"
      />

      {/* Filters */}
      <Section className="bg-neutral-cream/70">
        <Card className="mb-8">
          <h2 className="text-2xl font-display font-bold text-primary-dark mb-6">
            Filtry
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-neutral-dark mb-2">
                {t('teeTimes.filters.course')}
              </label>
              <select
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {courses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-dark mb-2">
                {t('teeTimes.filters.players')}
              </label>
              <select
                value={players}
                onChange={(e) => setPlayers(Number(e.target.value))}
                className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {[1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-dark mb-2">
                Jamky
              </label>
              <select className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <option value="9">9 jamky</option>
                <option value="18">18 jamky</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button variant="primary" className="w-full">
                Hledat
              </Button>
            </div>
          </div>
        </Card>

        {/* Calendar */}
        <Card>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-display font-bold text-primary-dark">
              {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
            </h2>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  const newDate = new Date(selectedDate)
                  newDate.setMonth(newDate.getMonth() - 1)
                  setSelectedDate(newDate)
                }}
              >
                ←
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setSelectedDate(new Date())}
              >
                Dnes
              </Button>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => {
                  const newDate = new Date(selectedDate)
                  newDate.setMonth(newDate.getMonth() + 1)
                  setSelectedDate(newDate)
                }}
              >
                →
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2 mb-6">
            {['Po', 'Út', 'St', 'Čt', 'Pá', 'So', 'Ne'].map((day) => (
              <div key={day} className="text-center font-semibold text-neutral-dark py-2">
                {day}
              </div>
            ))}
            {days.map((date, index) => (
              <button
                key={index}
                onClick={() => handleDateClick(date)}
                className={`aspect-square rounded-lg transition-all ${
                  date
                    ? date.toDateString() === selectedDate.toDateString()
                      ? 'bg-primary text-white'
                      : 'bg-neutral-light text-neutral-dark hover:bg-primary-light hover:text-white'
                    : 'bg-transparent'
                }`}
                disabled={!date}
              >
                {date?.getDate()}
              </button>
            ))}
          </div>

          {/* Time Slots */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-primary-dark mb-4">
              Dostupné časy pro {selectedDate.toLocaleDateString('cs-CZ')}
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedTime === time
                      ? 'bg-secondary text-white'
                      : 'bg-primary-light text-white hover:bg-primary'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      <Divider variant="image" />

      {/* Rules */}
      <Section className="bg-neutral-cream/70">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-dark mb-8 text-center">
          {t('teeTimes.rules.title')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <h3 className="text-xl font-heading font-semibold text-primary-dark mb-3">
              {t('teeTimes.rules.dressCode')}
            </h3>
            <p className="text-neutral-dark">
              Golfové oblečení je povinné. Dlouhé kalhoty nebo šortky, golfová košile s límečkem.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-heading font-semibold text-primary-dark mb-3">
              {t('teeTimes.rules.paceOfPlay')}
            </h3>
            <p className="text-neutral-dark">
              Prosíme o dodržování tempa hry. Standardní doba hry je 4 hodiny pro 18 jamky.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-heading font-semibold text-primary-dark mb-3">
              {t('teeTimes.rules.courseRules')}
            </h3>
            <p className="text-neutral-dark">
              Respektujte pravidla hřiště a ostatní hráče. Opravte pitch marky a divots.
            </p>
          </Card>
        </div>
      </Section>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="max-w-md w-full">
            <h3 className="text-2xl font-display font-bold text-primary-dark mb-4">
              Rezervace tee time
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-1">
                  Datum a čas
                </label>
                <input
                  type="text"
                  value={`${selectedDate.toLocaleDateString('cs-CZ')} ${selectedTime}`}
                  readOnly
                  className="w-full px-4 py-2 border border-neutral-light rounded-lg bg-neutral-light"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-1">
                  Jméno a příjmení
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-dark mb-1">
                  Telefon
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-neutral-light rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex gap-4">
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={(e) => {
                    e.preventDefault()
                    setShowBookingForm(false)
                  }}
                >
                  Zrušit
                </Button>
                <Button variant="primary" className="flex-1">
                  {t('teeTimes.book')}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  )
}

export default TeeTimesPage

