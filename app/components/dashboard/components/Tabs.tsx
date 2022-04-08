import { Flex, Grid } from "@chakra-ui/react";

export default function Tabs({ children }: { children: React.ReactNode }) {
  return (
    // <Flex w="100%" mb="2rem" className="tabs" wrap={"wrap"} gap=".5rem">
    //   {children}
    // </Flex>
    <Grid
      className="tabs"
      gridTemplateColumns={"repeat(auto-fit, minmax(120px, auto))"}
      // w="100%"
      mb="2rem"
      gap=".5rem"
    >
      {children}
    </Grid>
  );
}
