'use client';

import HeroSection from '@/components/HeroSection';
import SobreSection from '@/components/SobreSection';
import OficinasSection from '@/components/OficinasSection';
import NoticiasSection from '@/components/NoticiasSection';
import GaleriaSection from '@/components/GaleriaSection';
import DecorativeIllustrations from '@/components/DecorativeIllustrations';

export default function HomePage() {
  return (
    <main className="relative">
      <DecorativeIllustrations />
      <HeroSection />
      <SobreSection />
      <OficinasSection />
      <NoticiasSection />
      <GaleriaSection />
    </main>
  );
}
