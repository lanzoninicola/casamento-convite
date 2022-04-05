import { Center, Button, VStack } from "@chakra-ui/react";
import { Link } from "remix";
import Section from "~/components/shared/Section";

export default function ServiceIndex() {
  return (
    <Section>
      <Center w="100vw" h="100vh">
        <VStack spacing={8} w="100%">
          <Link to="/service/me">
            <Button type="submit" bg="red.700" color="white" w="100%">
              UTILITIES
            </Button>
          </Link>
          <Link to="/service/stats">
            <Button type="submit" bg="green.700" color="white" w="100%">
              FISCALIZAÇÃO
            </Button>
          </Link>
        </VStack>
      </Center>
    </Section>
  );
}
