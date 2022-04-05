import {
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  Select,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ActionFunction, Form, useActionData, useTransition } from "remix";
import RevelationGame from "~/components/index-page/revelation-sex-baby-section/components/RevelationGame";
import ErrorMessage from "~/components/shared/ErrorMessage";
import Section from "~/components/shared/Section";
import SuccessMessage from "~/components/shared/SuccessMessage";
import { firestoreService } from "~/lib/firebase/db.server";
import {
  FirestoreDocument,
  FirestoreDocumentResponse,
} from "~/lib/firebase/firestore.interfaces";
import ErrorDatabaseService from "~/modules/errors/services/error-database.service";
import GiftDatabaseService from "~/modules/gifts/services/gift-database.service";
import InvitationStatsService from "~/modules/invitations/services/invitation-stats.service";
import Invitation from "~/modules/invitations/services/invitation.service";
import RevelationDatabaseService from "~/modules/revelation-game/services/revelation-database.service";
import SessionService from "~/modules/sessions/services/SessionService";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";

type Collections =
  | "invitations"
  | "revelations"
  | "sessions"
  | "gifts"
  | "errors";

export interface ActionData {
  ok: boolean;
  payload?: FirestoreDocument | null;
  error?: any;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const formCollection = formData.get("collection") as Collections;

  const revelationService = new RevelationDatabaseService(firestoreService);
  const invitationService = new Invitation(firestoreService);
  const sessionService = new SessionService(firestoreService);
  const giftService = new GiftDatabaseService(firestoreService);
  const errorService = new ErrorDatabaseService(firestoreService);

  let response: FirestoreDocumentResponse | undefined;

  if (formCollection === "invitations") {
    response = await invitationService.deleteAll();
  }

  if (formCollection === "revelations") {
    response = await revelationService.deleteAll();
  }

  if (formCollection === "sessions") {
    response = await sessionService.deleteAll();
  }

  if (formCollection === "gifts") {
    response = await giftService.deleteAll();
  }

  if (formCollection === "errors") {
    response = await errorService.deleteAll();
  }

  return response;
};

export default function Slim() {
  const actionData: ActionData | undefined = useActionData();
  const transition = useTransition();
  const remixFormState: RemixFormState = transition.submission
    ? "submitting"
    : !actionData
    ? "idle"
    : actionData?.ok
    ? "success"
    : "error";

  const [selectedItem, setSelectedItem] = useState<string>("");
  const [formState, setFormState] = useState<RemixFormState>("idle");

  useEffect(() => {
    setFormState(remixFormState);
  }, [remixFormState]);

  return (
    <Section p="2rem" bg="gray.200">
      <Center h="100%">
        <VStack spacing={4}>
          <Form method="post">
            <FormControl isRequired mb="1rem">
              <Select
                name="collection"
                placeholder="Select the collection"
                color="text.500"
                size="lg"
                onChange={(e) => setSelectedItem(e.target.value)}
                minW="300px"
                borderColor="gray.500"
              >
                <option value="invitations">Invitations</option>
                <option value="revelations">Revelations</option>
                <option value="gifts">Gifts</option>
                <option value="sessions">Sessions</option>
                <option value="errors">Errors</option>
              </Select>
            </FormControl>

            <Button type="submit" bg="red.300" color="black" w="100%">
              {formState === "submitting"
                ? "REMOVING RECORDS..."
                : "REMOVE ALL RECORDS"}
            </Button>
          </Form>
          {formState === "success" && <SuccessMessage />}
          {formState === "error" && (
            <ErrorMessage message={actionData?.error} />
          )}
        </VStack>
      </Center>
    </Section>
  );
}
