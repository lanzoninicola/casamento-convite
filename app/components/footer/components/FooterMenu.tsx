import { Flex } from "@chakra-ui/react";
import FooterHeading from "./FooterHeading";
import FooterNavItem from "./FooterNavItem";

export default function FooterMenu() {
  return (
    <Flex direction="column" justify="center">
      <FooterHeading>Mapa do Site</FooterHeading>
      <FooterNavItem to="/#our-story">Nossa Historia</FooterNavItem>
      <FooterNavItem to="/#ceremony">Casamento</FooterNavItem>
      <FooterNavItem to="/#lunch-place">Almoçamos juntos</FooterNavItem>
      <FooterNavItem to="/#revelation">Revelação</FooterNavItem>
      <FooterNavItem to="/#invitation-claim">Quero participar</FooterNavItem>
      <FooterNavItem to="/#photo-gallery">Galeria de fotos</FooterNavItem>
    </Flex>
  );
}
