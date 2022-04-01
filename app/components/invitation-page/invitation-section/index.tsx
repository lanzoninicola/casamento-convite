import {
  Alert,
  AlertIcon,
  Button,
  Center,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { Form } from "remix";
import EllipseDecorator from "~/components/shared/EllipseDecorator";
import BaseHeading from "~/components/shared/BaseHeadings";
import { TextDecorated } from "~/components/shared/TextDecorated";
import { InvitationFormResponse } from "~/modules/invitations/models/invitation.model";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";

import Section from "../../shared/Section";
import FormInputGuestName from "./components/FormInputGuestName";
import FormInputUID from "./components/FormInputUID";
import FormSelectGuests from "./components/FormSelectGuests";
import FormSelectMealPreference from "./components/FormSelectMealPreference";
import FormSelectWillAttend from "./components/FormSelectWillAttend";

export default function InvitationFormSection({
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
      <Section id="invitation-form">
        <Flex
          paddingInline="2rem"
          h="100%"
          justify="center"
          align="center"
          direction="column"
        >
          <FormHeader />
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
            <ErrorMessage
              message={"Erro! Por favor, tente novamente mais tarde"}
            />
          )}
        </Flex>
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

function FormHeader() {
  return (
    <Flex direction="column" gap="1.5rem">
      <Center>
        <TextDecorated>Momentos mágicos</TextDecorated>
      </Center>
      <BaseHeading fontSize="38px" fontWeight="700" color="text.500">
        Você vai estar presente em nosso dia especial?
      </BaseHeading>
      <Center w="100%" h="30px" gap="1rem">
        <EllipseDecorator
          diameter="8px"
          repeat={3}
          bg="primary.500"
          gap="1rem"
        />
      </Center>
    </Flex>
  );
}
