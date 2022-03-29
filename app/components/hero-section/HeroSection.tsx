import { Container } from "@chakra-ui/react";
import HeroBackgroundPattern from "~/components/hero-section/HeroBackgroundPattern";
import HeroEllipseLayer from "~/components/hero-section/HeroEllipseLayer";
import HeroImage from "~/components/hero-section/HeroImage";
import Section from "../shared/Section";

export default function HeroSection() {
  return (
    <>
      <Section bg="primary.500">
        <HeroBackgroundPattern />
        <HeroEllipseLayer />
        <HeroImage />
      </Section>
    </>
  );
}
