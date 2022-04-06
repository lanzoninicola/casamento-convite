import { Box, Center, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "remix";

export default function LogoWebsite({ ...props }: { [key: string]: any }) {
  return (
    <VStack spacing={1} {...props}>
      <Link to="/#hero">
        <Image src={`/images/logo-50.png`} alt="logo" />
      </Link>
      <Text
        fontSize="10px"
        fontWeight={700}
        textTransform="uppercase"
        letterSpacing="5%"
      >
        Gustavo & Kelly
      </Text>
    </VStack>
  );
}
