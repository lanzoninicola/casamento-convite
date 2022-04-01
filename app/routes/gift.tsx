import { Box, Center, Image } from "@chakra-ui/react";
import Section from "~/components/shared/Section";

export default function Gift() {
  return (
    <Section padding="1rem">
      <Center h="100%">
        <Box w="150px" h="150px">
          <Image src="/images/pix-qrcode.jpeg" alt="Gift" />
        </Box>
      </Center>
    </Section>
  );
}
