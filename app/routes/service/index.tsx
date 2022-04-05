import {
  Center,
  Button,
  VStack,
  Box,
  Heading,
  Grid,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "remix";
import ArrowRight from "~/components/shared/ArrowRight";
import Section from "~/components/shared/Section";

export default function ServiceIndex() {
  return (
    <Section>
      <Grid
        templateColumns="repeat(1, 1fr)"
        gap={4}
        h="100vh"
        p="2rem"
        alignItems="center"
        bg="gray.100"
      >
        <Link to="/service/me">
          <Card bg="linear-gradient(86deg, rgba(197,172,206,1) 43%, rgba(211,171,158,1) 100%);">
            Utilities
          </Card>
        </Link>
        <Link to="/service/statistics">
          <Card bg="linear-gradient(69deg, rgba(211,171,158,1) 43%, rgba(197,172,206,1) 100%);">
            Fiscalização
          </Card>
        </Link>
      </Grid>
    </Section>
  );
}

function Card({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Flex
      justifyContent="space-between"
      w="100%"
      h="200px"
      borderRadius="10px"
      boxShadow="lg"
      p="1rem"
      {...props}
    >
      <Heading fontSize="38px" color="white">
        {children}
      </Heading>
      <CardArrowRight />
    </Flex>
  );
}

function CardArrowRight() {
  return (
    <Flex h="100%" alignItems="flex-end">
      <Center borderRadius="50%" border="1px solid white" h="50px" w="50px">
        <ArrowRight />
      </Center>
    </Flex>
  );
}
