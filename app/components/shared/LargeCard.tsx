import { Center, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ArrowRight from "~/components/shared/ArrowRight";

export default function LargeCard({
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
