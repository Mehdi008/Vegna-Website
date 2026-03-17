import { HeroSection } from "@/components/sections/hero-section";
import { ManifestoSection } from "@/components/sections/manifesto-section";
import { ProductGridSection } from "@/components/sections/product-grid-section";
import { ProfessionalSection } from "@/components/sections/professional-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <ProductGridSection />
      <ProfessionalSection />
    </>
  );
}
