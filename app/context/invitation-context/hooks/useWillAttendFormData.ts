import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { InvitationFormContextData } from "..";

export default function useWillAttendFormData() {
  const willAttend = useContextSelector(
    InvitationFormContextData,
    (ctx) => ctx?.willAttend
  );
  const setWillAttend = useContextSelector(
    InvitationFormContextData,
    (ctx) => ctx?.setWillAttend
  );

  return {
    willAttend,
    setWillAttend,
  };
}
