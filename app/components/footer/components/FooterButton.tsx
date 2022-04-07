import { Flex, Grid, HStack, Text } from "@chakra-ui/react";
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
    <Link to={to} style={{ width: "100%", maxWidth: "150px" }}>
      <Grid
        bg={bg}
        gridTemplateColumns="1fr auto"
        borderRadius="5px"
        p=".5rem .75rem"
        gap={spacing}
        shadow="md"
        alignItems="center"
      >
        <HStack>
          {leftIcon}
          <Text fontSize="14px">{text}</Text>
        </HStack>
        <ArrowRight size={16} />
      </Grid>
    </Link>
  );
}
