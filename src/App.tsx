import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { I18nProvider } from './i18n/i18n'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import NewsDetailPage from './pages/NewsDetailPage'
import AboutPage from './pages/AboutPage'
import CoursesPage from './pages/CoursesPage'
import PricingPage from './pages/PricingPage'
import TournamentsPage from './pages/TournamentsPage'
import TournamentDetailPage from './pages/TournamentDetailPage'
import ServicesPage from './pages/ServicesPage'
import IndividualTrainingPage from './pages/IndividualTrainingPage'
import YouthTrainingPage from './pages/YouthTrainingPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import LoginPage from './pages/LoginPage'
import MembersSectionPage from './pages/MembersSectionPage'
import EnglishSinglePage from './pages/EnglishSinglePage'
import FontPreview1 from './pages/FontPreview1'
import FontPreview2 from './pages/FontPreview2'
import FontPreview3 from './pages/FontPreview3'
import FontPreview4 from './pages/FontPreview4'
import FontPreview5 from './pages/FontPreview5'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <I18nProvider>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col relative z-10">
          <Header />
          <main className="flex-grow relative z-10">
            <Routes>
              <Route path="/" element={<Navigate to="/cs" replace />} />
              <Route path="/cs" element={<HomePage />} />
              <Route path="/cs/aktuality" element={<NewsPage />} />
              <Route path="/cs/aktuality/:id" element={<NewsDetailPage />} />
              <Route path="/cs/klub" element={<AboutPage />} />
              <Route path="/cs/hriste" element={<CoursesPage />} />
              <Route path="/cs/cenik" element={<PricingPage />} />
              <Route path="/cs/souteze" element={<TournamentsPage />} />
              <Route path="/cs/souteze/:id" element={<TournamentDetailPage />} />
              <Route path="/cs/sluzby" element={<ServicesPage />} />
              <Route path="/cs/vyuka-golfu" element={<ServicesPage />} />
              <Route path="/cs/vyuka-golfu/individualni" element={<IndividualTrainingPage />} />
              <Route path="/cs/vyuka-golfu/mladez" element={<YouthTrainingPage />} />
              <Route path="/cs/fotogalerie" element={<GalleryPage />} />
              <Route path="/cs/kontakt" element={<ContactPage />} />
              <Route path="/cs/clenska-sekce" element={<MembersSectionPage />} />
              <Route path="/login" element={<LoginPage />} />
              
              <Route path="/en" element={<EnglishSinglePage />} />
              <Route path="/en/*" element={<EnglishSinglePage />} />
              
              {/* Skryté stránky pro výběr fontu */}
              <Route path="/font-preview-1" element={<FontPreview1 />} />
              <Route path="/font-preview-2" element={<FontPreview2 />} />
              <Route path="/font-preview-3" element={<FontPreview3 />} />
              <Route path="/font-preview-4" element={<FontPreview4 />} />
              <Route path="/font-preview-5" element={<FontPreview5 />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </I18nProvider>
    </BrowserRouter>
  )
}

export default App

