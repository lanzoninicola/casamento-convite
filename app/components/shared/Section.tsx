import { Container } from "@chakra-ui/react";
import SafeArea from "./SafeArea";

export default function Section({
  children,
  ...props
}: {
  children: React.ReactNode;
  [x: string]: any;
}) {
  return (
    <Container
      as="section"
      w="100vw"
      h="100vh"
      position="relative"
      {...props}
      paddingInline="0"
      scrollSnapAlign="start"
    >
      <SafeArea top={75}>{children}</SafeArea>
    </Container>
  );
}
