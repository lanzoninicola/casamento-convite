import HeroBackgroundPattern from "~/components/index-page/hero-section/HeroBackgroundPattern";
import HeroEllipseLayer from "~/components/index-page/hero-section/HeroEllipseLayer";
import HeroImage from "~/components/index-page/hero-section/HeroImage";
import SafeArea from "~/components/shared/SafeArea";

import Section from "../../shared/Section";

export default function HeroSection() {
  return (
    <>
      <Section id="hero" bg="gray.200">
        <SafeArea top={75}>
          {/* <HeroBackgroundPattern /> */}
          <HeroEllipseLayer />
          <HeroImage />
        </SafeArea>
      </Section>
    </>
  );
}
