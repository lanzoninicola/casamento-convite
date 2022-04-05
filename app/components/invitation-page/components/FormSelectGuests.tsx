import { FormControl, Select } from "@chakra-ui/react";
import useLocalStorage from "~/components/shared/hooks/useLocalStorage";
import useGuestsFormData from "~/context/invitation-context/hooks/useGuestsFormData";
import useWillAttendFormData from "~/context/invitation-context/hooks/useWillAttendFormData";
import { INVITATION_FORM_DATA_LOCAL_STORAGE_KEY } from "~/modules/invitations/constants";
import InvitationFormData from "~/modules/invitations/interfaces/InvitationFormData";

export default function FormSelectGuests() {
  const { setGuests } = useGuestsFormData();
  const { willAttend } = useWillAttendFormData();

  function onFormChange(value: FormDataEntryValue) {
    if (!willAttend) {
      setGuests(null);
    }

    if (willAttend) {
      setGuests(parseInt(value as string, 10));
    }
  }

  return (
    <>
      {willAttend && (
        <FormControl isRequired>
          <Select
            name="guests"
            placeholder="Número de convidados, incluindo você"
            color="text.500"
            aria-label="Número de convidados, incluindo você"
            title="Número de convidados, incluindo você"
            data-title="Número de convidados, incluindo você"
            size="lg"
            onChange={(e) => onFormChange(e.target.value)}
            minW="300px"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Select>
        </FormControl>
      )}
    </>
  );
}
