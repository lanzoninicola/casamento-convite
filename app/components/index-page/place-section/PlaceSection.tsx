import { Box, Button, Grid, HStack, Link, Text } from "@chakra-ui/react";
import { SiGooglemaps, SiWaze } from "react-icons/si";
import HighlightedText from "~/components/shared/HighlightedText";
import MapFrame from "~/components/shared/MapFrame";

import BaseHeading from "../../shared/BaseHeadings";
import Section from "../../shared/Section";

export default function PlaceSection() {
  const address =
    "Chacara Zanin, Linha São Braz São, Estr. Mun. Lisando São Braz, Pato Branco - PR, 85504-000";

  return (
    <Section id="lunch-place" pt="8rem" h="120vh">
      <Grid gridTemplateRows="auto" padding="2rem" gap="1rem">
        <Box>
          <BaseHeading
            as="h2"
            fontSize="38px"
            fontWeight="700"
            letterSpacing="-1px"
          >
            Almoçamos juntos
          </BaseHeading>
          <HighlightedText
            bg="primary.500"
            fontWeight={700}
            top={2}
            color="grey.50"
            fontSize="20px"
          >
            a partir das 11 horas da manhã.
          </HighlightedText>
        </Box>
        <Box>
          <Text fontSize="20px" fontWeight="600" color="text.500">
            Chácara Zanin
          </Text>
          <Text fontSize="18px" lineHeight={1.2} letterSpacing="-.5px">
            Linha São Braz, <br />
            Estr. Mun. Lisando São Braz, <br />
            Pato Branco - PR, 85504-000
          </Text>
        </Box>
        <HStack>
          <GoogleMapsButton address={address} />
          <WazeButton address={address} />
        </HStack>

        <MapFrame
          maxH="400px"
          gUrl="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14322.944517383236!2d-52.6759223!3d-26.1727218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6596c3e5b0170224!2sCh%C3%A1cara%20Zanin!5e0!3m2!1spt-BR!2sbr!4v1648582944658!5m2!1spt-BR!2sbr"
        />
      </Grid>
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
