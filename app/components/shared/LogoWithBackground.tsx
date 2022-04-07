import { Center, Image, Text } from "@chakra-ui/react";

export default function LogoWithBackground({
  ...props
}: {
  [key: string]: any;
}) {
  return (
    <Center flexDirection="column" gap=".5rem" {...props}>
      <Image src={`/images/thank-you.png`} w="50px" />
      <Text
        fontSize="12px"
        textTransform="uppercase"
        letterSpacing="1.5px"
        fontWeight="700"
      >
        Gustavo & Kelly
      </Text>
    </Center>
  );
}
