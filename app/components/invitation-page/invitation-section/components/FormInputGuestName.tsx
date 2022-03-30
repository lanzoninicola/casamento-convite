import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function FormInputGuestName() {
  return (
    <FormControl isRequired variant="floating">
      <Input
        name="guestName"
        placeholder=" "
        size="md"
        _placeholder={{ color: "text.500" }}
      />
      <FormLabel htmlFor="name">Teu nome</FormLabel>
    </FormControl>
  );
}
