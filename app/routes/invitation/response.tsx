import { Button, Center, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, MetaFunction, Outlet } from "remix";
import ArrowRight from "~/components/shared/ArrowRight";
import LogoWithBackground from "~/components/shared/LogoWithBackground";
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

  const bgImage = willAttend ? "thank-you-bg.jpg" : "gosh-bg.png";

  return (
    <Section
      id="invitation-success"
      maxH="100vh"
      backgroundImage={`url(/images/${bgImage})`}
    >
      <Grid h="100%" padding="2rem" gridTemplateRows=".5fr 1fr .25fr">
        <LogoWithBackground />
        <Outlet />
        <Center p="1.5rem">
          <Link to="/">
            <Button bg="secondary.500" rightIcon={<ArrowRight />}>
              Voltar à página inicial
            </Button>
          </Link>
        </Center>
      </Grid>
    </Section>
  );
}
