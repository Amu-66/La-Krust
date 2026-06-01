import { useScrollReveal } from '../hooks/useScrollReveal';

const CAFE_IMAGE = 'https://images.pexels.com/photos/34338427/pexels-photo-34338427.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=600';

const storyLines = [
  "Some places you choose.",
  "Some places choose you.",
  "La Krust began the way all good things do —",
  "with a cup of coffee and a feeling that something was missing.",
];

export default function OurStory() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal(0.1);
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal(0.2);

  return (
    <section id="story" className="relative bg-cream text-espresso overflow-hidden">
      {/* Linen texture */}
      <div className="linen-texture absolute inset-0" />
      
      {/* Coffee ring watermark */}
      <div className="coffee-ring absolute" style={{ top: '10%', right: '-100px' }} />
      <div className="coffee-ring absolute" style={{ bottom: '5%', left: '-80px', width: '200px', height: '200px' }} />

      {/* Paper grain */}
      <div className="paper-grain absolute inset-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 py-24 md:py-32">
        {/* Gold rule top */}
        <div className="gold-rule w-full mb-16" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Text side */}
          <div ref={sectionRef} className="space-y-2">
            <h2
              className={`font-script text-3xl sm:text-4xl text-gold mb-8 reveal ${sectionVisible ? 'visible' : ''}`}
            >
              Our Story
            </h2>
            
            {storyLines.map((line, i) => (
              <p
                key={i}
                className={`font-serif text-xl sm:text-2xl md:text-3xl leading-relaxed text-espresso/90 reveal reveal-delay-${i + 1} ${sectionVisible ? 'visible' : ''}`}
              >
                {line}
              </p>
            ))}

            <p
              className={`font-sans text-base text-espresso/60 mt-8 leading-relaxed max-w-md reveal reveal-delay-5 ${sectionVisible ? 'visible' : ''}`}
            >
              In the heart of Secunda, on Meridian Street, we opened our doors with a simple promise: 
              coffee worth waking up for, and a space worth staying in. That was years ago. 
              The promise hasn't changed.
            </p>
          </div>

          {/* Image side */}
          <div
            ref={imgRef}
            className={`relative reveal reveal-delay-2 ${imgVisible ? 'visible' : ''}`}
          >
            <div className="relative overflow-hidden" style={{ border: '1px solid rgba(184,134,11,0.3)' }}>
              <img
                src={CAFE_IMAGE}
                alt="La Krust café interior — warm, rustic, inviting"
                className="w-full h-[400px] md:h-[500px] object-cover"
                style={{ filter: 'sepia(0.25) saturate(0.9) brightness(0.95)' }}
                loading="lazy"
              />
              {/* Gold corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/50" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold/50" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold/50" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/50" />
            </div>
          </div>
        </div>

        {/* Gold rule bottom */}
        <div className="gold-rule w-full mt-16" />
      </div>
    </section>
  );
}
