import { Box, Center, Flex, Text } from "@chakra-ui/react";
import { Link } from "remix";

import BaseHeading from "../../shared/Headings";
import Section from "../../shared/Section";

import settings from "~/modules/settings";

export default function InvitationSection() {
  // difference in days between now and event date
  const daysUntilEvent = Math.floor(
    (new Date(settings.eventDate).getTime() - new Date().getTime()) / 86400000
  );

  return (
    <Section id="invitation-claim" backgroundColor="secondary.500">
      <Center h="100%">
        <Flex direction="column" pl="2rem" pr="2rem" gap="7rem">
          <Flex direction="column" gap="1rem">
            <BaseHeading as="h2" fontSize="38px" fontWeight="700">
              Confirme sua presença
            </BaseHeading>
            <Text
              fontSize="24px"
              fontWeight="400"
              color="text.500"
              lineHeight="1"
            >
              Por favor, reserve <br />
              um momento e responda <br />
              ao nosso convite
            </Text>
          </Flex>
          <Flex direction="column" gap="1rem" align="center">
            <Link to="/invitation">
              <Box w="300px" h="65px" position="relative">
                <ButtonShadow />
                <ButtonInvitation />
              </Box>
            </Link>
            <Text color="text.500" lineHeight={1.2} textAlign="center">
              Podemos aceitar confirmações <br /> até{" "}
              <Text as="span" fontWeight={600}>
                {settings.invitationConfirmationWithin}
              </Text>
            </Text>
          </Flex>
          <Text
            fontSize="20px"
            fontWeight="400"
            color="text.500"
            lineHeight="1"
            textAlign="center"
          >
            Faltam{" "}
            <Text
              as="span"
              fontWeight={600}
              fontSize="110%"
              color="black"
            >{`${daysUntilEvent} dias`}</Text>{" "}
            para o evento
          </Text>
        </Flex>
      </Center>
    </Section>
  );
}

function ButtonInvitation() {
  return (
    <Box
      w="100%"
      h="100%"
      bg="primary.500"
      borderRadius="5px"
      zIndex={1}
      position="absolute"
    >
      <Text
        fontSize="24px"
        lineHeight="1"
        color="white"
        textTransform="uppercase"
        textAlign="center"
        pt="1rem"
        pb="1rem"
      >
        Clique aqui
      </Text>
    </Box>
  );
}

function ButtonShadow() {
  return (
    <Box
      w="100%"
      h="100%"
      bg="white"
      borderRadius="5px"
      position="absolute"
      top="-10px"
      left="10px"
    ></Box>
  );
}
