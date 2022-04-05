import { FormControl, Input } from "@chakra-ui/react";
import useRemixLocalStorage from "~/components/shared/hooks/useRemixLocalStorage";
import useGuestNameFormData from "~/context/invitation-context/hooks/useGuestNameFormData";

export default function FormInputGuestName() {
  const [formData, setFormData] = useRemixLocalStorage<string>(
    "INVITATION_FORM_GUEST_NAME",
    "foo"
  );
  const { setGuestName } = useGuestNameFormData();

  function onFormChange(value: string) {
    if (value) {
      setFormData(value.trim());

      setGuestName(value);
    }
  }

  return (
    <FormControl isRequired variant="floating">
      <Input
        name="guestName"
        placeholder="Teu nome"
        size="lg"
        _placeholder={{ color: "text.500" }}
        onChange={(e) => onFormChange(e.target.value)}
        minW="300px"
      />
      {/* <FormLabel htmlFor="name">Teu nome</FormLabel> */}
    </FormControl>
  );
}
