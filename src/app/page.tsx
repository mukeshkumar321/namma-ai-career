import FeatureSection from "@/components/landing-page/feature-section";
import HeroSection from "@/components/landing-page/hero";

export default function Home() {
  return (
    <div className="relative">
      <div className="grid-background" />
      <HeroSection />
      <FeatureSection />
    </div>
  );
}
