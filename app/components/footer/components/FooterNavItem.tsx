import NavItem from "~/components/navigation/components/NavItem";

export default function FooterNavItem({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <NavItem
      to={props.to}
      {...props}
      fontSize="16px"
      letterSpacing="0px"
      lineHeight="2"
    >
      {children}
    </NavItem>
  );
}
