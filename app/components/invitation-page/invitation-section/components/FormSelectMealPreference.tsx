import { FormControl, Select } from "@chakra-ui/react";
import useMealPreferenceFormData from "~/context/invitation-context/hooks/useMealPreferenceFormData";

export default function FormSelectMealPreference() {
  const { setMealPreference } = useMealPreferenceFormData();

  return (
    <FormControl isRequired>
      <Select
        name="mealPreference"
        placeholder="Preferençia comida"
        color="text.500"
        aria-label="Preferençia comida"
        title="Preferençia comida"
        size="lg"
        onChange={(e) => setMealPreference(e.target.value)}
      >
        <option value="carne">Carne</option>
        <option value="vegetariano">Vegetariano</option>
        <option value="vegano">Vegano</option>
        <option value="indiferente">Indiferente</option>
      </Select>
    </FormControl>
  );
}
