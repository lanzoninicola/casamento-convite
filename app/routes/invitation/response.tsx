import { Box, Button, Center, Flex, Grid, Text, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "remix";
import ThankYou from "~/components/response-page/ThankYou";
import ArrowRight from "~/components/shared/ArrowRight";
import BaseHeading from "~/components/shared/Headings";
import LogoWithBackground from "~/components/shared/LogoWithBackground";
import Section from "~/components/shared/Section";
import useGuestNameFormData from "~/context/invitation-context/hooks/useGuestNameFormData";
import useGuestsFormData from "~/context/invitation-context/hooks/useGuestsFormData";
import useWillAttendFormData from "~/context/invitation-context/hooks/useWillAttendFormData";
import settings from "~/modules/settings";

export default function Response() {
  const { willAttend } = useWillAttendFormData();

  return (
    <Section
      id="invitation-success"
      maxH="100vh"
      backgroundImage={`url(/images/thank-you-bg.jpg)`}
    >
      <Grid h="100%" padding="2rem" gridTemplateRows=".5fr 1fr .25fr">
        <LogoWithBackground />
        <ThankYou />
        <Center p="1.5rem">
          <Link to="/">
            <Button bg="primary.500" rightIcon={<ArrowRight />}>
              Voltar à página inicial
            </Button>
          </Link>
        </Center>
      </Grid>
    </Section>
  );
}
