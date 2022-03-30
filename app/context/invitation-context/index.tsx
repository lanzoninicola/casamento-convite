import { useState } from "react";
import { createContext } from "use-context-selector";

export interface InvitationFormContextData {
  guestName: string;
  willAttend: boolean;
  guests: number;
  mealPreference: string;
  setGuestName: (guestName: string) => void;
  setWillAttend: (willAttend: boolean) => void;
  setGuests: (guests: number) => void;
  setMealPreference: (mealPreference: string) => void;
}

export const InvitationFormContextData =
  createContext<InvitationFormContextData>({} as InvitationFormContextData);

export function InvitationFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [guestName, setGuestName] = useState("");
  const [willAttend, setWillAttend] = useState(false);
  const [guests, setGuests] = useState(0);
  const [mealPreference, setMealPreference] = useState("");

  return (
    <InvitationFormContextData.Provider
      value={{
        guestName,
        willAttend,
        guests,
        mealPreference,
        setGuestName,
        setWillAttend,
        setGuests,
        setMealPreference,
      }}
    >
      {children}
    </InvitationFormContextData.Provider>
  );
}
