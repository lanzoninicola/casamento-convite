import { Text } from "@chakra-ui/react";

export default function FooterText({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Text
      as="span"
      fontSize="14px"
      color="text.500"
      letterSpacing="-1px"
      fontWeight={700}
    >
      {children}
    </Text>
  );
}
