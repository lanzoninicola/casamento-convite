import { Center, Divider, Flex, IconButton, Text } from "@chakra-ui/react";
import { MdOutlineClose } from "react-icons/md";
import { RiHistoryLine } from "react-icons/ri";

import { Link } from "remix";
import useIsOpen from "~/context/navigation-context/hooks/useIsOpen";

export default function MobileNavigationMenu() {
  const { isOpen } = useIsOpen();

  return (
    <>
      {isOpen && (
        <Flex
          h="100vh"
          w="100vw"
          // bg="secondary.500"
          backdropFilter="blur(15px)"
          position="fixed"
          top={0}
          left={0}
          zIndex={999}
          paddingBlock="6rem"
          paddingInline="2rem"
        >
          <Flex
            h="100%"
            w="100%"
            direction="column"
            align="flex-end"
            gap="1rem"
          >
            <NavItem to="/#our-story">Nossa Historia</NavItem>
            <Divider borderColor="black" />
            <NavItem to="/#photo-gallery">Galeria de foto</NavItem>
            <Divider borderColor="black" />
            <NavItem to="/#lunch-place">Almoçamos juntos</NavItem>
            <Divider borderColor="black" />
            <NavItem to="/#invitation-claim">Quero participar</NavItem>
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

function NavItem({
  children,
  to,
  leftIcon,
  rightIcon,
  ...props
}: {
  children: React.ReactNode;
  to: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;

  [key: string]: any;
}) {
  return (
    <Link to={to} {...props}>
      <Flex direction="row" gap="1rem" alignContent="center">
        {leftIcon}
        <Text
          fontSize="22px"
          color="black"
          letterSpacing="2px"
          fontWeight="400"
          {...props}
        >
          {children}
        </Text>
        {rightIcon}
      </Flex>
    </Link>
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
