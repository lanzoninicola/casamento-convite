import { TextWithLineDecoration } from "./HeadingWithLineDecoration";

export function TextDecorated({ children }: { children: React.ReactNode }) {
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
