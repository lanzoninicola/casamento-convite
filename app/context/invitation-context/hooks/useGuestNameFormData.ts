import { useContextSelector } from "use-context-selector";
import { InvitationFormContextData } from "..";

export default function useGuestsFormData() {
  const guestName = useContextSelector(
    InvitationFormContextData,
    (ctx) => ctx?.guestName
  );
  const setGuestName = useContextSelector(
    InvitationFormContextData,
    (ctx) => ctx?.setGuestName
  );

  return {
    guestName,
    setGuestName,
  };
}
