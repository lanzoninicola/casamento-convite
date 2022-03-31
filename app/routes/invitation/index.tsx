import { Center } from "@chakra-ui/react";
import {
  ActionFunction,
  LoaderFunction,
  redirect,
  useActionData,
  useLoaderData,
  useTransition,
} from "remix";
import InvitationFormSection from "~/components/invitation-page/invitation-section";
import { InvitationFormProvider } from "~/context/invitation-context";
import { firestoreService } from "~/lib/firebase/db.server";
import { FirestoreDocumentId } from "~/lib/firebase/firestore.interfaces";
import { InvitationFormResponse } from "~/modules/invitations/models/invitation.model";
import InvitationService from "~/modules/invitations/services/invitation.service";
import InvitationFormDeserializer from "~/modules/invitations/services/InvitationFormDeserializer";
import SessionService from "~/modules/sessions/services/SessionService";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";

export interface LoaderData {
  ok: boolean;
  payload: FirestoreDocumentId;
  error?: any;
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

  if (!formGuestName || !formWillAttend) {
    return {
      ok: false,
      error: "Alguns campos não foram preenchidos",
    };
  }

  const deserializer = new InvitationFormDeserializer();

  const invitationDetails = deserializer.deserialize({
    formGuestName,
    formWillAttend,
    formGuests,
    formMealPreference,
  });

  const invitationResponse = await invitation.add(invitationDetails);

  if (invitationResponse.ok === false) {
    return {
      ok: false,
      error: "Oops! Ocorreu um erro",
    };
  }

  return redirect(`/invitation/response?id=${invitationResponse.payload}`);
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
      <Center bg="gray.50">
        <InvitationFormSection
          actionData={actionData}
          formState={state}
          uid={uid}
        />
      </Center>
    </>
  );
}
