import { Box, Flex } from "@chakra-ui/react";

export default function EllipseDecorator({
  children,
  diameter,
  ...props
}: {
  children?: React.ReactNode;
  diameter?: string;
  [x: string]: any;
}) {
  return (
    <Flex w="100%" justify="center" position="relative">
      <Box w={diameter || "100px"} h={diameter || "100px"} position="relative">
        <Box
          id="ellip´se-decorator"
          w="100%"
          h="100%"
          borderRadius="50%"
          textAlign="center"
          {...props}
        ></Box>
        {children}
      </Box>
    </Flex>
  );
}
