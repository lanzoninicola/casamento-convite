import { Button, Center, Flex, Text } from "@chakra-ui/react";
import { Link } from "remix";
import ArrowRight from "~/components/shared/ArrowRight";
import BaseHeading from "~/components/shared/BaseHeadings";
import usePulseAnimation from "~/components/shared/hooks/usePulseAnimation";
import settings from "~/modules/settings";

// TODO: if miss the id param in the url, redirect to the home page

export default function Gosh() {
  return (
    <Center flexDirection="column" justifyContent="space-between">
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
        p="2rem"
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
      <Center>
        <NextButton />
      </Center>
    </Center>
  );
}

function NextButton() {
  const pulseAnimationCSS = usePulseAnimation(211, 171, 158);

  return (
    <Link to="/#photo-gallery">
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
