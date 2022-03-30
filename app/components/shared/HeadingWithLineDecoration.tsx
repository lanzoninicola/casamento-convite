import { Box, Image, Flex, Text } from "@chakra-ui/react";
import BaseHeading from "./Headings";

export function HeadingWithLineDecoration({
  children,
  ...props
}: {
  children: React.ReactNode;
  [x: string]: any;
}) {
  return (
    <>
      <Flex direction="row" gap=".25rem">
        <TextLineDecoration />
        <BaseHeading as="h3" fontSize="24px" {...props}>
          {children}
        </BaseHeading>
        <TextLineDecoration />
      </Flex>
    </>
  );
}

export function TextWithLineDecoration({
  children,
  ...props
}: {
  children: React.ReactNode;
  [x: string]: any;
}) {
  return (
    <>
      <Flex direction="row" gap=".5rem">
        <TextLineDecoration />
        <Text {...props}>{children} </Text>
        <TextLineDecoration />
      </Flex>
    </>
  );
}

export function TextLineDecoration() {
  return (
    <Box w="25px">
      <Image src="/images/text-line-decoration.svg" w="100%" h="100%" />
    </Box>
  );
}
