import {
  Box,
  Center,
  Flex,
  Grid,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link } from "remix";

import BaseHeading from "../../shared/BaseHeadings";
import Section from "../../shared/Section";

import settings from "~/modules/settings";
import SafeArea from "~/components/shared/SafeArea";
import HighlightedText from "~/components/shared/HighlightedText";

export default function InvitationSection() {
  // difference in days between now and event date
  const daysUntilEvent = Math.floor(
    (new Date(settings.eventDate).getTime() - new Date().getTime()) / 86400000
  );

  return (
    <Section id="invitation-claim" backgroundColor="secondary.500">
      <SafeArea>
        <Grid templateRows="1fr 1fr .5fr" h="100%" padding="2rem">
          <Flex direction="column" gap="1rem">
            <BaseHeading as="h2" fontSize="38px" fontWeight="700">
              Confirme sua presença
            </BaseHeading>

            <Text
              fontSize="20px"
              color="text.500"
              lineHeight={1.2}
              fontWeight={700}
            >
              Podemos aceitar confirmações <br />{" "}
              <HighlightedText bg="primary.500" left={5}>
                até {settings.invitationConfirmationWithinHumanReadable}
              </HighlightedText>
            </Text>
            <Text
              fontWeight="400"
              color="text.500"
              fontSize="16px"
              lineHeight={1.2}
              letterSpacing="-.5px"
            >
              Por favor, reserve um momento <br /> e responda ao nosso convite
            </Text>
          </Flex>
          <Center>
            <Link to="/invitation">
              <Box w="300px" h="50px" position="relative">
                <ButtonShadow />
                <ButtonInvitation />
              </Box>
            </Link>
          </Center>
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
        </Grid>
      </SafeArea>
    </Section>
  );
}

function ButtonInvitation() {
  return (
    <Center
      w="100%"
      h="100%"
      bg="primary.500"
      borderRadius="5px"
      zIndex={1}
      position="absolute"
    >
      <Text
        fontSize="20px"
        lineHeight="1"
        color="text.500"
        textTransform="uppercase"
        textAlign="center"
        fontWeight={700}
        letterSpacing="1px"
      >
        Clique aqui
      </Text>
    </Center>
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
      top="-5px"
      left="5px"
    ></Box>
  );
}
