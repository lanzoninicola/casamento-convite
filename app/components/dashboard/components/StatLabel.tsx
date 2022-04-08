import { Text } from "@chakra-ui/react";

export default function StatLabel({ children }: { children: React.ReactNode }) {
  return (
    <Text fontSize="16px" fontWeight="bold" lineHeight={1} letterSpacing="-1px">
      {children}
    </Text>
  );
}
