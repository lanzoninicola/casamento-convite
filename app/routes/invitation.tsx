import { Box } from "@chakra-ui/react";
import {
  ActionFunction,
  LoaderFunction,
  useActionData,
  useLoaderData,
  useTransition,
} from "remix";
import InvitationFormSection from "~/components/invitation-page/invitation-section";
import Section from "~/components/shared/Section";
import { InvitationFormProvider } from "~/context/invitation-context";
import { firestoreService } from "~/lib/firebase/db.server";
import { InvitationFormResponse } from "~/modules/invitations/models/invitation.model";
import InvitationFormDeserializer from "~/modules/invitations/services/InvitationFormDeserializer";
import InvitationService from "~/modules/invitations/services/InvitationService";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";
import SessionService from "~/modules/sessions/services/SessionService";
import { FirestoreDocumentId } from "~/lib/firebase/firestore.interfaces";

export interface LoaderData {
  ok: boolean;
  payload: FirestoreDocumentId;
}

export const loader: LoaderFunction = async () => {
  const session = new SessionService(firestoreService);

  const sessionResponse = await session.add({ date: new Date() });

  return sessionResponse;
};

export let action: ActionFunction = async ({
  request,
}): Promise<InvitationFormResponse> => {
  const formData = await request.formData();
  const formUID = formData.get("uid") as string;

  console.log("formUID", formUID);

  const session = new SessionService(firestoreService);
  const sessionResponse = await session.getById(formUID);

  if (sessionResponse.ok === false) {
    return { ok: false, error: "Oops! Ocorreu um erro" };
  }

  await session.delete(formUID);

  const invitation = new InvitationService(firestoreService);

  const formGuestName = formData.get("guestName");
  const formWillAttend = formData.get("willAttend");
  const formGuests = formData.get("guests");
  const formMealPreference = formData.get("mealPreference");

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
  const loaderData: LoaderData = useLoaderData();
  const actionData = useActionData();
  const transition = useTransition();
  const state: RemixFormState = transition.submission
    ? "submitting"
    : actionData?.subscription
    ? "success"
    : actionData?.error
    ? "error"
    : "idle";

  const uid = loaderData.ok ? loaderData.payload : "";

  return (
    <>
      <InvitationFormProvider>
        <Section h="auto">
          <Box>
            <p>box for an image</p>
          </Box>

          <InvitationFormSection
            actionData={actionData}
            formState={state}
            uid={uid}
          />
        </Section>
      </InvitationFormProvider>
    </>
  );
}
