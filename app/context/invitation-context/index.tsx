import { useState } from "react";
import { createContext } from "use-context-selector";

export interface InvitationFormContextData {
  guestName: string;
  willAttend: boolean;
  guests: number;
  mealPreference: string;
  successResponse: boolean;
  setGuestName: (guestName: string) => void;
  setWillAttend: (willAttend: boolean) => void;
  setGuests: (guests: number) => void;
  setMealPreference: (mealPreference: string) => void;
  setSuccessResponse: (successResponse: boolean) => void;
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
  const [successResponse, setSuccessResponse] = useState(false);

  return (
    <InvitationFormContextData.Provider
      value={{
        guestName,
        willAttend,
        guests,
        mealPreference,
        successResponse,
        setGuestName,
        setWillAttend,
        setGuests,
        setMealPreference,
        setSuccessResponse,
      }}
    >
      {children}
    </InvitationFormContextData.Provider>
  );
}
