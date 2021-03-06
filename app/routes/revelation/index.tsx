import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import {
  ActionFunction,
  Form,
  Link,
  LoaderFunction,
  useActionData,
  useLoaderData,
  useTransition,
} from "remix";
import AnimalImage from "~/components/index-page/revelation-sex-baby-section/components/AnimalImage";
import { BabySex } from "~/components/index-page/revelation-sex-baby-section/components/RevelationGame";
import useRemixLocalStorage from "~/components/shared/hooks/useRemixLocalStorage";
import Section from "~/components/shared/Section";
import SuccessMessage from "~/components/shared/SuccessMessage";
import { firestoreService } from "~/lib/firebase/db.server";
import { REVELATION_GAME_LOCAL_STORAGE_KEY } from "~/modules/invitations/constants";
import RevelationDatabaseService from "~/modules/revelation-game/services/revelation-database.service";
import RevelationGameService, {
  RevelationCurrentResult,
} from "~/modules/revelation-game/services/revelation-game.service";
import RevelationFormDeserializer from "~/modules/revelation-game/services/revelationFormDeserializer";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";

export interface LoaderResponse {
  currentRevelationResult: RevelationCurrentResult | undefined;
}

export interface ActionResponse {
  ok: boolean;
  payload: {
    gender: BabySex;
  };
}

export const loader: LoaderFunction = async (): Promise<LoaderResponse> => {
  // get current results
  const results = await getCurrentResults();

  return { currentRevelationResult: results?.payload };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const formBabyGender = formData.get("baby-gender-selected") as BabySex;
  const formName = formData.get("name");

  const revelationService = new RevelationDatabaseService(firestoreService);
  const deserializer = new RevelationFormDeserializer();

  const revelationDetails = deserializer.deserialize({
    formName,
    formBabyGender,
  });

  const response = await revelationService.add(revelationDetails);

  return {
    ok: response.ok,
    payload: {
      gender: formBabyGender,
    },
  };
};

export default function RevelationIndex() {
  const [babySex, setBabySex] = useRemixLocalStorage<BabySex | null>(
    REVELATION_GAME_LOCAL_STORAGE_KEY
  );
  const loaderData: LoaderResponse = useLoaderData();
  const actionData: ActionResponse | undefined = useActionData();
  const transition = useTransition();
  const state: RemixFormState = transition.submission
    ? "submitting"
    : !actionData
    ? "idle"
    : actionData?.ok
    ? "success"
    : "error";

  const [name, setName] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [state]);

  function onNameChange(name: string) {
    setName(name);
  }

  function onGoingBackToHomePage() {
    setBabySex(null);
  }

  return (
    <Section h="100vh" p="0">
      <Center w="100%" h="100vh" background="primary.500" paddingInline="2rem">
        <Flex w="100%" direction="column" gap="1rem">
          <Center mb="2rem">
            <PartialResult data={loaderData?.currentRevelationResult} />
          </Center>
          <Center>
            <Box
              w="100px"
              h="100px"
              border="2px solid"
              borderColor="gray.400"
              borderRadius="50%"
              mb="2rem"
            >
              <Center h="100%">
                <AnimalImage sex={babySex} hImage="64px" />
              </Center>
            </Box>
          </Center>

          <Form method="post" ref={formRef}>
            <RadioGroup value={babySex ? babySex : undefined} hidden={true}>
              <Stack direction="row">
                <Radio name="baby-gender-selected" value="boy"></Radio>
                <Radio name="baby-gender-selected" value="girl"></Radio>
              </Stack>
            </RadioGroup>

            <FormControl isRequired variant="floating">
              <Input
                name="name"
                placeholder="Teu nome"
                size="md"
                _placeholder={{ color: "text.500" }}
                onChange={(e) => onNameChange(e.target.value)}
                borderColor="gray.800"
                w="100%"
                mb="1rem"
              />
            </FormControl>
            {state !== "success" && (
              <Button
                type="submit"
                isLoading={state === "submitting"}
                loadingText="Enviando..."
                bg="secondary.500"
                disabled={name === ""}
                w="100%"
              >
                OK
              </Button>
            )}
          </Form>
          {state === "success" && (
            <Box w="100%">
              <Link to="/#revelation">
                <Button
                  bg="secondary.500"
                  w="100%"
                  mb="1rem"
                  onClick={onGoingBackToHomePage}
                >
                  VOLTAR
                </Button>
              </Link>
              <SuccessMessage message={"Enviado!"} />
            </Box>
          )}
        </Flex>
      </Center>
    </Section>
  );
}

function PartialResult({
  data,
}: {
  data: RevelationCurrentResult | undefined;
}) {
  return (
    <Box
      border="1px solid"
      borderColor="gray.300"
      borderRadius="20px"
      paddingBlock="1rem"
      paddingInline="2rem"
    >
      <Text fontSize="14px" fontWeight={400} mb=".5rem" textAlign="center">
        Resultado parcial
      </Text>
      <HStack>
        <HStack spacing={4}>
          <AnimalImage sex="boy" hImage="26px" />
          <Text fontSize="14px" fontWeight={700}>
            {data?.boys || 0}
          </Text>
        </HStack>
        <Text fontSize="14px" fontWeight={700}>
          :
        </Text>
        <HStack spacing={4}>
          <Text fontSize="14px" fontWeight={700}>
            {data?.girls || 0}
          </Text>
          <AnimalImage sex="girl" hImage="26px" />
        </HStack>
      </HStack>
    </Box>
  );
}

async function getCurrentResults() {
  const revelationStore = new RevelationDatabaseService(firestoreService);
  const revelationGame = new RevelationGameService(revelationStore);

  const result = await revelationGame.currentResults();

  return result;
}
