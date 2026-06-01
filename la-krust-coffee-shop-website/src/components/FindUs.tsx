import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FindUs() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="find-us" className="relative bg-cream text-espresso overflow-hidden">
      {/* Linen texture */}
      <div className="linen-texture absolute inset-0" />
      <div className="paper-grain absolute inset-0" />

      {/* Coffee ring */}
      <div className="coffee-ring absolute" style={{ bottom: '-60px', right: '10%' }} />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 py-24 md:py-32">
        <div className="gold-rule w-full mb-16" />

        <div className="text-center mb-16">
          <h2
            className={`font-script text-4xl sm:text-5xl text-gold mb-4 reveal ${isVisible ? 'visible' : ''}`}
          >
            Find Us
          </h2>
          <p
            className={`font-sans text-sm tracking-[0.2em] uppercase text-espresso/40 reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}
          >
            We're waiting for you
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Address */}
          <div className={`text-center reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-2 font-medium">Location</h3>
            <p className="font-sans text-sm text-espresso/60 leading-relaxed">
              1 Meridian Street<br />
              Silkaatzkop, Secunda<br />
              2302
            </p>
            <a
              href="https://maps.google.com/?q=La+Krust+Secunda"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 font-sans text-xs tracking-[0.15em] uppercase text-gold hover:text-gold-light transition-colors duration-300 border-b border-gold/30 pb-0.5"
            >
              Get Directions
            </a>
          </div>

          {/* Hours */}
          <div className={`text-center reveal reveal-delay-3 ${isVisible ? 'visible' : ''}`}>
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-2 font-medium">Hours</h3>
            <div className="font-sans text-sm text-espresso/60 space-y-1">
              <p>Monday – Friday</p>
              <p className="text-espresso/80 font-medium">6:30 am – 7:30 pm</p>
              <p className="mt-2">Saturday</p>
              <p className="text-espresso/80 font-medium">7:00 am – 5:00 pm</p>
              <p className="mt-2">Sunday</p>
              <p className="text-espresso/80 font-medium">8:00 am – 3:00 pm</p>
            </div>
          </div>

          {/* Contact */}
          <div className={`text-center reveal reveal-delay-4 ${isVisible ? 'visible' : ''}`}>
            <div className="flex justify-center mb-4">
              <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl mb-2 font-medium">Contact</h3>
            <p className="font-sans text-sm text-espresso/60 leading-relaxed">
              <a href="tel:0725927118" className="hover:text-gold transition-colors duration-300">
                072 592 7118
              </a>
            </p>
            <p className="font-sans text-xs text-espresso/40 mt-4">
              Dine-in · Takeaway
            </p>
          </div>
        </div>

        {/* Reviews highlight */}
        <div className={`mt-20 text-center reveal reveal-delay-5 ${isVisible ? 'visible' : ''}`}>
          <div className="gold-rule max-w-xs mx-auto mb-8" />
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4].map(i => (
              <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <svg className="w-5 h-5 text-gold/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <p className="font-serif text-lg text-espresso/70">4.3 — 113 reviews</p>
          <p className="font-serif text-sm text-espresso/50 italic mt-4 max-w-md mx-auto">
            "Cosy, quaint place with tranquil atmosphere. Warm drinks are exceptional. 
            Food is tasty with generous portions."
          </p>
          <p className="font-sans text-xs text-espresso/30 mt-2">— Ronel H., Google Reviews</p>
        </div>

        <div className="gold-rule w-full mt-16" />
      </div>
    </section>
  );
}
