import { Box, Flex } from "@chakra-ui/react";

export default function EllipseDecorator({
  children,
  diameter,
  repeat = 1,
  gap,
  ...props
}: {
  children?: React.ReactNode;
  diameter?: string;
  repeat?: number;
  gap?: string;
  [x: string]: any;
}) {
  const sequence = Array.from({ length: repeat });

  return (
    <Flex w="100%" justify="center" position="relative" gap={gap}>
      {sequence.map((_, i) => {
        return (
          <Box
            key={i}
            w={diameter || "100px"}
            h={diameter || "100px"}
            position="relative"
          >
            <Box
              id="ellipse-decorator"
              w="100%"
              h="100%"
              borderRadius="50%"
              textAlign="center"
              bg="black"
              {...props}
            ></Box>
            {children}
          </Box>
        );
      })}
    </Flex>
  );
}
