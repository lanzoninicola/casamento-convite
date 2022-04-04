import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  Grid,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Form, useNavigate } from "remix";
import BaseHeading from "~/components/shared/BaseHeadings";
import HighlightedText from "~/components/shared/HighlightedText";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";
import AnimalImage from "./AnimalImage";
import BabyOption from "./BabyOption";

export type BabySex = "boy" | "girl";

export default function RevelationGame({
  formState,
  actionData,
}: {
  formState: RemixFormState;
  actionData: any;
}) {
  const [babySex, setBabySex] = useState<BabySex | undefined>(undefined);
  const [showNameModal, setShowNameModal] = useState(false);

  function onShowModalName() {
    setShowNameModal(true);
  }

  function gridTemplateRows(): string {
    let babyOptionARow = ".5fr 1fr .5fr";

    return babyOptionARow;
  }

  useEffect(() => {
    if (formState === "success") {
      setShowNameModal(false);
    }
  }, [formState]);

  return (
    <Grid
      h="100%"
      gridTemplateRows={gridTemplateRows()}
      gap="1.5rem"
      paddingInline={"1rem"}
    >
      <Center flexDirection="column" gap=".5rem">
        <BaseHeading color="text.500" textAlign="center">
          O que você acha que é
        </BaseHeading>
        <Text
          fontSize="18px"
          textAlign="center"
          textTransform="uppercase"
          letterSpacing="1px"
        >
          Deixe sua opinião, clicando em <br /> um dos dois ursinhos e concorra{" "}
          <br />
          <HighlightedText bg="primary.500">
            a uma troca de frauda
          </HighlightedText>
        </Text>
      </Center>

      <Flex direction="row" gap="2rem" paddingInline="2rem">
        <BabyOption
          sex="girl"
          onClick={() => setBabySex("girl")}
          opacity={babySex === "boy" ? 0.3 : 1}
        />
        <BabyOption
          sex="boy"
          onClick={() => setBabySex("boy")}
          opacity={babySex === "girl" ? 0.3 : 1}
        />
      </Flex>
      <Box w="100%">
        <Button
          bg="secondary.500"
          disabled={babySex === undefined}
          onClick={onShowModalName}
          w="100%"
        >
          Envia
        </Button>
        {formState === "success" && <SuccessMessage message={"Enviado!"} />}
      </Box>
      {showNameModal && <NameModal formState={formState} babySex={babySex} />}
    </Grid>
  );
}

function NameModal({
  formState,
  babySex,
}: {
  formState: RemixFormState;
  babySex: BabySex | undefined;
}) {
  const [name, setName] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [formState]);

  function onNameChange(name: string) {
    setName(name);
  }

  return (
    <>
      <Center
        position="fixed"
        zIndex={1000}
        top={0}
        left={0}
        right={0}
        bottom={0}
        w="100%"
        h="100%"
        background="primary.500"
        paddingInline="2rem"
      >
        <Box w="100%">
          <HStack mb="2rem" spacing="2rem">
            <Text fontSize="16px" fontWeight={700}>{`Você escolheu:`}</Text>
            <AnimalImage sex={babySex} hImage="64px" />
          </HStack>
          <Form method="post" ref={formRef}>
            <RadioGroup value={babySex} hidden={true}>
              <Stack direction="row">
                <Radio name="baby-sex-selected" value="boy"></Radio>
                <Radio name="baby-sex-selected" value="girl"></Radio>
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
                // onFocus={onNameFocus}
                // onBlur={onNameBlur}
              />
              {/* <FormLabel htmlFor="name">Teu nome</FormLabel> */}
            </FormControl>
            <Button
              type="submit"
              isLoading={formState === "submitting"}
              loadingText="Enviando..."
              bg="secondary.500"
              disabled={name === ""}
              w="100%"
            >
              OK
            </Button>
          </Form>
        </Box>
      </Center>
    </>
  );
}

function SuccessMessage({
  message,
  ...props
}: {
  message: string;
  [key: string]: any;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);

    const timeout = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      {show && (
        <Alert status="success" {...props} mt="1rem">
          <AlertIcon />
          {message}
        </Alert>
      )}
    </>
  );
}
