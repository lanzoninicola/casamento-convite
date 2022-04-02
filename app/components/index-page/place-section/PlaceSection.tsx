import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import { SiGooglemaps, SiWaze } from "react-icons/si";
import MapFrame from "~/components/shared/MapFrame";
import SafeArea from "~/components/shared/SafeArea";

import BaseHeading from "../../shared/BaseHeadings";
import Section from "../../shared/Section";

export default function PlaceSection() {
  const address =
    "Chacara Zanin, Linha São Braz São, Estr. Mun. Lisando São Braz, Pato Branco - PR, 85504-000";

  return (
    <Section id="lunch-place">
      <SafeArea top={75}>
        <Center h="100%" w="100%">
          <Flex direction="column" gap="1rem">
            <BaseHeading
              as="h2"
              fontSize="38px"
              fontWeight="400"
              letterSpacing="-1px"
            >
              Almoçamos juntos
            </BaseHeading>
            <BaseHeading
              as="h3"
              fontSize="20px"
              fontWeight="400"
              mb=".5rem"
              letterSpacing="-1px"
            >
              a partir das 11 horas da manhã.
            </BaseHeading>
            <Box>
              <Text fontSize="20px" fontWeight="600" color="text.500">
                Chacara Zanin
              </Text>
              <Text fontSize="16px" lineHeight={1.1}>
                Linha São Braz São, <br />
                Estr. Mun. Lisando São Braz, <br />
                Pato Branco - PR, 85504-000
              </Text>
            </Box>
            <HStack>
              <GoogleMapsButton address={address} />
              <WazeButton address={address} />
            </HStack>

            <Center>
              <MapFrame
                w={300}
                h={300}
                gUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14322.944517383236!2d-52.6759223!3d-26.1727218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6596c3e5b0170224!2sCh%C3%A1cara%20Zanin!5e0!3m2!1spt-BR!2sbr!4v1648582944658!5m2!1spt-BR!2sbr"
              />
            </Center>
          </Flex>
        </Center>
      </SafeArea>
    </Section>
  );
}

function GoogleMapsButton({ address }: { address: string }) {
  const baseUrl = "https://www.google.com/maps/dir/?api=1&destination=";

  return (
    <Link href={`${baseUrl}${address}`} isExternal>
      <Button colorScheme="blue" leftIcon={<SiGooglemaps />}>
        Ir agora
      </Button>
    </Link>
  );
}

function WazeButton({ address }: { address: string }) {
  const baseUrl =
    "https://ul.waze.com/ul?place=ChIJK5YS0J1U5ZQRJAIXsOXDlmU&ll=-26.17272180%2C-52.67592230&navigate=yes";

  return (
    <Link href={`${baseUrl}${address}`} isExternal>
      <Button colorScheme="blue" leftIcon={<SiWaze />}>
        Ir agora
      </Button>
    </Link>
  );
}
