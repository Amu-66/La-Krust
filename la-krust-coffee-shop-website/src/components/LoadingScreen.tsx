import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 1500);
    const timer2 = setTimeout(() => setVisible(false), 2200);
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-espresso flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="paper-grain absolute inset-0" />
      <div className="relative z-10 text-center">
        <h1 className="font-serif text-4xl sm:text-5xl text-cream tracking-wider mb-3">La Krust</h1>
        <div className="gold-rule w-24 mx-auto mb-4" />
        <p className="font-script text-lg text-gold/50">Where every morning begins.</p>
        
        {/* Subtle loading dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map(i => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-gold/40"
              style={{
                animation: 'pulseGlow 1.5s ease-in-out infinite',
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
