import { Tournament } from './types'

export const tournaments: Tournament[] = [
  {
    id: '1',
    title: 'Jarní mistrovství klubu',
    date: new Date('2024-04-15'),
    type: 'medal',
    entryFee: 1500,
    participants: 45,
    maxParticipants: 80,
    description: 'Tradiční jarní turnaj pro všechny členy klubu. Medal play formát.',
    registrationDeadline: new Date('2024-04-10'),
  },
  {
    id: '2',
    title: 'Léto Stableford',
    date: new Date('2024-06-20'),
    type: 'stableford',
    entryFee: 1200,
    participants: 32,
    maxParticipants: 60,
    description: 'Letní turnaj ve Stableford formátu. Ideální pro všechny úrovně hráčů.',
    registrationDeadline: new Date('2024-06-15'),
  },
  {
    id: '3',
    title: 'Scramble pro páry',
    date: new Date('2024-07-10'),
    type: 'scramble',
    entryFee: 2000,
    participants: 20,
    maxParticipants: 40,
    description: 'Zábavný turnaj pro páry ve Scramble formátu. Ideální pro společenskou hru.',
    registrationDeadline: new Date('2024-07-05'),
  },
  {
    id: '4',
    title: 'Podzimní mistrovství',
    date: new Date('2024-09-15'),
    type: 'medal',
    entryFee: 1500,
    participants: 0,
    maxParticipants: 80,
    description: 'Vrcholný turnaj sezóny. Medal play formát s cenami pro vítěze.',
    registrationDeadline: new Date('2024-09-10'),
  },
]

