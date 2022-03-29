import {
  Box,
  Button,
  ButtonSpinner,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";
import { Link } from "remix";
import { useContextSelector } from "use-context-selector";
import { HistoryContext } from "~/context/context";
import BaseHeading from "../shared/Headings";
import Section from "../shared/Section";

export default function InvitationSection() {
  const hasRead = useContextSelector(HistoryContext, (ctx) => ctx.hasRead);

  const eventDate = "2022-04-21";

  // difference in days between now and event date
  const daysUntilEvent = Math.floor(
    (new Date(eventDate).getTime() - new Date().getTime()) / 86400000
  );

  return (
    <>
      {hasRead && (
        <Section backgroundColor="secondary.500">
          <Center h="100%">
            <Flex direction="column" pl="1rem" pr="1rem" gap="7rem">
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
                  Por favor, reserve um momento e <br />
                  responda ao nosso <br />
                  convite
                </Text>
              </Flex>
              <Flex direction="column" gap="1rem">
                <Link to="/invitation">
                  <Box w="300px" h="65px" position="relative">
                    <ButtonShadow />
                    <ButtonInvitation />
                  </Box>
                </Link>
                <Text color="text.500" lineHeight={1.2} textAlign="center">
                  Podemos aceitar confirmações <br /> até{" "}
                  <Text as="span" fontWeight={600}>
                    15 de Abril 2022
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
      )}
    </>
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
