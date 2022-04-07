import { Box, Center, Flex, Grid } from "@chakra-ui/react";
import { Link } from "remix";
import { MdOutlineInsertInvitation } from "react-icons/md";
import { HiOutlineMenu } from "react-icons/hi";
import LogoWebsite from "../shared/LogoWebsite";
import useIsOpen from "~/context/navigation-context/hooks/useIsOpen";
import settings from "~/modules/settings";

export default function Header() {
  return (
    <Grid
      as="header"
      gridTemplateColumns="1fr 1fr 1fr"
      w="100vw"
      h={settings.app.styles.headerHeight}
      position="fixed"
      top={0}
      left={0}
      right={0}
      alignContent="center"
      borderColor="red.500"
      paddingInline="1.5rem"
      zIndex={999}
      backdropFilter="blur(2px)"
    >
      <Flex justify="flex-start" align="center">
        <Link to="/#invitation-claim">
          <MdOutlineInsertInvitation size={24} color="#4E4E4E" />
        </Link>
      </Flex>
      <Center>
        <LogoWebsite />
      </Center>
      <Flex justify="flex-end" align="center" color="#4E4E4E">
        <HamburgerMenu />
      </Flex>
    </Grid>
  );
}

function HamburgerMenu() {
  const { isOpen, setIsOpen } = useIsOpen();

  function onOpenMenu() {
    setIsOpen(!isOpen);
  }

  return <HiOutlineMenu size={24} onClick={onOpenMenu} />;
}
