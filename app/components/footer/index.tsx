import { Box, Divider, Grid } from "@chakra-ui/react";
import LogoWebsite from "../shared/LogoWebsite";
import DeveloperAuthor from "./components/DeveloperAuthor";
import FooterCashGift from "./components/FooterCashGift";
import FooterMenu from "./components/FooterMenu";
import FooterRightColumn from "./components/FooterRightColumn";

export default function Footer() {
  return (
    <Box as="footer" mt="4rem" bg="secondary.500" padding="4rem 2rem">
      <Grid gridTemplateRows="repeat(7, auto)" gap="1rem">
        <LogoWebsite mb="2rem" />
        <Divider color="gray.200" />
        <Grid gridTemplateColumns="1fr 1fr" marginBlock="2rem">
          <FooterMenu />
          <FooterRightColumn />
        </Grid>
        <Divider color="gray.200" />
        <Grid gridTemplateColumns="1fr 1fr" gap="1rem" marginBlock="2rem">
          <FooterCashGift />
        </Grid>
        <Divider color="gray.200" />
        <DeveloperAuthor />
      </Grid>
    </Box>
  );
}
