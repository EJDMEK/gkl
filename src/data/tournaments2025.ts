export interface Tournament2025 {
  id: string
  date: string
  day: string
  name: string
  type: 'otevřený' | 'uzavřený' | 'klubový'
  time: string
  month: string
  description?: string
  images?: string[]
  results?: {
    winners?: Array<{ name: string; score: string; category?: string }>
    fullResults?: string // URL nebo text s výsledky
  }
  registrationLink?: string
  entryFee?: number
  format?: string
}

export const tournaments2025: Tournament2025[] = [
  // Duben
  { id: 'texas-scramble-duben', date: '19.4.', day: 'so', name: 'Texas scramble dvojic - zahájení turnajové sezóny', type: 'otevřený', time: 'canon 9:00', month: 'duben', format: 'Texas Scramble dvojic' },
  
  // Květen
  { id: 'jarni-stableford', date: '3.5.', day: 'so', name: 'Jarní stableford', type: 'otevřený', time: 'postupný od 9:00', month: 'květen', format: 'Stableford' },
  { id: 'tour-jaro-seniori', date: '5.5.', day: 'po', name: 'Tour 2025 Jaro - senioři (Vojtíšek)', type: 'uzavřený', time: 'postupný od 8:00', month: 'květen' },
  { id: 'tt-tb-senior-tour', date: '7.5.', day: 'st', name: 'TT&TB senior tour', type: 'otevřený', time: 'postupný od 8:30', month: 'květen' },
  { id: 'ohk-pribram', date: '14.5.', day: 'st', name: 'OHK Příbram', type: 'uzavřený', time: 'postupný od 9:00', month: 'květen' },
  { id: 'rtm-zapad-mladez', date: '17.5.', day: 'so', name: 'RTM západ B - turnaj mládeže', type: 'otevřený', time: 'postupný/celý den', month: 'květen' },
  
  // Červen
  { id: 'tour-seniori-cerven', date: '3.6.', day: 'út', name: 'Tour 2025 - senioři (Vojtíšek)', type: 'uzavřený', time: 'postupný od 9:00', month: 'červen' },
  { id: 'memorial-hanno-tonder', date: '7.6.', day: 'so', name: 'Memoriál Hanno Tondera XXXII.ročník', type: 'otevřený', time: 'postupný od 9:00', month: 'červen', format: 'Medal Play', description: 'Tradiční turnaj na počest zakládajícího člena klubu Hanno Tondera.', images: ['/historie/hanno-tonder.jpeg'] },
  { id: 'texas-scramble-cerven', date: '21.6.', day: 'so', name: 'Texas scramble dvojic - 97 let klubu aneb trénujeme na 100 - 9 jamek', type: 'otevřený', time: 'canon 8:30', month: 'červen', format: 'Texas Scramble dvojic' },
  
  // Červenec
  { id: 'texas-scramble-tymu', date: '19.7.', day: 'so', name: 'Texas scramble týmů', type: 'otevřený', time: 'canon 8:30', month: 'červenec', format: 'Texas Scramble týmů' },
  
  // Srpen
  { id: 'nocnik', date: '1.8.', day: 'pá', name: 'Nočník - foursome dvojic losovaný - 9 jamek', type: 'otevřený', time: 'canon 20:00', month: 'srpen', format: 'Foursome dvojic' },
  { id: 'prazdninova-tour', date: '12.8.', day: 'út', name: 'Prázdninová tour 2025 - senioři (Vojtíšek)', type: 'uzavřený', time: '', month: 'srpen' },
  { id: 'pohar-lisnice', date: '30.8.', day: 'so', name: 'Pohár Líšnice XXXVI.ročník', type: 'otevřený', time: 'postupný od 9:00', month: 'srpen', format: 'Medal Play', description: 'Prestižní turnaj s dlouholetou tradicí.' },
  
  // Září
  { id: 'mistrovstvi-rany-1', date: '20.9.', day: 'so', name: 'Mistrovství klubu na rány', type: 'klubový', time: 'postupný od 9:00', month: 'září', format: 'Medal Play' },
  { id: 'mistrovstvi-rany-2', date: '21.9.', day: 'ne', name: 'Mistrovství klubu na rány', type: 'klubový', time: 'postupný od 9:00', month: 'září', format: 'Medal Play' },
  { id: 'podzimni-stableford', date: '27.9.', day: 'so', name: 'Poidzimní stableford', type: 'otevřený', time: 'postupný od 9:00', month: 'září', format: 'Stableford' },
  
  // Říjen
  { id: 'jt-banka', date: '2.10.', day: 'čt', name: 'J&T banka', type: 'uzavřený', time: 'canon 10:00', month: 'říjen' },
  { id: 'mistrovstvi-jamky-1', date: '4.10.', day: 'so', name: 'Mistrovství klubu na jamky', type: 'klubový', time: 'pavouk od 9:00', month: 'říjen', format: 'Match Play' },
  { id: 'mistrovstvi-jamky-2', date: '5.10.', day: 'ne', name: 'Mistrovství klubu na jamky', type: 'klubový', time: 'pavouk od 9:00', month: 'říjen', format: 'Match Play' },
  { id: 'tour-podzim-seniori', date: '16.10.', day: 'čt', name: 'Tour 2025 Podzim - senioři (Vojtíšek)', type: 'uzavřený', time: 'postupný od 9:00', month: 'říjen' },
  { id: 'lisnicky-foursome', date: '18.10.', day: 'so', name: 'Líšnický foursome', type: 'otevřený', time: 'canon 9:00', month: 'říjen', format: 'Foursome' },
  { id: 'republikovy-texas', date: '28.10.', day: 'út', name: 'Republikový - Texas scramble dvojic - 9 jamek', type: 'otevřený', time: 'canon 9:30', month: 'říjen', format: 'Texas Scramble dvojic' },
  
  // Listopad
  { id: 'memorial-vozkove', date: '1.11.', day: 'so', name: 'Memoriál Jáji Vozkové 5.ročník - 9 jamek', type: 'otevřený', time: 'dle přihl. 10:00', month: 'listopad', format: 'Texas Scramble dvojic' },
  { id: 'martinska-husa', date: '9.11.', day: 'ne', name: 'Martinská husa - Texas scramble dvojic - 9 jamek', type: 'otevřený', time: 'canon 10:00', month: 'listopad', format: 'Texas Scramble dvojic' },
]

export const regularEvents = [
  {
    name: 'Pravidelné seniorské středeční devítky',
    period: 'od 23.4.',
    time: 'postupně od 11:00',
    last: 'poslední seniorská devítka 12.11.',
  },
  {
    name: 'Pravidelné HCP čtvrtky na 9 jamek',
    period: 'od 24.4.',
    time: 'postupně od 16:00',
    last: 'poslední HCP s vyhlášením celoroční soutěže 23.10.',
  },
  {
    name: 'Prázdninové HCP úterý pro mládež',
    period: 'od 1.7.do 26.8.',
    time: 'postupně od 16:00',
    last: '',
  },
  {
    name: 'Soustředění mládeže Ještěd 2025',
    period: '24.8. - 29.8.2025',
    time: '',
    last: '',
  },
]

