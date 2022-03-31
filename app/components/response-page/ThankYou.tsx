import { Center, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import useGuestNameFormData from "~/context/invitation-context/hooks/useGuestNameFormData";
import useGuestsFormData from "~/context/invitation-context/hooks/useGuestsFormData";
import settings from "~/modules/settings";
import BaseHeading from "../shared/Headings";

export default function ThankYou() {
  const { guestName } = useGuestNameFormData();
  const { guests } = useGuestsFormData();

  const [certStatement, setCertStatement] = useState<string>(
    "Você ganhou o certificado de:"
  );
  const [certRole, setCertRole] = useState<string>("Convidado");

  useEffect(() => {
    if (guests > 1) {
      setCertStatement("Todos vocês ganharam o certificado de:");
      setCertRole("Convidados");
    }
  }, [guestName, guests]);

  return (
    <Center flexDirection="column" p="2rem" justifyContent="space-between">
      <Flex direction="column" gap=".25rem" justify="center" align="center">
        <BaseHeading fontSize="38px" fontWeight="700">
          Obrigado
        </BaseHeading>
        {guestName !== "" && (
          <BaseHeading fontSize="32px" fontWeight="400" color="primary.500">
            {guestName}
          </BaseHeading>
        )}
      </Flex>
      <Flex direction="column" gap=".25rem" justify="center" align="center">
        <Text>{certStatement}</Text>
        <BaseHeading
          fontSize="24px"
          fontWeight="700"
          textDecoration="underline"
          textTransform="uppercase"
        >
          {certRole}
        </BaseHeading>
      </Flex>
      <Flex direction="column" gap="1rem" justify="center" align="center">
        <Text textAlign="center">
          Somos muito gratos por estarmos na companhia de{" "}
          <Text as="span" fontWeight={700}>
            {guests > 1 ? "vocês" : "você"}
          </Text>
          {", "}
          juntos com amigos e familiares no dia mais feliz de nossa nova vida.
        </Text>
      </Flex>
      <Flex direction="column" gap="1rem" justify="center" align="center">
        <Text fontSize="14px" textTransform="uppercase" letterSpacing="1px">
          Pato Branco, {settings.eventFullDateHumanReadable}
        </Text>
      </Flex>
    </Center>
  );
}
