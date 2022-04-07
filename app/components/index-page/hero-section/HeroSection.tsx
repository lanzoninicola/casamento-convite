import { Center, Flex, Grid } from "@chakra-ui/react";
import HeroBackgroundPattern from "~/components/index-page/hero-section/HeroBackgroundPattern";
import HeroEllipseLayer from "~/components/index-page/hero-section/HeroEllipseLayer";
import HeroImage from "~/components/index-page/hero-section/HeroImage";
import SafeArea from "~/components/shared/SafeArea";

import Section from "../../shared/Section";
import HeroHeadline from "./HeroHeadline";

export default function HeroSection() {
  return (
    <>
      <Section id="hero" bg="gray.200" pb={0}>
        <SafeArea>
          {/* <HeroBackgroundPattern /> */}
          <Grid
            h="100%"
            gridTemplateRows="auto 1fr"
            position="relative"
            zIndex={1}
          >
            <HeroHeadline />
            <HeroImage />
          </Grid>
          <HeroEllipseLayer />
        </SafeArea>
      </Section>
    </>
  );
}
