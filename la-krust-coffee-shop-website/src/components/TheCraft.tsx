import { useScrollReveal } from '../hooks/useScrollReveal';

const BARISTA_IMAGE = 'https://images.pexels.com/photos/302892/pexels-photo-302892.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=960';

export default function TheCraft() {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal(0.15);
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal(0.1);

  return (
    <section id="craft" className="relative overflow-hidden">
      <div className="grid md:grid-cols-2 min-h-[600px]">
        {/* Image side - full bleed */}
        <div
          ref={imgRef}
          className={`relative overflow-hidden reveal ${imgVisible ? 'visible' : ''}`}
        >
          <img
            src={BARISTA_IMAGE}
            alt="Barista hands tamping coffee grounds with precision"
            className="w-full h-full min-h-[400px] object-cover"
            style={{ filter: 'saturate(0.85) contrast(1.05)' }}
            loading="lazy"
          />
          {/* Warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-espresso/30 md:to-espresso/50" />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, rgba(184,134,11,0.05) 0%, transparent 50%)'
          }} />
        </div>

        {/* Text side */}
        <div className="relative bg-espresso-light flex items-center">
          <div className="paper-grain absolute inset-0" />
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at 30% 50%, rgba(184,134,11,0.06) 0%, transparent 70%)'
          }} />

          <div ref={textRef} className="relative z-10 px-8 sm:px-12 md:px-16 py-16 md:py-24 max-w-lg">
            <h2
              className={`font-script text-3xl sm:text-4xl text-gold mb-6 reveal ${textVisible ? 'visible' : ''}`}
            >
              The Craft
            </h2>

            <div className="gold-rule mb-8 max-w-[60px]" style={{ opacity: 0.6 }} />

            <p
              className={`font-serif text-xl sm:text-2xl text-cream/90 leading-relaxed mb-6 reveal reveal-delay-1 ${textVisible ? 'visible' : ''}`}
            >
              Every cup begins long before it reaches your hands.
            </p>

            <p
              className={`font-sans text-sm text-cream/50 leading-relaxed mb-4 reveal reveal-delay-2 ${textVisible ? 'visible' : ''}`}
            >
              We source our beans from small-lot farms — places where the soil and the altitude 
              and the care of the grower are as much a part of the flavour as the roast itself.
            </p>

            <p
              className={`font-sans text-sm text-cream/50 leading-relaxed mb-4 reveal reveal-delay-3 ${textVisible ? 'visible' : ''}`}
            >
              We roast in small batches. We grind to order. We tamp with intention. 
              Not because it's trendy — because it's the only way we know.
            </p>

            <p
              className={`font-serif text-lg text-dusty-rose/80 italic mt-8 reveal reveal-delay-4 ${textVisible ? 'visible' : ''}`}
            >
              "The difference between good coffee and great coffee is attention."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
