export interface Hole {
  number: number
  par: number
  length: number
  handicap: number
  name?: string
  description?: string
  tip?: string
  images?: string[] // Současné fotky
  planImage?: string // Plán jamky (hlavní, velký)
  cedulePdf?: string // PDF mapa jamky z cedule
  historicalImages?: string[] // Historické fotky
  video?: string // Video s průletem z dronu (později)
  holeNumber9?: number // Číslo jamky na devítce (pokud je to 18jamkové hřiště)
  holeNumber18?: number // Číslo jamky na osmnáctce
}

export interface Course {
  id: string
  name: string
  holes: 9 | 18
  par: number
  length: number
  rating: number
  slope: number
  description: string
  heroImage?: string // Atraktivní fotka hřiště
  holesDetail: Hole[]
}

export interface Tournament {
  id: string
  title: string
  date: Date
  type: 'medal' | 'stableford' | 'scramble'
  entryFee: number
  participants: number
  maxParticipants: number
  description: string
  registrationDeadline: Date
}

export interface Membership {
  id: string
  name: string
  entryFee: number // Vstupní poplatek včetně ročního poplatku
  annualFee: number // Roční poplatek (v prvním roce již neplatíte)
  benefits: string[]
  description?: string
}

export interface TeeTime {
  id: string
  date: Date
  time: string
  holes: 9 | 18
  availableSlots: number
  price: number
  courseId: string
}

export interface Service {
  id: string
  name: string
  description: string
  price?: string
  openingHours: string
  images: string[]
}

export interface ClubHistory {
  year: number
  event: string
  description: string
  image?: string
}

export interface Testimonial {
  id: string
  name: string
  role?: string
  quote: string
  rating: number
  image?: string
}

export interface Partner {
  id: string
  name: string
  logo: string
  website?: string
}

export interface ClubLeader {
  id: string
  name: string
  position: string
  image?: string
  bio?: string
}

export interface NewsItem {
  id: string
  title: string
  date: Date
  excerpt: string
  content?: string
  image?: string // Pro zpětnou kompatibilitu
  images?: string[] // Až 3 fotky
  category?: string
  author?: string
  membersOnly?: boolean // Pouze pro členy
}

