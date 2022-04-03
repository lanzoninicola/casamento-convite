import { Button, Center, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, MetaFunction, Outlet } from "remix";
import ArrowRight from "~/components/shared/ArrowRight";
import usePulseAnimation from "~/components/shared/hooks/usePulseAnimation";
import LogoWithBackground from "~/components/shared/LogoWithBackground";
import SafeArea from "~/components/shared/SafeArea";
import Section from "~/components/shared/Section";
import useWillAttendFormData from "~/context/invitation-context/hooks/useWillAttendFormData";

// TODO: instead to use the condition below, use Outlet and split in route the two pages

export const meta: MetaFunction = () => {
  return {
    title: "Gustavo & Kelly",
    description: "Convite de casamento",
  };
};

export default function Response() {
  const { willAttend } = useWillAttendFormData();

  const bgImage = true ? "thank-you-bg.jpg" : "gosh-bg.png";

  return (
    <Section
      id="invitation-success"
      maxH="100vh"
      backgroundImage={`url(/images/${bgImage})`}
    >
      <SafeArea>
        <Grid h="100%" padding="2rem" gridTemplateRows=".5fr 1fr .25fr">
          <LogoWithBackground />
          <Outlet />
          <Center>
            <NextButton />
          </Center>
        </Grid>
      </SafeArea>
    </Section>
  );
}

function NextButton() {
  const pulseAnimationCSS = usePulseAnimation(211, 171, 158);

  return (
    <Link to="/#revelation-sex-baby">
      <Button
        bg="secondary.500"
        rightIcon={<ArrowRight />}
        animation={pulseAnimationCSS}
        textTransform="uppercase"
        letterSpacing="1.2px"
        marginBlock="1rem"
      >
        Prosseguir
      </Button>
    </Link>
  );
}
