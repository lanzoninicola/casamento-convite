import { FormControl, Select } from "@chakra-ui/react";
import useLocalStorage from "~/components/shared/hooks/useLocalStorage";
import useMealPreferenceFormData from "~/context/invitation-context/hooks/useMealPreferenceFormData";
import useWillAttendFormData from "~/context/invitation-context/hooks/useWillAttendFormData";
import { INVITATION_FORM_DATA_LOCAL_STORAGE_KEY } from "~/modules/invitations/constants";
import InvitationFormData from "~/modules/invitations/interfaces/InvitationFormData";

export default function FormSelectMealPreference() {
  const { setMealPreference } = useMealPreferenceFormData();
  const { willAttend } = useWillAttendFormData();

  function onFormChange(value: FormDataEntryValue) {
    if (!willAttend) {
      setMealPreference(null);
    }

    if (willAttend) {
      setMealPreference(value as string | null);
    }
  }

  return (
    <>
      {willAttend && (
        <FormControl isRequired>
          <Select
            name="mealPreference"
            placeholder="Preferençia comida"
            color="text.500"
            aria-label="Preferençia comida"
            title="Preferençia comida"
            size="lg"
            onChange={(e) => onFormChange(e.target.value)}
            minW="300px"
          >
            <option value="carne">Carne</option>
            <option value="vegetariano">Vegetariano</option>
            <option value="indiferente">Indiferente</option>
          </Select>
        </FormControl>
      )}
    </>
  );
}
