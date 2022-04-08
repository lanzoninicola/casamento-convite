import { Text } from "@chakra-ui/react";

export default function StatHelpText({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Text fontSize="12px" color="gray.500" lineHeight={1} {...props}>
      {children}
    </Text>
  );
}
