import { Center, Flex, Text } from "@chakra-ui/react";
import BaseHeading from "~/components/shared/BaseHeadings";
import settings from "~/modules/settings";

// TODO: if miss the id param in the url, redirect to the home page

export default function Gosh() {
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
