import { useContextSelector } from "use-context-selector";
import { InvitationFormContextData } from "..";

export default function useGuestsFormData() {
  const guests = useContextSelector(
    InvitationFormContextData,
    (ctx) => ctx?.guests
  );
  const setGuests = useContextSelector(
    InvitationFormContextData,
    (ctx) => ctx?.setGuests
  );

  return {
    guests,
    setGuests,
  };
}
