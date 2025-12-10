import React, { useState } from 'react'
import { useI18n } from '../i18n/i18n'
import Section from '../components/ui/Section'
import PageHero from '../components/ui/PageHero'

const GalleryPage: React.FC = () => {
  const { t } = useI18n()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // Mock data pro galerii - v reálné aplikaci by to bylo z API
  const galleryImages = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    src: `/gallery/image-${i + 1}.jpg`,
    alt: `Fotografie ${i + 1}`,
  }))

  return (
    <div>
      {/* Hero Title */}
      <PageHero 
        title={t('nav.gallery')}
        backgroundImage="/gkl fotografie doplneni/hriste z dronu10.jpeg"
      />

      {/* Gallery Grid */}
      <Section className="bg-neutral-cream/70">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-primary to-primary-light cursor-pointer hover:scale-[1.02] transition-transform duration-500 ease-out shadow-md hover:shadow-lg"
            >
              <div className="w-full h-full flex items-center justify-center text-white text-sm">
                Foto {image.id}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-secondary transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-lg p-2">
              <div className="aspect-video w-full flex items-center justify-center text-white">
                Foto {selectedImage}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryPage

