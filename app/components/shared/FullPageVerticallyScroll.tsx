import { Container } from "@chakra-ui/react";

/**
 * @description This let make the scroll smooth for each section
 * The height of below component must be the same as the height of the section
 *
 * Required: Each section must have the "scroll-snap-align: start;"
 */
export default function FullPageVerticallyScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      scrollSnapType="y mandatory"
      overflowY="scroll"
      h="100vh"
      p={0}
      position="relative"
    >
      {children}
    </Container>
  );
}
