import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import { useAuth } from '../hooks/useAuth'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import { memberDocuments, documentCategories, MemberDocument } from '../data/memberDocuments'
import { FiFileText, FiDownload, FiLogOut, FiLock, FiCalendar } from 'react-icons/fi'

const MembersSectionPage: React.FC = () => {
  const { language } = useI18n()
  const { isAuthenticated, user, logout } = useAuth()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Pokud není přihlášen, přesměrovat na login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  const getPath = (path: string) => {
    return `/${language === 'cs' ? 'cs' : 'en'}${path}`
  }

  const filteredDocuments = selectedCategory
    ? memberDocuments.filter(doc => doc.category === selectedCategory)
    : memberDocuments

  const groupedByCategory = filteredDocuments.reduce((acc, doc) => {
    if (!acc[doc.category]) {
      acc[doc.category] = []
    }
    acc[doc.category].push(doc)
    return acc
  }, {} as Record<string, MemberDocument[]>)

  const handleLogout = () => {
    logout()
    window.location.href = getPath('')
  }

  const handleDownload = (doc: MemberDocument) => {
    // V produkci by se zde stahoval skutečný soubor
    // Pro demo zobrazíme alert
    alert(`Stahování dokumentu: ${doc.title}\n\nV produkci by se zde stáhl soubor z: ${doc.fileUrl}`)
  }

  return (
    <div>
      {/* Hero Title */}
      <PageHero 
        title="Členská sekce"
        backgroundImage="/gkl fotografie doplneni/hriste z dronu3.jpeg"
      />

      {/* Welcome Card */}
      <Section className="bg-neutral-cream/70 py-6">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20 mb-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl md:text-2xl font-heading font-semibold text-primary-dark mb-2">
                  Vítejte v členské sekci
                </h2>
                <p className="text-neutral-dark">
                  Přihlášen jako: <span className="font-semibold text-primary">{user?.email}</span>
                  {user?.name && <span className="ml-2">({user.name})</span>}
                </p>
              </div>
              <Button variant="tertiary" onClick={handleLogout} icon={<FiLogOut />}>
                Odhlásit se
              </Button>
            </div>
          </Card>

          {/* Security Notice */}
          <Card className="mb-6 border-l-4 border-secondary">
            <div className="flex items-start gap-3">
              <FiLock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-primary-dark mb-1">Interní dokumenty</h3>
                <p className="text-sm text-neutral-dark">
                  Tyto dokumenty jsou určeny pouze pro členy klubu. Prosíme o jejich důvěrné zacházení.
                </p>
              </div>
            </div>
          </Card>

          {/* Category Filter */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === null
                    ? 'bg-primary text-white'
                    : 'bg-neutral-light text-neutral-dark hover:bg-primary/10'
                }`}
              >
                Všechny dokumenty
              </button>
              {Object.entries(documentCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                    selectedCategory === key
                      ? 'bg-primary text-white'
                      : 'bg-neutral-light text-neutral-dark hover:bg-primary/10'
                  }`}
                >
                  <span>{category.icon}</span>
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Documents by Category */}
          <div className="space-y-8">
            {Object.entries(groupedByCategory).map(([categoryKey, docs]) => {
              const category = documentCategories[categoryKey as keyof typeof documentCategories]
              return (
                <div key={categoryKey}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h2 className="text-2xl font-display font-bold text-primary-dark">
                      {category.title}
                    </h2>
                    <span className="text-neutral-dark">({docs.length})</span>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {docs.map((doc) => (
                      <Card key={doc.id} className="hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-start gap-3 mb-2">
                              <FiFileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                              <div className="flex-1">
                                <h3 className="font-heading font-semibold text-primary-dark mb-1">
                                  {doc.title}
                                </h3>
                                <div className="flex items-center gap-2 text-sm text-neutral-dark mb-2">
                                  <FiCalendar className="w-4 h-4" />
                                  <span>{doc.date}</span>
                                </div>
                                {doc.description && (
                                  <p className="text-sm text-neutral-dark mb-3">
                                    {doc.description}
                                  </p>
                                )}
                              </div>
                            </div>
                            <Button
                              variant="tertiary"
                              size="sm"
                              onClick={() => handleDownload(doc)}
                              icon={<FiDownload />}
                            >
                              Stáhnout PDF
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {filteredDocuments.length === 0 && (
            <Card className="text-center py-12">
              <p className="text-neutral-dark">
                V této kategorii nejsou žádné dokumenty.
              </p>
            </Card>
          )}
        </div>
      </Section>
    </div>
  )
}

export default MembersSectionPage

