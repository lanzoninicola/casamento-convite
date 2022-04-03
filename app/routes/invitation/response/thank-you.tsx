import {
  Box,
  Center,
  Flex,
  Grid,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BaseHeading from "~/components/shared/BaseHeadings";
import useGuestNameFormData from "~/context/invitation-context/hooks/useGuestNameFormData";
import useGuestsFormData from "~/context/invitation-context/hooks/useGuestsFormData";
import settings from "~/modules/settings";

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
    <Grid gridTemplateRows="auto 1fr auto">
      <VStack spacing=".75rem">
        <BaseHeading fontSize="38px" fontWeight="700">
          Obrigado
        </BaseHeading>
        {guestName !== "" && (
          <BaseHeading fontSize="26px" fontWeight="400" color="text.500">
            {guestName}
          </BaseHeading>
        )}
      </VStack>
      <Center>
        <VStack spacing=".75rem" w="65vw">
          <Text fontWeight={700} textAlign="center">
            Querido Convidado,
          </Text>
          <Text fontSize="16px" lineHeight="1.2" textAlign="center">
            caso queria nos agraciar com um presente, saiba que:
          </Text>
          <Text
            fontSize="16px"
            lineHeight="1.3"
            textAlign="justify"
            fontStyle="italic"
            fontWeight={700}
          >
            "Nossa casa está prontiha
            <br />
            Já não cabe mais nadinha <br /> Mas a gente não é louco <br />
            De recusar uma ajudinha <br />
            Afinal quem é que nunca
            <br /> Precisou de uma graninha?"
          </Text>

          <Text fontSize="14px" lineHeight="1" textAlign={"center"}>
            Adicionamos um link para a página PIX na parte inferior do site.
          </Text>
        </VStack>
      </Center>

      <VStack>
        <Text fontSize="14px" textTransform="uppercase" letterSpacing="1px">
          Pato Branco, {settings.eventFullDateHumanReadable}
        </Text>
      </VStack>
    </Grid>
  );
}
