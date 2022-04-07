import { Box, Center, Flex } from "@chakra-ui/react";

export default function EllipseDecorator({
  children,
  repeat = 1,
  gap,
  ...props
}: {
  children?: React.ReactNode;
  repeat?: number;
  gap?: string;
  [x: string]: any;
}) {
  const sequence = Array.from({ length: repeat });

  const diameter = "clamp(15rem, -10.9615rem + 115.3846vw, 18.75rem)";

  return (
    <Flex w="100%" justify="center" position="relative" gap={gap}>
      {sequence.map((_, i) => {
        return (
          <Box key={i} w="auto" h="auto">
            <Center>
              <Box
                id="ellipse-decorator"
                position="relative"
                flexDirection="column"
                w={diameter}
                h={diameter}
                borderRadius="50%"
                textAlign="center"
                bg="black"
                gap="1.5rem"
                {...props}
              >
                {children}
              </Box>
            </Center>
          </Box>
        );
      })}
    </Flex>
  );
}
