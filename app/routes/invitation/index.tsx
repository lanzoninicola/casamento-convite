import { Center, Flex } from "@chakra-ui/react";
import {
  ActionFunction,
  LoaderFunction,
  MetaFunction,
  redirect,
  useActionData,
  useLoaderData,
  useTransition,
} from "remix";
import FormHeader from "~/components/invitation-page/components/FormHeader";
import InvitationForm from "~/components/invitation-page/InvitationForm";
import SafeArea from "~/components/shared/SafeArea";
import Section from "~/components/shared/Section";
import ViewportInfo from "~/components/shared/ViewportInfo";
import { firestoreService } from "~/lib/firebase/db.server";
import { FirestoreDocumentId } from "~/lib/firebase/firestore.interfaces";
import { InvitationFormResponse } from "~/modules/invitations/models/invitation.model";
import InvitationService from "~/modules/invitations/services/invitation.service";
import InvitationFormDeserializer from "~/modules/invitations/services/InvitationFormDeserializer";
import SessionService from "~/modules/sessions/services/SessionService";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";

export const meta: MetaFunction = () => {
  return {
    title: "Gustavo & Kelly",
    description: "Convite de casamento",
  };
};

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
}): Promise<InvitationFormResponse | null> => {
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

  if (invitationResponse.ok && formWillAttend === "true") {
    return redirect(
      `/invitation/response/thank-you?id=${invitationResponse.payload}`
    );
  }

  if (invitationResponse.ok && formWillAttend === "false") {
    return redirect(
      `/invitation/response/gosh?id=${invitationResponse.payload}`
    );
  }

  return null;
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
      {/* <ViewportInfo /> */}
      <Section id="invitation-form" bg="gray.50">
        <SafeArea ignoreHeader={true}>
          <Center paddingInline="2rem" h="100%" flexDirection="column">
            <FormHeader />

            <InvitationForm
              actionData={actionData}
              formState={state}
              uid={uid}
            />
          </Center>
        </SafeArea>
      </Section>
    </>
  );
}
