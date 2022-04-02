import { FormControl, Input } from "@chakra-ui/react";
import useGuestNameFormData from "~/context/invitation-context/hooks/useGuestNameFormData";

export default function FormInputGuestName() {
  const { setGuestName } = useGuestNameFormData();

  return (
    <FormControl isRequired variant="floating">
      <Input
        name="guestName"
        placeholder="Teu nome"
        size="lg"
        _placeholder={{ color: "text.500" }}
        onChange={(e) => setGuestName(e.target.value)}
        minW="300px"
      />
      {/* <FormLabel htmlFor="name">Teu nome</FormLabel> */}
    </FormControl>
  );
}
