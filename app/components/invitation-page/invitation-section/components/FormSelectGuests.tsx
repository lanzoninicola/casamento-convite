import { FormControl, Select } from "@chakra-ui/react";
import useGuestsFormData from "~/context/invitation-context/hooks/useGuestsFormData";

export default function FormSelectGuests() {
  const { setGuests } = useGuestsFormData();

  return (
    <FormControl isRequired>
      <Select
        name="guests"
        placeholder="Número de convidados, incluindo você"
        color="text.500"
        aria-label="Número de convidados, incluindo você"
        title="Número de convidados, incluindo você"
        data-title="Número de convidados, incluindo você"
        size="lg"
        onChange={(e) => setGuests(parseInt(e.target.value, 10))}
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
