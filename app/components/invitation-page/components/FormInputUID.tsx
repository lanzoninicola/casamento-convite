import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function FormInputUID({ uid }: { uid: string }) {
  return (
    <FormControl isRequired variant="floating">
      <Input name="uid" value={uid} hidden readOnly minW="300px" />
    </FormControl>
  );
}
