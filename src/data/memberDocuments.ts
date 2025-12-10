// Dokumenty pro členskou sekci
export interface MemberDocument {
  id: string
  title: string
  category: 'zapisy-vyboru' | 'usneseni-schuzi' | 'stanovy'
  date: string
  fileUrl: string
  description?: string
}

export const memberDocuments: MemberDocument[] = [
  // Zápisy z výboru
  {
    id: 'zapis-vybor-2025-01',
    title: 'Zápis z výboru - leden 2025',
    category: 'zapisy-vyboru',
    date: '15.1.2025',
    fileUrl: '/documents/zapis-vybor-2025-01.pdf',
    description: 'Zápis z jednání výboru klubu konaného dne 15. ledna 2025'
  },
  {
    id: 'zapis-vybor-2024-12',
    title: 'Zápis z výboru - prosinec 2024',
    category: 'zapisy-vyboru',
    date: '10.12.2024',
    fileUrl: '/documents/zapis-vybor-2024-12.pdf',
    description: 'Zápis z jednání výboru klubu konaného dne 10. prosince 2024'
  },
  {
    id: 'zapis-vybor-2024-11',
    title: 'Zápis z výboru - listopad 2024',
    category: 'zapisy-vyboru',
    date: '12.11.2024',
    fileUrl: '/documents/zapis-vybor-2024-11.pdf',
    description: 'Zápis z jednání výboru klubu konaného dne 12. listopadu 2024'
  },
  
  // Usnesení členských schůzí
  {
    id: 'usneseni-schuze-2024',
    title: 'Usnesení členské schůze 2024',
    category: 'usneseni-schuzi',
    date: '20.12.2024',
    fileUrl: '/documents/usneseni-schuze-2024.pdf',
    description: 'Usnesení z valné hromady konané dne 20. prosince 2024'
  },
  {
    id: 'usneseni-schuze-2023',
    title: 'Usnesení členské schůze 2023',
    category: 'usneseni-schuzi',
    date: '15.12.2023',
    fileUrl: '/documents/usneseni-schuze-2023.pdf',
    description: 'Usnesení z valné hromady konané dne 15. prosince 2023'
  },
  
  // Stanovy
  {
    id: 'stanovy-2024',
    title: 'Stanovy Golfového klubu Líšnice',
    category: 'stanovy',
    date: '1.1.2024',
    fileUrl: '/documents/stanovy-2024.pdf',
    description: 'Aktuální stanovy klubu platné od 1. ledna 2024'
  },
  {
    id: 'stanovy-puvodni',
    title: 'Stanovy - původní verze',
    category: 'stanovy',
    date: '1.1.2020',
    fileUrl: '/documents/stanovy-puvodni.pdf',
    description: 'Původní stanovy klubu'
  }
]

// Kategorie dokumentů
export const documentCategories = {
  'zapisy-vyboru': {
    title: 'Zápisy z výboru',
    icon: '📋'
  },
  'usneseni-schuzi': {
    title: 'Usnesení členských schůzí',
    icon: '📝'
  },
  'stanovy': {
    title: 'Stanovy',
    icon: '📜'
  }
}

