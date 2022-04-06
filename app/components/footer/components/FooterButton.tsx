import { Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "remix";
import ArrowRight from "~/components/shared/ArrowRight";

export default function FooterButton({
  text,
  to,
  leftIcon,
  bg = "gray.200",
  spacing,
}: {
  leftIcon: React.ReactElement;
  text: string;
  to: string;
  bg?: string;
  spacing?: string;
}) {
  return (
    <Link to={to}>
      <Flex
        bg={bg}
        justifyContent="space-between"
        borderRadius="5px"
        p=".25rem .5rem"
        gap={spacing}
        shadow="md"
      >
        <HStack>
          {leftIcon}
          <Text fontSize="14px">{text}</Text>
        </HStack>
        <ArrowRight size={16} />
      </Flex>
    </Link>
  );
}
