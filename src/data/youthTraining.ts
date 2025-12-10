export interface YouthTraining {
  id: string
  title: string
  description: string
  ageGroup: string
  duration: string
  price: string
  includes: string[]
  schedule?: string
  contact?: {
    name: string
    phone: string
  }
}

export const youthTrainings: YouthTraining[] = [
  {
    id: 'kids-beginners',
    title: 'Začátečnický kurz pro děti',
    description: 'Základní kurz golfu pro děti, které s golfem začínají. Hravou formou se naučí základy golfu.',
    ageGroup: '6-12 let',
    duration: '10 lekcí po 60 minutách',
    price: '2.500,- Kč',
    includes: [
      '10 lekcí s trenérem',
      'zapůjčení golfových holí',
      'vstup na tréninkové plochy',
      'golfové míčky',
      'základy golfové etikety',
    ],
    schedule: 'Každou sobotu 10:00 - 11:00',
    contact: {
      name: 'Monika Vaňásek Hodinová',
      phone: '777 221 967',
    },
  },
  {
    id: 'youth-advanced',
    title: 'Pokročilý kurz pro mládež',
    description: 'Kurz pro mladé hráče, kteří už mají základy a chtějí se zdokonalit. Zaměření na techniku a taktiku hry.',
    ageGroup: '13-18 let',
    duration: '12 lekcí po 90 minutách',
    price: '3.500,- Kč',
    includes: [
      '12 lekcí s trenérem',
      'zapůjčení golfových holí',
      'vstup na tréninkové plochy',
      'golfové míčky',
      'trénink na hřišti',
      'základy pravidel golfu',
    ],
    schedule: 'Každou sobotu 14:00 - 15:30',
    contact: {
      name: 'Monika Vaňásek Hodinová',
      phone: '777 221 967',
    },
  },
  {
    id: 'kids-summer-camp',
    title: 'Letní golfový tábor',
    description: 'Týdenní intenzivní golfový tábor pro děti. Kombinace tréninku, her a zábavy.',
    ageGroup: '8-15 let',
    duration: '5 dní (pondělí - pátek)',
    price: '4.500,- Kč',
    includes: [
      '5 dní intenzivního tréninku',
      'zapůjčení golfových holí',
      'vstup na tréninkové plochy a hřiště',
      'golfové míčky',
      'obědy',
      'certifikát o absolvování',
    ],
    schedule: 'Letní prázdniny - termíny budou upřesněny',
    contact: {
      name: 'Monika Vaňásek Hodinová',
      phone: '777 221 967',
    },
  },
  {
    id: 'youth-competition',
    title: 'Příprava na soutěže',
    description: 'Specializovaný kurz pro mladé hráče, kteří se chtějí připravit na juniorské soutěže.',
    ageGroup: '14-18 let',
    duration: 'Individuální plán',
    price: 'Individuální cena',
    includes: [
      'individuální tréninkový plán',
      'trénink techniky',
      'mentální příprava',
      'pravidla a etiketa',
      'příprava na turnaje',
    ],
    schedule: 'Podle individuální domluvy',
    contact: {
      name: 'Monika Vaňásek Hodinová',
      phone: '777 221 967',
    },
  },
]

