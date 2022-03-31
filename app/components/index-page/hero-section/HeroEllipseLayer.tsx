import { Box, Text, Flex } from "@chakra-ui/react";
import EllipseDecorator from "../../shared/EllipseDecorator";
import HeroHeadline from "./HeroHeadline";

export default function HeroEllipseLayer() {
  return (
    <>
      <Flex h="100%" pt="20vh">
        <EllipseDecorator bg="secondary.500" diameter="300px">
          <Aside left="0">
            <AsideContent>
              <SpanText>Kelly</SpanText>
            </AsideContent>
          </Aside>
          <Aside right="0">
            <AsideContent>
              <SpanText>Gustavo</SpanText>
            </AsideContent>
          </Aside>
          <Flex justify="center" w="100%" position="absolute" top="-10%">
            <HeroHeadline></HeroHeadline>
          </Flex>
        </EllipseDecorator>
      </Flex>
    </>
  );
}

function SpanText({ children }: { children: React.ReactNode }) {
  return (
    <Text
      textTransform="uppercase"
      fontSize="12px"
      letterSpacing="0.6em"
      color="text.500"
      position="absolute"
      bottom="50%"
      left="50%"
      transformOrigin="0 0"
      transform={`rotate(-90deg) translate(-50%, -50%)`}
    >
      {children}
    </Text>
  );
}

function AsideContent({ children }: { children: React.ReactNode }) {
  return (
    <Box w="100%" h="100%" display="block" position="relative">
      {children}
    </Box>
  );
}

function Aside({
  children,
  ...props
}: {
  children: React.ReactNode;
  [x: string]: any;
}) {
  return (
    <Box w="50px" h="100%" position="absolute" top="0" {...props}>
      {children}
    </Box>
  );
}
