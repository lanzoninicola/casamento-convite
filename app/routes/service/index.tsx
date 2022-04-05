import { Grid } from "@chakra-ui/react";
import React from "react";
import { Link } from "remix";
import LargeCard from "~/components/shared/LargeCard";
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
          <LargeCard bg="linear-gradient(86deg, rgba(197,172,206,1) 43%, rgba(211,171,158,1) 100%);">
            Utilities
          </LargeCard>
        </Link>
        <Link to="/service/statistics">
          <LargeCard bg="linear-gradient(69deg, rgba(211,171,158,1) 43%, rgba(197,172,206,1) 100%);">
            Fiscalização
          </LargeCard>
        </Link>
      </Grid>
    </Section>
  );
}