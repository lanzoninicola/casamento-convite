import { Grid, Box, HStack, Text, Flex, Image } from "@chakra-ui/react";
import BaseHeading from "~/components/shared/BaseHeadings";
import HighlightedText from "~/components/shared/HighlightedText";
import MapFrame from "~/components/shared/MapFrame";
import Section from "~/components/shared/Section";

export default function CeremonySection() {
  return (
    <Section id="ceremony" pt="2rem" bg="primary.500">
      <Grid gridTemplateRows="auto" padding="2rem" gap="1.5rem">
        <Box>
          <BaseHeading
            as="h2"
            fontSize="38px"
            fontWeight="700"
            letterSpacing="-1px"
          >
            Casamento
          </BaseHeading>
          <HighlightedText
            bg="secondary.500"
            fontWeight={700}
            top={2}
            color="grey.50"
          >
            dia 21 Maio 2022 as 10 horas.
          </HighlightedText>
        </Box>
        <Flex direction="column" gap="1rem">
          <Text fontSize="18px" lineHeight={1.2} letterSpacing="-.5px">
            Nossa cerimonia será diferente do <br />
            programado à alguns meses atrás.
          </Text>
          <Text fontSize="18px" lineHeight={1.2} letterSpacing="-.5px">
            Nossa união será celebrada de forma <br />
            íntima e discreta no Cartório Vieira <br />
            <Text
              as="span"
              fontSize="18px"
              fontWeight={700}
              lineHeight={1.2}
              letterSpacing="-.5px"
            >
              apenas com os padrinhos e os pais.
            </Text>
          </Text>
          <Text
            fontSize="18px"
            lineHeight={1.2}
            letterSpacing="-.5px"
            fontWeight={700}
          >
            Mas no almoço estaremos todos juntos, amigos e familiares.
          </Text>
        </Flex>
      </Grid>
      <Box mt="-80px">
        <Image src="/images/wedding-bg.png" alt="Mapa do casamento" />
      </Box>
    </Section>
  );
}
