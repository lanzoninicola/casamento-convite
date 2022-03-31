import { FormControl, Select } from "@chakra-ui/react";

export default function FormSelectMealPreference() {
  return (
    <FormControl isRequired>
      <Select
        name="mealPreference"
        placeholder="Preferençia comida"
        color="text.500"
        aria-label="Preferençia comida"
        title="Preferençia comida"
        size="lg"
      >
        <option value="carne">Carne</option>
        <option value="vegetariano">Vegetariano</option>
        <option value="vegano">Vegano</option>
      </Select>
    </FormControl>
  );
}
