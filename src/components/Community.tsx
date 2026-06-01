import { useScrollReveal } from '../hooks/useScrollReveal';

const reviews = [
  {
    text: "What a wonderful time we had. The food was amazing. The service was spectacular. Our waitress was super friendly and an amazing waitress.",
    author: "Danelia B.",
    time: "6 months ago",
    stars: 5
  },
  {
    text: "Cosy, quaint place with tranquil atmosphere. Warm drinks are exceptional. Food is tasty with generous portions. Great service with very attentive waiter.",
    author: "Ronel H.",
    time: "2 years ago",
    stars: 5
  },
  {
    text: "This has such a nice rustic look and feel, the staff are really friendly, the food was delicious and prepared very fast. An excellent restaurant to grab a pizza and beer.",
    author: "Avesshen G.",
    time: "2 years ago",
    stars: 5
  }
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-gold" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Community() {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="relative bg-espresso-light overflow-hidden">
      <div className="paper-grain absolute inset-0" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at center, rgba(184,134,11,0.04) 0%, transparent 60%)'
      }} />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6 sm:px-12 py-24 md:py-32">
        <div className="text-center mb-16">
          <h2
            className={`font-script text-4xl sm:text-5xl text-gold mb-4 reveal ${isVisible ? 'visible' : ''}`}
          >
            The Community
          </h2>
          <p
            className={`font-sans text-sm tracking-[0.2em] uppercase text-cream/30 reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}
          >
            What our guests say
          </p>
          <div className="gold-rule max-w-xs mx-auto mt-8" />
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className={`relative p-6 sm:p-8 bg-cream/[0.04] backdrop-blur-sm reveal reveal-delay-${i + 2} ${isVisible ? 'visible' : ''}`}
              style={{ border: '1px solid rgba(184,134,11,0.12)' }}
            >
              {/* Quote mark */}
              <span className="font-serif text-5xl text-gold/20 absolute top-3 left-5 leading-none">"</span>
              
              <div className="relative z-10">
                <StarRating count={review.stars} />
                <p className="font-serif text-sm text-cream/70 italic leading-relaxed mt-4 mb-6">
                  "{review.text}"
                </p>
                <div className="gold-rule mb-4" style={{ opacity: 0.2 }} />
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs text-cream/40 tracking-wider">{review.author}</span>
                  <span className="font-sans text-[10px] text-cream/20">{review.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
