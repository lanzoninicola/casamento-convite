import { Button, Center, FormControl, Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ActionFunction, Form, useActionData, useTransition } from "remix";
import RevelationGame from "~/components/index-page/revelation-sex-baby-section/components/RevelationGame";
import Section from "~/components/shared/Section";
import { firestoreService } from "~/lib/firebase/db.server";
import {
  FirestoreDocument,
  FirestoreDocumentResponse,
} from "~/lib/firebase/firestore.interfaces";
import Invitation from "~/modules/invitations/services/invitation.service";
import RevelationGameService from "~/modules/revelation-game/services/revelation-game.service";
import SessionService from "~/modules/sessions/services/SessionService";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";

type Collections = "invitations" | "revelations" | "sessions";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const formCollection = formData.get("collection") as Collections;

  console.log(formCollection);

  const revelationService = new RevelationGameService(firestoreService);
  const invitationService = new Invitation(firestoreService);
  const sessionService = new SessionService(firestoreService);

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

  return response;
};

export default function Service() {
  const actionData = useActionData();
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
    <Section p="2rem" bg="gray.100">
      <Center h="100%">
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
              <option value="sessions">Sessions</option>
            </Select>
          </FormControl>

          <Button type="submit" bg="red.500" color="white" w="100%">
            {formState === "idle" && "REMOVE ALL RECORDS"}
            {formState === "submitting" && "REMOVING RECORDS..."}
          </Button>
        </Form>
      </Center>
    </Section>
  );
}
