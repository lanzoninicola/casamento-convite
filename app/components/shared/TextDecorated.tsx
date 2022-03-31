import { TextWithLineDecoration } from "./HeadingWithLineDecoration";

export function TextDecorated({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <TextWithLineDecoration
      fontSize="16px"
      letterSpacing="5px"
      textTransform="uppercase"
    >
      {children}
    </TextWithLineDecoration>
  );
}
