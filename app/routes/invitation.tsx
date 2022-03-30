import { Box } from "@chakra-ui/react";

import { collection, addDoc } from "firebase/firestore";

import { ActionFunction, useActionData, useTransition } from "remix";
import InvitationFormSection from "~/components/invitation-page/invitation-section";
import Section from "~/components/shared/Section";
import { InvitationFormProvider } from "~/context/invitation-context";

import InvitationService from "~/modules/invitations/services/InvitationService";

import { firestoreService } from "~/lib/firebase/db.server";
import {
  InvitationFormResponse,
  InvitationModel,
} from "~/modules/invitations/models/invitation.model";
import InvitationFormDeserializer from "~/modules/invitations/services/InvitationFormDeserializer";
import { useEffect, useRef } from "react";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";

export let action: ActionFunction = async ({
  request,
}): Promise<InvitationFormResponse> => {
  const invitation = new InvitationService(firestoreService);

  const formData = await request.formData();

  const formGuestName = formData.get("guestName");
  const formWillAttend = formData.get("willAttend");
  const formGuests = formData.get("guests");
  const formMealPreference = formData.get("mealPreference");

  // Nicola true [ '4' ] carne

  if (!formGuestName || !formWillAttend || !formGuests || !formMealPreference) {
    return {
      ok: false,
      payload: "Alguns campos não foram preenchidos",
    };
  }

  const deserializer = new InvitationFormDeserializer();

  const invitationModel = deserializer.deserialize({
    formGuestName,
    formWillAttend,
    formGuests,
    formMealPreference,
  });

  const invitationResponse = await invitation.add(invitationModel);

  const { ok, payload, error } = invitationResponse;

  return {
    ok,
    payload,
    error,
  };
};

export default function Invitation() {
  const actionData = useActionData();
  const transition = useTransition();
  const state: RemixFormState = transition.submission
    ? "submitting"
    : actionData?.subscription
    ? "success"
    : actionData?.error
    ? "error"
    : "idle";

  return (
    <>
      <InvitationFormProvider>
        <Section h="auto">
          <Box>
            <p>box for an image</p>
          </Box>
        </Section>
        <InvitationFormSection actionData={actionData} formState={state} />
      </InvitationFormProvider>
    </>
  );
}
