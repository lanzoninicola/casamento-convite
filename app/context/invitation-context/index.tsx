import { useState } from "react";
import { createContext } from "use-context-selector";

export interface InvitationFormContextData {
  guestName: string;
  willAttend: boolean;
  guests: number | null;
  mealPreference: string | null;
  successResponse: boolean;
  setGuestName: (guestName: string) => void;
  setWillAttend: (willAttend: boolean) => void;
  setGuests: (guests: number | null) => void;
  setMealPreference: (mealPreference: string | null) => void;
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
  const [guests, setGuests] = useState<number | null>(null);
  const [mealPreference, setMealPreference] = useState<string | null>(null);
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
