import { Box, Button, Center, Flex, Grid, Text } from "@chakra-ui/react";
import { Link } from "remix";
import BaseHeading from "~/components/shared/BaseHeadings";
import HighlightedText from "~/components/shared/HighlightedText";
import useRemixLocalStorage from "~/components/shared/hooks/useRemixLocalStorage";
import { REVELATION_GAME_LOCAL_STORAGE_KEY } from "~/modules/invitations/constants";

import BabyOption from "./BabyOption";

export type BabySex = "boy" | "girl";

export default function RevelationGame() {
  const [babySex, setBabySex] = useRemixLocalStorage<BabySex | null>(
    REVELATION_GAME_LOCAL_STORAGE_KEY
  );

  return (
    <Grid
      h="100%"
      gridTemplateRows="1fr 1fr 1fr"
      gap="1.5rem"
      paddingInline={"1rem"}
    >
      <Center flexDirection="column" gap=".5rem">
        <BaseHeading color="text.500" textAlign="center">
          O que você acha que é
        </BaseHeading>
        <Text
          fontSize="18px"
          textAlign="center"
          textTransform="uppercase"
          letterSpacing="1px"
        >
          Deixe sua opinião, clicando em <br /> um dos dois ursinhos e concorra{" "}
          <br />
          <HighlightedText bg="primary.500">
            a uma troca de frauda
          </HighlightedText>
        </Text>
      </Center>

      <Flex direction="row" gap="2rem" paddingInline="2rem">
        <BabyOption
          sex="girl"
          onClick={() => setBabySex("girl")}
          opacity={babySex === "boy" ? 0.3 : 1}
        />
        <BabyOption
          sex="boy"
          onClick={() => setBabySex("boy")}
          opacity={babySex === "girl" ? 0.3 : 1}
        />
      </Flex>

      <Box w="100%">
        {babySex && (
          <Text
            textAlign="center"
            lineHeight="1"
            fontWeight={700}
            fontSize="14px"
            mb="0.5rem"
          >
            Ahhh... Então você acha que é{" "}
            {(babySex === "boy" && `um menino...`) ||
              (babySex === "girl" && `uma menina...`)}
          </Text>
        )}
        <Link to={`/revelation`}>
          <Button bg="secondary.500" disabled={babySex === undefined} w="100%">
            Envia
          </Button>
        </Link>
      </Box>
    </Grid>
  );
}
