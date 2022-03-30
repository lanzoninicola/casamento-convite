import { FormControl, FormLabel, Select } from "@chakra-ui/react";

export default function FormSelectWillAttend() {
  return (
    <FormControl isRequired variant="floating">
      <Select
        name="willAttend"
        placeholder="Confirma sua presença"
        color="text.500"
        aria-label="Confirma sua presença"
        title="Confirma sua presença"
        data-title="Confirma sua presença"
      >
        <option value="true">Eu estarei lá</option>
        <option value="false">Desculpe, eu não posso ir</option>
      </Select>
      <FormLabel
        htmlFor="willattend"
        aria-labelledby="willattend"
        title="Confirma sua presença"
      >
        Confirma sua presença
      </FormLabel>
    </FormControl>
  );
}
