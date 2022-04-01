import { useState } from "react";
import { createContext } from "use-context-selector";

export interface NavigationContextData {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const NavigationContext = createContext<NavigationContextData>(
  {} as NavigationContextData
);

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <NavigationContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}
