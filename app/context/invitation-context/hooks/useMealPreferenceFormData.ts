import { useContextSelector } from "use-context-selector";
import { InvitationFormContextData } from "..";

export default function useMealPreferenceFormData() {
  const mealPreference = useContextSelector(
    InvitationFormContextData,
    (ctx) => ctx?.mealPreference
  );
  const setMealPreference = useContextSelector(
    InvitationFormContextData,
    (ctx) => ctx?.setMealPreference
  );

  return {
    mealPreference,
    setMealPreference,
  };
}
