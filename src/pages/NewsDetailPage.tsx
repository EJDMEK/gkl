import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import { useAuth } from '../hooks/useAuth'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import { news } from '../data/news'
import { FiArrowRight } from 'react-icons/fi'

const NewsDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const { language } = useI18n()
  const { isAuthenticated } = useAuth()

  const newsItem = news.find(item => item.id === id)

  // Pokud je aktualita pouze pro členy a uživatel není přihlášen, přesměrovat
  if (newsItem && newsItem.membersOnly && !isAuthenticated) {
    return <Navigate to={language === 'cs' ? '/cs/aktuality' : '/en/news'} replace />
  }

  if (!newsItem) {
    return (
      <div>
        <Section className="bg-neutral-cream/70 pt-32 pb-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl font-display font-bold text-primary-dark mb-4">
              Aktualita nenalezena
            </h1>
            <Link to={language === 'cs' ? '/cs/aktuality' : '/en/news'}>
              <Button variant="primary">Zpět na aktuality</Button>
            </Link>
          </div>
        </Section>
      </div>
    )
  }

  return (
    <div>
      {/* Hero Title */}
      <PageHero 
        title={newsItem.title}
        backgroundImage="/gkl fotografie doplneni/hriste z dronu8.jpeg"
      />

      {/* News Detail */}
      <Section className="bg-neutral-cream/70">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Link to={language === 'cs' ? '/cs/aktuality' : '/en/news'}>
              <Button variant="tertiary" size="sm" className="mb-6">
                ← Zpět na aktuality
              </Button>
            </Link>
          </div>

          <Card>
            <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-neutral-light">
              <div className="flex items-center gap-2">
                {newsItem.category && (
                  <span className="px-3 py-1 bg-primary-light text-white text-xs font-medium rounded-full">
                    {newsItem.category}
                  </span>
                )}
                {newsItem.membersOnly && (
                  <span className="px-3 py-1 bg-secondary text-white text-xs font-medium rounded-full">
                    {language === 'cs' ? 'Pouze členové' : 'Members only'}
                  </span>
                )}
              </div>
              <div className="text-sm text-secondary font-medium">
                {newsItem.date.toLocaleDateString(language === 'cs' ? 'cs-CZ' : 'en-US', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </div>
              {newsItem.author && (
                <div className="text-sm text-neutral-dark">
                  Autor: {newsItem.author}
                </div>
              )}
            </div>

            {/* Zobrazit až 3 fotky */}
            {(newsItem.images && newsItem.images.length > 0) ? (
              <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {newsItem.images.slice(0, 3).map((image, idx) => (
                  <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={image} 
                      alt={`${newsItem.title} - ${idx + 1}`}
                      className="w-full h-48 object-cover hover:scale-[1.02] transition-transform duration-500 ease-out"
                    />
                  </div>
                ))}
              </div>
            ) : newsItem.image ? (
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src={newsItem.image} 
                  alt={newsItem.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : null}

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-dark mb-4 leading-relaxed">
                {newsItem.excerpt}
              </p>
              
              {newsItem.content && (
                <div className="text-neutral-dark leading-relaxed whitespace-pre-line">
                  {newsItem.content}
                </div>
              )}
            </div>
          </Card>

          {/* Related News */}
          <div className="mt-12">
            <h2 className="text-2xl font-display font-bold text-primary-dark mb-6">
              Další aktuality
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {news
                .filter(item => item.id !== id)
                .slice(0, 2)
                .map((item) => (
                  <Card key={item.id} className="hover:shadow-xl transition-shadow">
                    {item.category && (
                      <div className="mb-3">
                        <span className="px-3 py-1 bg-primary-light text-white text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>
                    )}
                    <div className="text-sm text-secondary font-medium mb-2">
                      {item.date.toLocaleDateString(language === 'cs' ? 'cs-CZ' : 'en-US', { 
                        day: 'numeric', 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-primary-dark mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-dark mb-4 line-clamp-2">
                      {item.excerpt}
                    </p>
                    <Link to={language === 'cs' ? `/cs/aktuality/${item.id}` : `/en/news/${item.id}`}>
                      <Button variant="tertiary" size="sm" className="self-start" icon={<FiArrowRight />} iconPosition="right">
                        {language === 'cs' ? 'Číst více' : 'Read more'}
                      </Button>
                    </Link>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default NewsDetailPage

