import { Button, Center, Flex, Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, MetaFunction } from "remix";
import ThankYou from "~/components/response-page/ThankYou";
import ArrowRight from "~/components/shared/ArrowRight";
import BaseHeading from "~/components/shared/Headings";
import LogoWithBackground from "~/components/shared/LogoWithBackground";
import Section from "~/components/shared/Section";
import useWillAttendFormData from "~/context/invitation-context/hooks/useWillAttendFormData";
import settings from "~/modules/settings";

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
        {willAttend && <ThankYou />}
        {!willAttend && <Gosh />}

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

function Gosh() {
  return (
    <Center flexDirection="column" p="2rem" justifyContent="space-between">
      <Flex direction="column" gap=".25rem" justify="center" align="center">
        <BaseHeading fontSize="38px" fontWeight="700" textAlign="center">
          Poxa!! <br />
          Que pena...
        </BaseHeading>
      </Flex>
      <Flex
        direction="column"
        gap="1rem"
        justify="center"
        align="center"
        paddingInline="1rem"
      >
        <Text textAlign="center">
          Não importa, obrigado de qualquer forma pela resposta e esperamos que
          você possa mudar de idéia nos próximos dias...
        </Text>
        <Text textAlign="center">
          Por favor, note que podemos aceitar novos convidados no máximo até{" "}
          <Text as="span" fontWeight={700}>
            {settings.invitationConfirmationWithinHumanReadable}
          </Text>
        </Text>
      </Flex>
      <Flex direction="column" gap="1rem" justify="center" align="center">
        <Text fontSize="14px" textTransform="uppercase" letterSpacing="1px">
          Casamento em {settings.eventFullDateHumanReadable}
        </Text>
      </Flex>
    </Center>
  );
}
