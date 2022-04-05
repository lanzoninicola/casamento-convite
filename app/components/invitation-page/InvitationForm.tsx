import { Button, Stack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Form } from "remix";
import { InvitationFormResponse } from "~/modules/invitations/models/invitation.model";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";

import ErrorMessage from "../shared/ErrorMessage";
import FormInputGuestName from "./components/FormInputGuestName";
import FormInputUID from "./components/FormInputUID";
import FormSelectGuests from "./components/FormSelectGuests";
import FormSelectMealPreference from "./components/FormSelectMealPreference";
import FormSelectWillAttend from "./components/FormSelectWillAttend";

export default function InvitationForm({
  formState,
  actionData,
  uid,
}: {
  formState: RemixFormState;
  actionData: InvitationFormResponse;
  uid: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [formState]);

  return (
    <>
      <Form method="post" ref={formRef}>
        <Stack direction="column" spacing={8}>
          <FormInputUID uid={uid} />

          <FormInputGuestName />

          <FormSelectWillAttend />

          <Stack spacing={4}>
            <FormSelectGuests />
            <FormSelectMealPreference />
          </Stack>
          <Button
            type="submit"
            isLoading={formState === "submitting"}
            loadingText="Enviando..."
            bg="secondary.500"
            disabled={formState === "success"}
          >
            {formState === "success" ? "Enviado" : "Envia"}
          </Button>
        </Stack>
      </Form>
      {actionData?.ok === false && (
        <ErrorMessage message={"Erro! Por favor, tente novamente mais tarde"} />
      )}
    </>
  );
}
