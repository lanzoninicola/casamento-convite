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
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Form } from "remix";
import BaseHeading from "~/components/shared/BaseHeadings";
import HighlightedText from "~/components/shared/HighlightedText";
import { RemixFormState } from "~/modules/shared/interfaces/RemixRun";
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
  const [inputNameFocused, setInputNameFocused] = useState<boolean>(false);
  const [name, setName] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.reset();
    }
  }, [formState]);

  function onNameFocus() {
    setInputNameFocused(!inputNameFocused);
  }

  function onNameChange(name: string) {
    setName(name);
  }

  function onSexSelection(sex: BabySex) {
    setBabySex(sex);
  }

  function gridTemplateRows(): string {
    let babyOptionARow = ".5fr 1fr .5fr";

    if (inputNameFocused) {
      babyOptionARow = "auto 120px 1fr";
    }

    return babyOptionARow;
  }

  useEffect(() => {
    gridTemplateRows();
  }, [inputNameFocused]);

  return (
    <Grid
      h="100%"
      gridTemplateRows={gridTemplateRows()}
      gap="1rem"
      paddingInline={"1rem"}
    >
      <Center flexDirection="column" gap=".5rem">
        <BaseHeading color="text.500" textAlign="center">
          O que você acha que é
        </BaseHeading>
        <Text
          fontSize="14px"
          textAlign="center"
          textTransform="uppercase"
          letterSpacing="1px"
        >
          Deixe sua opinião e concorra <br />
          <Center>
            <HighlightedText bg="primary.500">
              a uma troca de frauda
            </HighlightedText>
          </Center>
        </Text>
      </Center>

      <Flex direction="row" gap="2rem" paddingInline="2rem">
        <BabyOption
          sex="girl"
          onClick={() => onSexSelection("girl")}
          opacity={formState === "idle" && babySex === "boy" ? 0.3 : 1}
          transform={inputNameFocused && "scale(0.3)"}
          h={inputNameFocused && "50px"}
        />
        <BabyOption
          sex="boy"
          onClick={() => onSexSelection("boy")}
          opacity={formState === "idle" && babySex === "girl" ? 0.3 : 1}
          transform={inputNameFocused && "scale(0.3)"}
          h={inputNameFocused && "50px"}
        />
      </Flex>

      <Form method="post" ref={formRef}>
        <RadioGroup
          onChange={() => onSexSelection("boy")}
          value={babySex}
          hidden={true}
        >
          <Stack direction="row">
            <Radio name="baby-sex-selected" value="boy"></Radio>
            <Radio name="baby-sex-selected" value="girl"></Radio>
          </Stack>
        </RadioGroup>

        <HStack spacing={4}>
          <FormControl isRequired variant="floating">
            <Input
              name="name"
              placeholder="Teu nome"
              size="md"
              _placeholder={{ color: "text.500" }}
              onChange={(e) => onNameChange(e.target.value)}
              onFocus={onNameFocus}
              onBlur={onNameFocus}
            />
            {/* <FormLabel htmlFor="name">Teu nome</FormLabel> */}
          </FormControl>
          <Button
            type="submit"
            isLoading={formState === "submitting"}
            loadingText="Enviando..."
            bg="secondary.500"
            disabled={babySex === undefined || name === ""}
          >
            Envia
          </Button>
        </HStack>
        {formState === "success" && <SuccessMessage message={"Enviado!"} />}
      </Form>
    </Grid>
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
