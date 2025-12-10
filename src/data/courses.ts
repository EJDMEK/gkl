import { Course } from './types'

export const courses: Course[] = [
  {
    id: 'championship',
    name: 'Championship hřiště',
    holes: 18,
    par: 72,
    length: 6200,
    rating: 72.5,
    slope: 135,
    description: '18jamkové hřiště s výjimečným výhledem na okolní krajinu. Náročné hřiště pro zkušené hráče.',
    heroImage: '/gkl fotografie doplneni/hriste z dronu1.jpeg',
    holesDetail: [
      { 
        number: 1, 
        par: 4, 
        length: 380, 
        handicap: 7,
        name: 'JAMKA ZAKLADATELŮ',
        description: 'Jamka je věnována dvanácti zakládajícím členům Golfového klubu Líšnice. Těchto 12 zakládajících členů založilo dne 21. 11. 1928 v bytě Adolfa Hoffmeistera ve Spálené ul. č. 82/4 Golfový klub Líšnice. Zakládajícími členy byli: Jaroslav O. Franta, Richard Hampl, Ladislav Haškovec, Jaroslav Hilbert, Adolf Hoffmeister, Jiří Chvojka, Karel Mikšíček, Prokop Sedlák, Vladimír Sedlák, Karel Vaněk, Ludvík Vaněk a Karel Vávra. Prvním prezidentem klubu byl zvolen Karel Vávra, který tuto funkci vykonával jeden rok. V pořadí druhým prezidentem GKL byl JUDr. Ferdinand Tonder, který také vykonával prezidentskou funkci jeden rok.',
        planImage: '/courses/jamka-1.png', // Plán jamky - hlavní, velký
        images: [
          '/courses/jamka 1.jpg',
          '/courses/jamka 1 (2).jpg', 
          '/courses/jamka 1 (3).jpg'
        ],
        historicalImages: [
          '/historie/album-1-lisnice-005-a.jpeg',
          '/historie/album-2-lisnice-056-a.jpeg'
        ],
        holeNumber9: 1, // Jamka 1 devítky
        holeNumber18: 1, // Jamka 1 osmnáctky
      },
      { 
        number: 2, 
        par: 5, 
        length: 520, 
        handicap: 13,
        cedulePdf: '/courses/cedule/2025-002R-JAMKA_790x520_v2_preview.pdf',
        holeNumber9: 2,
        holeNumber18: 2,
      },
      { 
        number: 3, 
        par: 3, 
        length: 165, 
        handicap: 17,
        cedulePdf: '/courses/cedule/2025-003L-JAMKA_790x520_v2_preview.pdf',
        holeNumber9: 3,
        holeNumber18: 3,
      },
      { 
        number: 4, 
        par: 4, 
        length: 410, 
        handicap: 3,
        cedulePdf: '/courses/cedule/2025-004L-JAMKA_790x520_v2_preview.pdf',
        holeNumber9: 4,
        holeNumber18: 4,
      },
      { 
        number: 5, 
        par: 4, 
        length: 395, 
        handicap: 11,
        cedulePdf: '/courses/cedule/2025-005R-JAMKA_790x520_v2_preview.pdf',
        images: [
          '/gkl fotografie doplneni/jamka 5.jpeg'
        ],
        holeNumber9: 5,
        holeNumber18: 5,
      },
      { 
        number: 6, 
        par: 5, 
        length: 545, 
        handicap: 1,
        cedulePdf: '/courses/cedule/2025-006L_PAR4-JAMKA_790x520_v2_preview.pdf',
        images: [
          '/gkl fotografie doplneni/jamka č6.jpeg'
        ],
        holeNumber9: 6,
        holeNumber18: 6,
      },
      { 
        number: 7, 
        par: 3, 
        length: 180, 
        handicap: 15,
        cedulePdf: '/courses/cedule/2025-007L-JAMKA_790x520_v2_preview.pdf',
        images: [
          '/gkl fotografie doplneni/jamka 7.jpeg'
        ],
        holeNumber9: 7,
        holeNumber18: 7,
      },
      { 
        number: 8, 
        par: 4, 
        length: 425, 
        handicap: 5,
        cedulePdf: '/courses/cedule/2025-008L-JAMKA_790x520_v2_preview.pdf',
        images: [
          '/gkl fotografie doplneni/jamka 8.jpeg'
        ],
        holeNumber9: 8,
        holeNumber18: 8,
      },
      { 
        number: 9, 
        par: 4, 
        length: 400, 
        handicap: 9,
        cedulePdf: '/courses/cedule/2025-009L-JAMKA_790x520_v2_preview.pdf',
        images: [
          '/gkl fotografie doplneni/jamka 9.jpeg'
        ],
        holeNumber9: 9,
        holeNumber18: 9,
      },
      { 
        number: 10, 
        par: 4, 
        length: 390, 
        handicap: 8,
        holeNumber18: 10,
      },
      { 
        number: 11, 
        par: 5, 
        length: 530, 
        handicap: 12,
        holeNumber18: 11,
      },
      { 
        number: 12, 
        par: 3, 
        length: 170, 
        handicap: 18,
        holeNumber18: 12,
      },
      { 
        number: 13, 
        par: 4, 
        length: 415, 
        handicap: 4,
        holeNumber18: 13,
      },
      { 
        number: 14, 
        par: 4, 
        length: 405, 
        handicap: 10,
        holeNumber18: 14,
      },
      { 
        number: 15, 
        par: 5, 
        length: 550, 
        handicap: 2,
        holeNumber18: 15,
      },
      { 
        number: 16, 
        par: 3, 
        length: 175, 
        handicap: 16,
        holeNumber18: 16,
      },
      { 
        number: 17, 
        par: 4, 
        length: 430, 
        handicap: 6,
        holeNumber18: 17,
      },
      { 
        number: 18, 
        par: 4, 
        length: 420, 
        handicap: 14,
        holeNumber18: 18,
      },
    ],
  },
  {
    id: 'executive',
    name: 'Executive hřiště',
    holes: 9,
    par: 36,
    length: 2800,
    rating: 35.2,
    slope: 120,
    description: '9jamkové hřiště ideální pro rychlé kolo nebo trénink. Vhodné pro začátečníky i pokročilé hráče.',
    holesDetail: [
      { number: 1, par: 4, length: 320, handicap: 5 },
      { number: 2, par: 3, length: 150, handicap: 9 },
      { number: 3, par: 4, length: 340, handicap: 3 },
      { number: 4, par: 5, length: 480, handicap: 1 },
      { number: 5, par: 4, length: 310, handicap: 7 },
      { number: 6, par: 3, length: 140, handicap: 8 },
      { number: 7, par: 4, length: 330, handicap: 4 },
      { number: 8, par: 4, length: 350, handicap: 2 },
      { number: 9, par: 3, length: 160, handicap: 6 },
    ],
  },
]

