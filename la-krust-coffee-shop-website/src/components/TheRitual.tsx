import { useScrollReveal } from '../hooks/useScrollReveal';

const BG_IMAGE = 'https://images.pexels.com/photos/9899790/pexels-photo-9899790.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1600';

export default function TheRitual() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section id="ritual" className="relative overflow-hidden" style={{ minHeight: '500px' }}>
      {/* Ken Burns background */}
      <div className="absolute inset-0">
        <img
          src={BG_IMAGE}
          alt=""
          className="w-full h-full object-cover ken-burns"
          style={{ filter: 'brightness(0.3) sepia(0.3)' }}
          loading="lazy"
        />
      </div>

      {/* Warm amber wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#3A2315dd] via-[#3A2315cc] to-[#3A2315dd]" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, rgba(184,134,11,0.1) 0%, transparent 60%)'
      }} />

      {/* Paper grain */}
      <div className="paper-grain absolute inset-0" />

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 flex items-center justify-center min-h-[500px] px-6 sm:px-12"
      >
        <div className="max-w-4xl text-center">
          <div className="gold-rule max-w-xs mx-auto mb-12" />
          
          <blockquote
            className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic text-cream/90 leading-tight tracking-wide reveal ${isVisible ? 'visible' : ''}`}
            style={{ fontWeight: 300 }}
          >
            "Not just a coffee.<br />
            <span className="text-gold/80">A reason to pause.</span>"
          </blockquote>

          <div className={`mt-8 reveal reveal-delay-2 ${isVisible ? 'visible' : ''}`}>
            <span className="font-script text-2xl text-dusty-rose/60">— the daily ritual</span>
          </div>

          <div className="gold-rule max-w-xs mx-auto mt-12" />
        </div>
      </div>
    </section>
  );
}
