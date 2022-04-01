import { useContextSelector } from "use-context-selector";
import { NavigationContext } from "..";

export default function useIsOpen() {
  const isOpen = useContextSelector(NavigationContext, (ctx) => ctx.isOpen);

  const setIsOpen = useContextSelector(
    NavigationContext,
    (ctx) => ctx.setIsOpen
  );
  return {
    isOpen,
    setIsOpen,
  };
}
