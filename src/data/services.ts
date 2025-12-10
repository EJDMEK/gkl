import { Service } from './types'

export const services: Service[] = [
  {
    id: 'driving-range',
    name: 'Driving Range',
    description: 'Moderní driving range s krytými i venkovními místy. Ideální pro trénink všech úrovní hráčů. K dispozici jsou také automatické míčky a profesionální vybavení.',
    price: '150 Kč / košík',
    openingHours: 'Pondělí - Neděle: 8:00 - 20:00',
    images: ['/images/driving-range-1.jpg', '/images/driving-range-2.jpg'],
  },
  {
    id: 'academy',
    name: 'Golf Academy',
    description: 'Profesionální výuka golfu pro všechny úrovně. Individuální lekce s certifikovanými instruktory, skupinové kurzy pro začátečníky i pokročilé hráče.',
    price: 'Od 800 Kč / lekce',
    openingHours: 'Pondělí - Neděle: 9:00 - 18:00 (dle rezervace)',
    images: ['/images/academy-1.jpg', '/images/academy-2.jpg'],
  },
  {
    id: 'proshop',
    name: 'Proshop',
    description: 'Široký sortiment golfového vybavení a oblečení od předních světových značek. Profesionální poradenství a fitting služby.',
    price: 'Různé ceny',
    openingHours: 'Pondělí - Neděle: 9:00 - 18:00',
    images: ['/images/proshop-1.jpg', '/images/proshop-2.jpg'],
  },
  {
    id: 'restaurant',
    name: 'Restaurace',
    description: 'Vynikající kuchyně s výhledem na hřiště. Široká nabídka jídel, nápojů a specialit. Ideální místo pro setkání po hře.',
    price: 'Menu od 250 Kč',
    openingHours: 'Pondělí - Neděle: 11:00 - 22:00',
    images: ['/images/restaurant-1.jpg', '/images/restaurant-2.jpg'],
  },
]

