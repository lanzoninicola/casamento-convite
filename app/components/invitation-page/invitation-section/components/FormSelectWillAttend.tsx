import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import useWillAttendFormData from "~/context/invitation-context/hooks/useWillAttendFormData";

export default function FormSelectWillAttend() {
  const { setWillAttend } = useWillAttendFormData();

  function onWillAttendChange(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === "true") {
      setWillAttend(true);
    }

    if (e.target.value === "false") {
      setWillAttend(false);
    }
  }

  return (
    <FormControl isRequired variant="floating">
      <Select
        name="willAttend"
        placeholder="Confirma sua presença"
        color="text.500"
        aria-label="Confirma sua presença"
        title="Confirma sua presença"
        data-title="Confirma sua presença"
        size="lg"
        onChange={onWillAttendChange}
        minW="300px"
      >
        <option value="true">Eu estarei lá</option>
        <option value="false">Desculpe, eu não posso ir</option>
      </Select>
      {/* <FormLabel
        htmlFor="willattend"
        aria-labelledby="willattend"
        title="Confirma sua presença"
      >
        Confirma sua presença
      </FormLabel> */}
    </FormControl>
  );
}