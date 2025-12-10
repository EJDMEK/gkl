// Databáze členů - pouze emaily, které mají přístup k členské sekci
export interface Member {
  email: string
  password: string // V produkci by mělo být hashované
  name?: string
}

// Testovací přístupové údaje
export const members: Member[] = [
  {
    email: 'test@gkl.cz',
    password: 'test123',
    name: 'Testovací člen'
  },
  {
    email: 'clen@gkl.cz',
    password: 'clen2025',
    name: 'Člen klubu'
  },
  {
    email: 'admin@gkl.cz',
    password: 'admin123',
    name: 'Administrátor'
  }
]

// Funkce pro ověření člena
export const verifyMember = (email: string, password: string): Member | null => {
  const member = members.find(m => m.email.toLowerCase() === email.toLowerCase() && m.password === password)
  return member || null
}

// Funkce pro kontrolu, zda je email v databázi
export const isMemberEmail = (email: string): boolean => {
  return members.some(m => m.email.toLowerCase() === email.toLowerCase())
}

