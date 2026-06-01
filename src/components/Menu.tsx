import { useScrollReveal } from '../hooks/useScrollReveal';

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: 'Espresso',
    items: [
      { name: 'Single Espresso', description: 'Pure, intense, essential', price: 'R 28' },
      { name: 'Double Espresso', description: 'For those who mean it', price: 'R 34' },
      { name: 'Flat White', description: 'Velvety, balanced, comforting', price: 'R 38' },
      { name: 'Cappuccino', description: 'Classic foam, perfect ratio', price: 'R 36' },
      { name: 'Café Latte', description: 'Smooth and gentle', price: 'R 38' },
    ]
  },
  {
    title: 'Filter',
    items: [
      { name: 'Pour Over', description: 'Hand-poured, single origin', price: 'R 42' },
      { name: 'French Press', description: 'Full-bodied, rich', price: 'R 38' },
      { name: 'Aeropress', description: 'Clean and bright', price: 'R 40' },
    ]
  },
  {
    title: 'Cold Brew',
    items: [
      { name: 'Classic Cold Brew', description: '16-hour steeped, served over ice', price: 'R 42' },
      { name: 'Vanilla Cold Brew', description: 'Housemade vanilla, cream', price: 'R 48' },
      { name: 'Cold Brew Tonic', description: 'With tonic water and citrus', price: 'R 46' },
    ]
  },
  {
    title: 'Pastries',
    items: [
      { name: 'Ham & Cheese Croissant', description: 'Buttery, flaky, generous', price: 'R 55' },
      { name: 'Breakfast Wrap', description: 'Eggs, bacon, fresh greens', price: 'R 65' },
      { name: 'Almond Croissant', description: 'Frangipane filled, toasted', price: 'R 48' },
      { name: 'Banana Bread', description: 'Warm, with salted butter', price: 'R 42' },
    ]
  }
];

function MenuCard({ category, index }: { category: MenuCategory; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className={`menu-card relative bg-cream/[0.06] backdrop-blur-sm p-6 sm:p-8 reveal reveal-delay-${Math.min(index + 1, 4)} ${isVisible ? 'visible' : ''}`}
      style={{ border: '1px solid rgba(184,134,11,0.2)' }}
    >
      {/* Gold corner accents */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/40" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/40" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/40" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/40" />

      {/* Category title in script */}
      <h3 className="font-script text-3xl sm:text-4xl text-gold mb-6 text-center">
        {category.title}
      </h3>

      <div className="gold-rule mb-6" />

      <div className="space-y-4">
        {category.items.map((item, i) => (
          <div key={i} className="flex justify-between items-baseline gap-4">
            <div className="flex-1">
              <span className="font-serif text-lg text-cream font-medium">{item.name}</span>
              <p className="font-sans text-xs text-cream/40 tracking-wider mt-0.5">{item.description}</p>
            </div>
            <span className="font-serif text-cream/70 text-lg whitespace-nowrap">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Menu() {
  const { ref, isVisible } = useScrollReveal(0.05);

  return (
    <section id="menu" className="relative bg-espresso overflow-hidden warm-halo">
      {/* Paper grain */}
      <div className="paper-grain absolute inset-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-12 py-24 md:py-32">
        {/* Section header */}
        <div ref={ref} className="text-center mb-16">
          <h2
            className={`font-script text-4xl sm:text-5xl text-gold mb-4 reveal ${isVisible ? 'visible' : ''}`}
          >
            The Menu
          </h2>
          <p
            className={`font-sans text-sm tracking-[0.2em] uppercase text-cream/40 reveal reveal-delay-1 ${isVisible ? 'visible' : ''}`}
          >
            Simple things, done well
          </p>
          <div className="gold-rule max-w-xs mx-auto mt-8" />
        </div>

        {/* Menu grid */}
        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {menuData.map((category, i) => (
            <MenuCard key={category.title} category={category} index={i} />
          ))}
        </div>

        {/* Price note */}
        <p className="text-center text-cream/30 font-sans text-xs tracking-wider mt-12">
          R 100–200 per person · Dine-in & Takeaway
        </p>
      </div>
    </section>
  );
}
