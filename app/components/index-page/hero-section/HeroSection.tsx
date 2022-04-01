import HeroBackgroundPattern from "~/components/index-page/hero-section/HeroBackgroundPattern";
import HeroEllipseLayer from "~/components/index-page/hero-section/HeroEllipseLayer";
import HeroImage from "~/components/index-page/hero-section/HeroImage";

import Section from "../../shared/Section";

export default function HeroSection() {
  return (
    <>
      <Section id="hero" bg="primary.500">
        <HeroBackgroundPattern />
        <HeroEllipseLayer />
        <HeroImage />
      </Section>
    </>
  );
}
