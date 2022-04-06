import BaseHeading from "~/components/shared/BaseHeadings";

export default function FooterHeading({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <BaseHeading as="h4" fontSize="18px" {...props}>
      {children}
    </BaseHeading>
  );
}
