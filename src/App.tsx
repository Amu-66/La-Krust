import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Menu from './components/Menu';
import TheCraft from './components/TheCraft';
import TheRitual from './components/TheRitual';
import TheSpace from './components/TheSpace';
import Community from './components/Community';
import FindUs from './components/FindUs';
import Footer from './components/Footer';
import SoundToggle from './components/SoundToggle';
import SectionTransition from './components/SectionTransition';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  return (
    <div className="relative overflow-x-hidden" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
      {/* Loading screen */}
      <LoadingScreen />
      {/* Fixed navbar */}
      <Navbar />

      {/* Ambient sound toggle */}
      <SoundToggle />

      {/* 1. Hero — Full screen cinematic */}
      <Hero />

      {/* Transition: Dark → Light */}
      <SectionTransition variant="dark-to-light" />

      {/* 2. Our Story — Warm cream */}
      <OurStory />

      {/* Transition: Light → Dark */}
      <SectionTransition variant="light-to-dark" />

      {/* 3. The Menu — Dark espresso */}
      <Menu />

      {/* Transition: subtle dark */}
      <SectionTransition variant="dark-to-dark" />

      {/* 4. The Craft — Full bleed split */}
      <TheCraft />

      {/* Transition: Dark → Amber */}
      <SectionTransition variant="dark-to-amber" />

      {/* 5. The Ritual — Pull quote */}
      <TheRitual />

      {/* Transition: Amber → Dark */}
      <SectionTransition variant="amber-to-dark" />

      {/* 6. The Space — Gallery */}
      <TheSpace />

      {/* Transition: Dark to community */}
      <SectionTransition variant="dark-to-dark" />

      {/* Community / Reviews */}
      <Community />

      {/* Transition: Dark → Light */}
      <SectionTransition variant="dark-to-light" />

      {/* 7. Find Us & Hours */}
      <FindUs />

      {/* Transition: Light → Dark */}
      <SectionTransition variant="light-to-dark" />

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
