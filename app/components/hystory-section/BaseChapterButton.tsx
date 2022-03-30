import { Box, Center, Flex } from "@chakra-ui/react";

export default function BaseChapterButton({
  children,
  ...props
}: {
  children: React.ReactNode;
  [x: string]: any;
}) {
  return (
    <Box
      w="max-content"
      h="40px"
      border="2px solid"
      borderColor="primary.500"
      borderRadius="5px"
      pl="1rem"
      pr="1rem"
      {...props}
    >
      <Center h="100%">{children}</Center>
    </Box>
  );
}
