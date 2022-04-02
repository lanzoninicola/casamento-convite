import { FormControl, Select } from "@chakra-ui/react";
import useMealPreferenceFormData from "~/context/invitation-context/hooks/useMealPreferenceFormData";
import useWillAttendFormData from "~/context/invitation-context/hooks/useWillAttendFormData";

export default function FormSelectMealPreference() {
  const { setMealPreference } = useMealPreferenceFormData();
  const { willAttend } = useWillAttendFormData();

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
            onChange={(e) => setMealPreference(e.target.value)}
            minW="300px"
          >
            <option value="carne">Carne</option>
            <option value="vegetariano">Vegetariano</option>
            <option value="vegano">Vegano</option>
            <option value="indiferente">Indiferente</option>
          </Select>
        </FormControl>
      )}
    </>
  );
}
