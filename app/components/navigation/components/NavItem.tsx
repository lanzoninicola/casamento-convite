import { Flex, Text } from "@chakra-ui/react";
import { Link } from "remix";
import useIsOpen from "~/context/navigation-context/hooks/useIsOpen";

export default function NavItem({
  children,
  to,
  fontSize = "22px",
  color = "black",
  letterSpacing = "2px",
  spacing = "1rem",
  leftIcon,
  rightIcon,
  ...props
}: {
  children: React.ReactNode;
  to: string;
  spacing?: string;
  fontSize?: string;
  color?: string;
  letterSpacing?: string;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;

  [key: string]: any;
}) {
  const { setIsOpen } = useIsOpen();

  function onNavItemClicked() {
    setIsOpen(false);
  }

  return (
    <Link to={to} onClick={onNavItemClicked}>
      <Flex direction="row" gap={spacing} alignContent="center">
        {leftIcon}
        <Text
          fontSize={fontSize}
          color={color}
          letterSpacing={letterSpacing}
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
