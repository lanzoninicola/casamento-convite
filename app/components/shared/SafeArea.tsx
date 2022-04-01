import { Box } from "@chakra-ui/react";

export default function SafeArea({
  children,
  top,
  bottom,
  ...props
}: {
  children: React.ReactNode;
  top?: number;
  bottom?: number;
  [key: string]: any;
}) {
  return (
    <Box className="safe-area" h="100%" pt={top} pb={bottom} {...props}>
      {children}
    </Box>
  );
}
