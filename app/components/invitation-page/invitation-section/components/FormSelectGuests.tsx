import { FormControl, Select } from "@chakra-ui/react";

export default function FormSelectGuests() {
  return (
    <FormControl isRequired>
      <Select
        name="guests"
        placeholder="Número de convidados, incluindo você"
        color="text.500"
        aria-label="Número de convidados, incluindo você"
        title="Número de convidados, incluindo você"
        data-title="Número de convidados, incluindo você"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </Select>
    </FormControl>
  );
}
