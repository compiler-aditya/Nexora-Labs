import { HeroSection } from "@/components/home/hero-section";
import { ServicesSection } from "@/components/home/services-section";
import { TechSection } from "@/components/home/tech-section";
import { CTASection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TechSection />
      <CTASection />
    </>
  );
}
