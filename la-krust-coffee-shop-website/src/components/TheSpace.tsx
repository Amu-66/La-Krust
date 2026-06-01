import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const galleryImages = [
  {
    src: 'https://images.pexels.com/photos/7898213/pexels-photo-7898213.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=500',
    alt: 'Warm rustic café interior with wooden furniture'
  },
  {
    src: 'https://images.pexels.com/photos/13119735/pexels-photo-13119735.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=500',
    alt: 'Fresh croissant and coffee on a wooden table'
  },
  {
    src: 'https://images.pexels.com/photos/15362788/pexels-photo-15362788.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=500',
    alt: 'Vintage café interior with rustic décor'
  },
  {
    src: 'https://images.pexels.com/photos/9271565/pexels-photo-9271565.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=700',
    alt: 'Latte art on wooden table'
  },
  {
    src: 'https://images.pexels.com/photos/16310611/pexels-photo-16310611.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=500',
    alt: 'Cozy café with dried flowers and vintage décor'
  },
  {
    src: 'https://images.pexels.com/photos/414555/pexels-photo-414555.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=700&w=500',
    alt: 'Cappuccino with latte art and pastry'
  },
];

export default function TheSpace() {
  const { ref, isVisible } = useScrollReveal(0.05);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = dir === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section id="space" className="relative bg-espresso overflow-hidden">
      <div className="paper-grain absolute inset-0" />

      <div ref={ref} className="relative z-10 py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-12 px-6">
          <h2
            className={`font-script text-4xl sm:text-5xl text-gold mb-4 reveal ${isVisible ? 'visible' : ''}`}
          >
            The Space
          </h2>
          <div className="gold-rule max-w-xs mx-auto" />
        </div>

        {/* Horizontal scroll gallery */}
        <div className="relative">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-espresso/80 border border-gold/30 text-cream/60 hover:text-gold hover:border-gold/60 transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Scroll left"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-espresso/80 border border-gold/30 text-cream/60 hover:text-gold hover:border-gold/60 transition-all duration-300 flex items-center justify-center cursor-pointer"
            aria-label="Scroll right"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Gallery */}
          <div
            ref={scrollRef}
            className="gallery-scroll px-6 sm:px-12 gap-4 sm:gap-6"
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className={`relative group reveal reveal-delay-${Math.min(i + 1, 6)} ${isVisible ? 'visible' : ''}`}
                style={{ border: '1px solid rgba(184,134,11,0.15)' }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-[350px] sm:h-[450px] w-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ filter: 'saturate(0.9) brightness(0.95)' }}
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
