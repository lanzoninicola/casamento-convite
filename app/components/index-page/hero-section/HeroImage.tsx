import { Box, Center, Flex, Image, Img } from "@chakra-ui/react";

export default function HeroImage() {
  return (
    <Box
      flexGrow={1}
      h="100%"
      w="100%"
      background={'url("/images/hero-bg.png")'}
      backgroundRepeat="no-repeat"
      backgroundPosition={"top center"}
    >
      {/* <Center>
        <Image src={`/images/hero-bg.png`} alt="Hero background" />
      </Center> */}
    </Box>
  );
}
