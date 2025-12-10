import React, { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import { useAuth } from '../hooks/useAuth'
import Section from '../components/ui/Section'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import { news } from '../data/news'
import { FiSearch, FiCalendar, FiArrowRight, FiX, FiImage } from 'react-icons/fi'

const NewsPage: React.FC = () => {
  const { t, language } = useI18n()
  const { isAuthenticated } = useAuth()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date')

  const categories = useMemo(() => {
    const cats = Array.from(new Set(news.map(item => item.category).filter(Boolean)))
    return cats as string[]
  }, [])

  const filteredAndSortedNews = useMemo(() => {
    let filtered = news

    // Skrýt membersOnly aktuality pro nepřihlášené uživatele
    if (!isAuthenticated) {
      filtered = filtered.filter(item => !item.membersOnly)
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query) ||
        (item.content && item.content.toLowerCase().includes(query))
      )
    }

    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'date') {
        return b.date.getTime() - a.date.getTime()
      } else {
        return a.title.localeCompare(b.title, 'cs')
      }
    })

    return sorted
  }, [searchQuery, selectedCategory, sortBy, isAuthenticated])

  const getPath = (path: string) => {
    return `/${language === 'cs' ? 'cs' : 'en'}${path}`
  }

  return (
    <div>
      {/* Hero Title */}
      <PageHero 
        title={t('home.news.title')}
        backgroundImage="/gkl fotografie doplneni/hriste z dronu8.jpeg"
      />
      
      {/* Gallery Link Section */}
      <Section className="bg-neutral-cream/70 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            {/* Odkaz na fotogalerii */}
            <Link to={getPath(language === 'cs' ? '/fotogalerie' : '/gallery')}>
              <Button variant="secondary" icon={<FiImage />} iconPosition="right">
                {language === 'cs' ? 'Fotogalerie' : 'Photo Gallery'}
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Minimalistické filtry */}
      <div className="bg-neutral-cream/70 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-3">
              {/* Search */}
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Hledat..."
                  className="w-full px-4 py-2.5 pl-10 pr-10 border border-primary/20 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/30 text-neutral-dark min-h-[44px]"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-dark/50" />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-dark/50 hover:text-neutral-dark transition-colors"
                    aria-label="Clear search"
                  >
                    <FiX className="w-full h-full" />
                  </button>
                )}
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'date' | 'title')}
                  className="px-3 py-2.5 border border-primary/20 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm text-neutral-dark"
                >
                  <option value="date">Nejnovější</option>
                  <option value="title">A-Z</option>
                </select>
              </div>
            </div>

            {/* Kategorie */}
            <div className="flex flex-wrap items-center gap-2 md:gap-3">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`
                  px-4 md:px-5 py-2.5 md:py-3 
                  text-sm md:text-base 
                  font-semibold 
                  rounded-lg 
                  transition-all 
                  duration-300 
                  ease-out
                  min-h-[44px]
                  ${
                    selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg scale-[1.05] ring-2 ring-primary/30'
                      : 'bg-white/90 text-primary-dark border-2 border-primary/30 hover:border-primary hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98] shadow-sm'
                  }
                `}
              >
                Vše
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`
                    px-4 md:px-5 py-2.5 md:py-3 
                    text-sm md:text-base 
                    font-semibold 
                    rounded-lg 
                    transition-all 
                    duration-300 
                    ease-out
                    min-h-[44px]
                    ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg scale-[1.05] ring-2 ring-primary/30'
                        : 'bg-white/90 text-primary-dark border-2 border-primary/30 hover:border-primary hover:bg-primary/10 hover:scale-[1.02] active:scale-[0.98] shadow-sm'
                    }
                  `}
                >
                  {category}
                </button>
              ))}
              {filteredAndSortedNews.length > 0 && (
                <span className="ml-auto text-sm md:text-base text-neutral-dark/70 font-medium">
                  {filteredAndSortedNews.length} {filteredAndSortedNews.length === 1 ? 'aktualita' : filteredAndSortedNews.length < 5 ? 'aktuality' : 'aktualit'}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* News List */}
      <div className="bg-neutral-cream/70 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
          {filteredAndSortedNews.length === 0 ? (
            <Card className="text-center py-8">
              <p className="text-neutral-dark mb-4">
                Žádné aktuality nebyly nalezeny.
              </p>
              <Button 
                variant="tertiary" 
                size="sm"
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }}
                icon={<FiX />}
              >
                Zrušit filtry
              </Button>
            </Card>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredAndSortedNews.map((item, idx) => (
                <Card 
                  key={item.id} 
                  className="flex flex-col hover:shadow-xl transition-all duration-400"
                  animated
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {item.category && (
                        <span className="px-2.5 py-1 bg-primary-light text-white text-xs font-medium rounded-full">
                          {item.category}
                        </span>
                      )}
                      {item.membersOnly && (
                        <span className="px-2.5 py-1 bg-secondary text-white text-xs font-medium rounded-full">
                          {language === 'cs' ? 'Pouze členové' : 'Members only'}
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-secondary font-medium flex items-center gap-1">
                      <FiCalendar className="w-3 h-3" />
                      {item.date.toLocaleDateString(language === 'cs' ? 'cs-CZ' : 'en-US', { 
                        day: 'numeric', 
                        month: 'short'
                      })}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-heading font-semibold text-primary-dark mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-neutral-dark mb-4 flex-grow leading-relaxed line-clamp-3">
                    {item.excerpt}
                  </p>
                  
                  <Link to={getPath(`/aktuality/${item.id}`)}>
                    <Button variant="tertiary" size="sm" className="self-start" icon={<FiArrowRight />} iconPosition="right">
                      {t('home.news.readMore')}
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsPage
