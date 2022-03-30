import { Alert, AlertIcon, Button, Stack } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Form } from "remix";
import { InvitationFormResponse } from "~/modules/invitations/models/invitation.model";
import {
  RemixActionData,
  RemixFormState,
} from "~/modules/shared/interfaces/RemixRun";

import Section from "../../shared/Section";
import FormInputGuestName from "./components/FormInputGuestName";
import FormSelectGuests from "./components/FormSelectGuests";
import FormSelectMealPreference from "./components/FormSelectMealPreference";
import FormSelectWillAttend from "./components/FormSelectWillAttend";

export default function InvitationFormSection({
  formState,
  actionData,
}: {
  formState: RemixFormState;
  actionData: InvitationFormResponse;
}) {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [formState]);

  return (
    <>
      <Section h="auto" id="invitation-form">
        <Form method="post" ref={formRef}>
          <Stack direction="column" spacing={8}>
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
          <ErrorMessage
            message={"Erro! Por favor, tente novamente mais tarde"}
          />
        )}
        {actionData?.ok === true && (
          <SuccessMessage message={"Obrigado pela resposta"} />
        )}
      </Section>
    </>
  );
}

function ErrorMessage({
  message,
  ...props
}: {
  message: string;
  [key: string]: any;
}) {
  return (
    <Alert status="error" {...props} mt="1.5rem">
      <AlertIcon />
      {message}
    </Alert>
  );
}

function SuccessMessage({
  message,
  ...props
}: {
  message: string;
  [key: string]: any;
}) {
  return (
    <Alert status="success" {...props} mt="1.5rem">
      <AlertIcon />
      {message}
    </Alert>
  );
}
