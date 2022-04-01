import { Box } from "@chakra-ui/react";

export default function SafeArea({
  children,
  top,
  bottom,
}: {
  children: React.ReactNode;
  top?: number;
  bottom?: number;
}) {
  return (
    <Box pt={top} pb={bottom}>
      {children}
    </Box>
  );
}
