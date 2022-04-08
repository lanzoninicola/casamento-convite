import { Text } from "@chakra-ui/react";

export default function StatNumber({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Text fontSize="32px" fontWeight="bold" {...props}>
      {children}
    </Text>
  );
}
