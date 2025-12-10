export interface CourseInfo {
  scoreCard?: {
    title: string
    description?: string
    pdfUrl?: string
    imageUrl?: string
    playingHandicap?: {
      title: string
      description: string
    }
  }
  localRules?: {
    title: string
    rules: Array<{
      title: string
      content: string
    }>
  }
  operatingRules?: {
    title: string
    rules: Array<{
      title: string
      content: string
    }>
    pdfUrl?: string
  }
  interestingFacts?: {
    title: string
    description?: string
    images: string[]
  }
}

export const courseInfo: CourseInfo = {
  scoreCard: {
    title: 'Score card a hrací HCP',
    description: 'Zde naleznete score card hřiště a informace o hracím handicapu.',
    playingHandicap: {
      title: 'Hrací HCP',
      description: 'Hrací handicap se počítá na základě vašeho Course Handicap a Slope Rating hřiště. Pro výpočet hracího handicapu použijte oficiální kalkulačku nebo se obraťte na pro shop.',
    },
  },
  localRules: {
    title: 'Místní pravidla',
    rules: [
      {
        title: 'Out of bounds',
        content: 'Míč je out of bounds, pokud leží za bílými kolíky nebo za plotem. Penalty: stroke and distance.',
      },
      {
        title: 'Water hazards',
        content: 'Vodní překážky jsou označeny žlutými nebo červenými kolíky. Respektujte pravidla pro vodní překážky podle R&A Rules of Golf.',
      },
      {
        title: 'Ground under repair',
        content: 'Označené plochy jsou považovány za ground under repair. Míč lze bez penalty přesunout do nejbližšího místa úlevy.',
      },
      {
        title: 'Immovable obstructions',
        content: 'Cesty, ploty a další nemovité překážky jsou považovány za immovable obstructions. Míč lze bez penalty přesunout.',
      },
      {
        title: 'Dress code',
        content: 'Na hřišti je vyžadováno golfové oblečení. Dlouhé kalhoty nebo šortky, golfová košile s límečkem.',
      },
      {
        title: 'Pace of play',
        content: 'Dodržujte tempo hry. Standardní doba hry je 4 hodiny pro 18 jamky. Pokud ztrácíte kontakt s předchozí skupinou, umožněte rychlejším skupinám předjet.',
      },
    ],
  },
  operatingRules: {
    title: 'Provozní řád',
    rules: [
      {
        title: 'Otevírací doba',
        content: 'Hřiště je otevřeno denně od 7:00 do setmění. V zimních měsících může být provoz omezen kvůli počasí.',
      },
      {
        title: 'Rezervace tee time',
        content: 'Tee time je nutné rezervovat předem. Rezervace lze provést online, telefonicky nebo osobně v pro shopu.',
      },
      {
        title: 'Bezpečnost',
        content: 'Při hře dodržujte bezpečnostní pravidla. Před úderem se ujistěte, že v dosahu vašeho míče není žádný hráč.',
      },
      {
        title: 'Údržba hřiště',
        content: 'Opravte pitch marky na greenu, vraťte divots a vyrovnejte bunkery po hře. Pomozte nám udržet hřiště v dobrém stavu.',
      },
      {
        title: 'Vozíky',
        content: 'Vozíky jsou k dispozici k zapůjčení. Respektujte pokyny pro použití vozíků a nejezděte na zakázaná místa.',
      },
      {
        title: 'Etiketa',
        content: 'Respektujte ostatní hráče, dodržujte ticho při hře a nechte rychlejší skupiny předjet.',
      },
    ],
  },
  interestingFacts: {
    title: 'Zajímavosti',
    description: 'Hřiště se neustále vyvíjí a zlepšuje. Podívejte se, jak se hřiště změnilo v průběhu let a jak vypadá z ptačí perspektivy.',
    images: [
      // Historické fotky
      '/historie/34350.jpeg',
      '/historie/album-1-lisnice-005-a.jpeg',
      '/historie/album-2-lisnice-056-a.jpeg',
      '/historie/album-2-lisnice-062-a.jpeg',
      '/historie/hanno-tonder.jpeg',
      // Fotky z dronu
      '/gkl fotografie doplneni/hriste z dronu1.jpeg',
      '/gkl fotografie doplneni/hriste z dronu2.jpeg',
      '/gkl fotografie doplneni/hriste z dronu3.jpeg',
      '/gkl fotografie doplneni/hriste z dronu4.jpeg',
      '/gkl fotografie doplneni/hriste z dronu5.jpeg',
      '/gkl fotografie doplneni/hriste z dronu6.jpeg',
      '/gkl fotografie doplneni/hriste z dronu7.jpeg',
      '/gkl fotografie doplneni/hriste z dronu8.jpeg',
      '/gkl fotografie doplneni/hriste z dronu9.jpeg',
      '/gkl fotografie doplneni/hriste z dronu10.jpeg',
      '/gkl fotografie doplneni/hriste z dronu11.jpeg',
    ],
  },
}

