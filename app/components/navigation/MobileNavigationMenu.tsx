import { Center, Divider, Flex, IconButton, Text } from "@chakra-ui/react";
import { MdOutlineClose } from "react-icons/md";
import { RiHistoryLine } from "react-icons/ri";

import { Link } from "remix";
import useIsOpen from "~/context/navigation-context/hooks/useIsOpen";
import { browserName } from "react-device-detect";
import NavItem from "./components/NavItem";

export interface BackgroundStyle {
  bg?: string;
  backdropFilter?: string;
}

export default function MobileNavigationMenu() {
  const { isOpen } = useIsOpen();

  function getBackgroundStyle(): BackgroundStyle {
    const style: BackgroundStyle = {};

    if (browserName == "Firefox") {
      style.bg = "primary.500";
    } else {
      style.backdropFilter = "blur(40px)";
    }

    return style;
  }

  return (
    <>
      {isOpen && (
        <Flex
          h="auto"
          w="100vw"
          position="fixed"
          top={0}
          left={0}
          zIndex={999}
          paddingBlock="6rem"
          paddingInline="2rem"
          {...getBackgroundStyle()}
        >
          <Flex
            h="100%"
            w="100%"
            direction="column"
            align="flex-end"
            gap="1rem"
            mb="3rem"
          >
            <NavItem to="/#our-story">Nossa Historia</NavItem>
            <Divider borderColor="black" />
            <NavItem to="/#ceremony">Casamento</NavItem>
            <Divider borderColor="black" />
            <NavItem to="/#lunch-place">Almoçamos juntos</NavItem>
            <Divider borderColor="black" />
            <NavItem to="/#revelation">Revelação</NavItem>
            <Divider borderColor="black" />
            <NavItem to="/#invitation-claim">Quero participar</NavItem>
            <Divider borderColor="black" />
            <NavItem to="/#photo-gallery">Galeria de fotos</NavItem>
            <Divider borderColor="black" />
          </Flex>
          <Center>
            <CloseMenu />
          </Center>
        </Flex>
      )}
    </>
  );
}

function CloseMenu() {
  const { setIsOpen } = useIsOpen();

  function onCloseMenu() {
    setIsOpen(false);
  }

  return (
    <IconButton
      h="32px"
      bg="black"
      aria-label="Fecha menu"
      size="lg"
      icon={<MdOutlineClose color="white" />}
      position="absolute"
      bottom="4rem"
      right="2rem"
      onClick={onCloseMenu}
    />
  );
}
