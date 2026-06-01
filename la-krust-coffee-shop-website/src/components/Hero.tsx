import { useEffect, useState } from 'react';

const HERO_IMAGE = 'https://images.pexels.com/photos/14356266/pexels-photo-14356266.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1920';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [lettersRevealed, setLettersRevealed] = useState(0);
  const [showSubline, setShowSubline] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  const title = 'La Krust.';

  useEffect(() => {
    // Preload image
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = HERO_IMAGE;
  }, []);

  useEffect(() => {
    if (!loaded) return;
    // Reveal letters one by one
    const timer = setInterval(() => {
      setLettersRevealed(prev => {
        if (prev >= title.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 150);
    return () => clearInterval(timer);
  }, [loaded]);

  useEffect(() => {
    if (lettersRevealed >= title.length) {
      const t1 = setTimeout(() => setShowSubline(true), 400);
      const t2 = setTimeout(() => setShowCTA(true), 1000);
      return () => { clearTimeout(t1); clearTimeout(t2); };
    }
  }, [lettersRevealed]);

  const scrollToMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden" style={{ perspective: '1200px' }}>
      {/* Background Image with Zoom */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className={`absolute inset-0 ${loaded ? 'hero-zoom' : ''}`}>
          <img
            src={HERO_IMAGE}
            alt="Espresso with rich crema"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1C0F0A] via-[#1C0F0Acc] to-[#1C0F0A88]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1C0F0A]" />

      {/* Warm center glow */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 60%, rgba(184,134,11,0.08) 0%, transparent 60%)'
      }} />

      {/* Steam wisps */}
      <div className="absolute left-1/2 top-[30%] -translate-x-1/2">
        <div className="steam-wisp" style={{ left: '-10px' }} />
        <div className="steam-wisp steam-wisp-2" style={{ left: '15px' }} />
        <div className="steam-wisp steam-wisp-3" style={{ left: '-25px' }} />
      </div>

      {/* Paper grain overlay */}
      <div className="paper-grain absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Title - letter by letter */}
        <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-wide text-cream mb-6">
          {title.split('').map((letter, i) => (
            <span
              key={i}
              className="letter-animate inline-block"
              style={{
                animationDelay: `${i * 0.15 + 1}s`,
                animationFillMode: 'forwards'
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </h1>

        {/* Subline in script */}
        <p
          className={`font-script text-2xl sm:text-3xl md:text-4xl text-gold-light transition-all duration-1000 ${
            showSubline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Where every morning begins.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToMenu}
          className={`mt-12 px-8 py-3 border border-gold/50 text-cream font-sans text-sm tracking-[0.2em] uppercase
            hover:bg-gold/20 hover:border-gold transition-all duration-500 cursor-pointer
            ${showCTA ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
          `}
          style={{ transitionDelay: '0.2s' }}
        >
          See Our Menu
        </button>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-1000 ${showCTA ? 'opacity-40' : 'opacity-0'}`}>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent float-animation" />
      </div>
    </section>
  );
}
