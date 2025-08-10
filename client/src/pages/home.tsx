import { Navigation } from '@/components/navigation';
import { HeroSection } from '@/components/hero-section';
import { ProgramOverview } from '@/components/program-overview';
import { ProgramBenefits } from '@/components/program-benefits';
import { ProgramDetails } from '@/components/program-details';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen" data-testid="home-page">
      <Navigation />
      <HeroSection />
      <ProgramOverview />
      <ProgramBenefits />
      <ProgramDetails />
      <Footer />
    </div>
  );
}
