import { Box, Stat } from "@chakra-ui/react";

export default function StatBox({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Box
      borderRadius="20px"
      bg="primary.500"
      paddingBlock=".5rem"
      paddingInline="1rem"
      {...props}
    >
      <Stat>{children}</Stat>
    </Box>
  );
}
