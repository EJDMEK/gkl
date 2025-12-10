import { Membership } from './types'

export const memberships: Membership[] = [
  {
    id: 'adult',
    name: 'Nový člen - dospělý',
    entryFee: 15000,
    annualFee: 9000,
    benefits: [
      'Celoroční neomezená hra na hřišti v Líšnici',
      'Registrace v ČGF',
      'Zvýhodněná cena míčů na drivingu',
      'Hra Vašich hostů za zvýhodněné ceny',
      'Slevy na partnerských hřištích',
    ],
  },
  {
    id: 'couple',
    name: 'Dvojice',
    entryFee: 25000,
    annualFee: 17000,
    benefits: [
      'Celoroční neomezená hra na hřišti v Líšnici',
      'Registrace v ČGF',
      'Zvýhodněná cena míčů na drivingu',
      'Hra Vašich hostů za zvýhodněné ceny',
      'Slevy na partnerských hřištích',
    ],
    description: 'Pro 2 osoby žijící ve společné domácnosti',
  },
  {
    id: 'family',
    name: 'Rodina',
    entryFee: 30000,
    annualFee: 21000,
    benefits: [
      'Celoroční neomezená hra na hřišti v Líšnici',
      'Registrace v ČGF',
      'Zvýhodněná cena míčů na drivingu',
      'Hra Vašich hostů za zvýhodněné ceny',
      'Slevy na partnerských hřištích',
    ],
    description: '2 dospělí + 2 děti do 18 let',
  },
  {
    id: 'senior',
    name: 'Senior 65+',
    entryFee: 15000,
    annualFee: 6500,
    benefits: [
      'Celoroční neomezená hra na hřišti v Líšnici',
      'Registrace v ČGF',
      'Zvýhodněná cena míčů na drivingu',
      'Hra Vašich hostů za zvýhodněné ceny',
      'Slevy na partnerských hřištích',
    ],
  },
  {
    id: 'youth-under-13',
    name: 'Mládež do 13 let',
    entryFee: 3500,
    annualFee: 3500,
    benefits: [
      'Celoroční neomezená hra na hřišti v Líšnici',
      'Registrace v ČGF',
      'Zvýhodněná cena míčů na drivingu',
      'Hra Vašich hostů za zvýhodněné ceny',
      'Slevy na partnerských hřištích',
    ],
  },
  {
    id: 'youth-13-24',
    name: 'Mládež od 13–18 let (+ studenti do 24 let)',
    entryFee: 7000,
    annualFee: 5000,
    benefits: [
      'Celoroční neomezená hra na hřišti v Líšnici',
      'Registrace v ČGF',
      'Zvýhodněná cena míčů na drivingu',
      'Hra Vašich hostů za zvýhodněné ceny',
      'Slevy na partnerských hřištích',
    ],
  },
]
