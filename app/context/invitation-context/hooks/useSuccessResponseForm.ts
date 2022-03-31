import { useContextSelector } from "use-context-selector";
import { InvitationFormContextData } from "..";

export default function useSuccessResponseForm() {
  const successResponse = useContextSelector(
    InvitationFormContextData,
    (ctx) => ctx?.successResponse
  );
  const setSuccessResponse = useContextSelector(
    InvitationFormContextData,
    (ctx) => ctx?.setSuccessResponse
  );

  return {
    successResponse,
    setSuccessResponse,
  };
}
