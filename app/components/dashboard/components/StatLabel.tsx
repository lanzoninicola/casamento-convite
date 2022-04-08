import { Text } from "@chakra-ui/react";

export default function StatLabel({ children }: { children: React.ReactNode }) {
  return (
    <Text
      fontSize="clamp(0.85rem, -0.9451rem + 5.6098vw, 2rem)"
      fontWeight="bold"
      lineHeight={1}
      letterSpacing="-1px"
    >
      {children}
    </Text>
  );
}
