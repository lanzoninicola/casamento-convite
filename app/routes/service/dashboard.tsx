import { Container, Center } from "@chakra-ui/react";
import { Outlet } from "remix";
import BaseHeading from "~/components/shared/BaseHeadings";

export default function Dashboard() {
  return (
    <Container padding="1rem" bg="gray.50" gap="1rem">
      <Center>
        <BaseHeading
          mb="2rem"
          fontSize="28px"
          fontWeight="700"
          letterSpacing="-0.02rem"
        >
          Relatorio
        </BaseHeading>
      </Center>
      <Outlet />
    </Container>
  );
}
