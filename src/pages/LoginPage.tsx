import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useI18n } from '../i18n/i18n'
import { useAuth } from '../hooks/useAuth'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import PageHero from '../components/ui/PageHero'
import { FiUser, FiLock, FiMail, FiArrowRight } from 'react-icons/fi'

const LoginPage: React.FC = () => {
  const { language } = useI18n()
  const { login, checkEmailExists } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)
    
    // Ověření emailu a hesla
    const result = login(email, password)
    
    setTimeout(() => {
      setIsLoading(false)
      if (result.success) {
        // Přesměrovat na členskou sekci
        const basePath = language === 'cs' ? '/cs' : '/en'
        navigate(`${basePath}/clenska-sekce`)
      } else {
        setError(result.error || 'Neplatné přihlašovací údaje')
      }
    }, 500)
  }

  const handleEmailBlur = () => {
    if (email && !checkEmailExists(email)) {
      setError('Tento email není v databázi členů')
    } else {
      setError(null)
    }
  }

  return (
    <div>
      {/* Hero Title */}
      <PageHero 
        title={language === 'cs' ? 'Přihlášení pro členy' : 'Member Login'}
        backgroundImage="/gkl fotografie doplneni/hriste z dronu9.jpeg"
      />

      {/* Login Form */}
      <div className="bg-neutral-cream/70 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto">
            <Card className="p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <FiUser className="w-8 h-8 text-primary" />
                </div>
                <p className="text-neutral-dark">
                  {language === 'cs' 
                    ? 'Přihlaste se do členské sekce Golfového klubu Líšnice' 
                    : 'Login to the member section of Golfový klub Líšnice'}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-primary-dark mb-2">
                    {language === 'cs' ? 'Email' : 'Email'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="h-5 w-5 text-neutral-dark/40" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setError(null)
                      }}
                      onBlur={handleEmailBlur}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-primary/20 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-neutral-dark min-h-[44px]"
                      placeholder={language === 'cs' ? 'vas@email.cz' : 'your@email.com'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-primary-dark mb-2">
                    {language === 'cs' ? 'Heslo' : 'Password'}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiLock className="h-5 w-5 text-neutral-dark/40" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setError(null)
                      }}
                      required
                      className="block w-full pl-10 pr-3 py-3 border border-primary/20 rounded-lg bg-white/80 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary text-neutral-dark min-h-[44px]"
                      placeholder={language === 'cs' ? '••••••••' : '••••••••'}
                    />
                  </div>
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-4">
                  <p className="text-xs font-semibold text-primary-dark mb-2">Testovací přístupové údaje:</p>
                  <div className="text-xs text-neutral-dark space-y-1">
                    <div>Email: <span className="font-mono font-semibold">test@gkl.cz</span> | Heslo: <span className="font-mono font-semibold">test123</span></div>
                    <div>Email: <span className="font-mono font-semibold">clen@gkl.cz</span> | Heslo: <span className="font-mono font-semibold">clen2025</span></div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  icon={<FiArrowRight />}
                  iconPosition="right"
                  disabled={isLoading}
                >
                  {isLoading 
                    ? (language === 'cs' ? 'Přihlašování...' : 'Logging in...')
                    : (language === 'cs' ? 'Přihlásit se' : 'Login')
                  }
                </Button>
              </form>

              <div className="mt-8 pt-6 border-t border-neutral-light">
                <p className="text-center text-sm text-neutral-dark">
                  {language === 'cs' 
                    ? 'Nejste ještě členem? ' 
                    : 'Not a member yet? '}
                  <a href="#" className="text-primary hover:text-primary-dark font-medium transition-colors">
                    {language === 'cs' ? 'Kontaktujte nás' : 'Contact us'}
                  </a>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

