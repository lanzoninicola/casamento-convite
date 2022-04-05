import {
  Button,
  Center,
  Grid,
  HStack,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ActionFunction, Form, Link, redirect } from "remix";
import BaseHeading from "~/components/shared/BaseHeadings";
import useRemixLocalStorage from "~/components/shared/hooks/useRemixLocalStorage";
import { EnvelopeIcon, PixIcon } from "~/components/shared/Icons";
import { firestoreService } from "~/lib/firebase/db.server";
import GiftDatabaseService from "~/modules/gifts/services/gift-database.service";
import GiftFormDeserializer from "~/modules/gifts/services/giftFormDeserializer";
import settings from "~/modules/settings";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const formGuestName = formData.get("guestName");
  const formGiftType = formData.get("type");

  const giftDeserizer = new GiftFormDeserializer();
  const giftModel = giftDeserizer.deserialize({ formGuestName, formGiftType });

  const giftService = new GiftDatabaseService(firestoreService);
  const response = await giftService.add(giftModel);

  if (response.ok) {
    return redirect(`/invitation/gift/${formGiftType}`);
  }
};

export default function ThankYou() {
  const [guestName] = useRemixLocalStorage<string | null>(
    "INVITATION_FORM_GUEST_NAME",
    null
  );

  return (
    <Grid gridTemplateRows=".5fr 1fr 1fr 1fr 1fr" h="100%">
      <VStack spacing={4}>
        <BaseHeading as="h1" fontSize="38px" fontWeight="700" lineHeight="1">
          Obrigado
        </BaseHeading>
        {guestName !== "" && (
          <BaseHeading
            as="h2"
            fontSize="26px"
            fontWeight="400"
            color="text.500"
          >
            {guestName}
          </BaseHeading>
        )}
      </VStack>
      <Center>
        <VStack>
          <Text fontWeight={700} textAlign="center" lineHeight={1.2}>
            Querido Convidado,
          </Text>
          <Text fontSize="16px" textAlign="center" lineHeight={1.2}>
            caso queria nos agraciar <br />
            com um presente, saiba que:
          </Text>
        </VStack>
      </Center>
      <Center>
        <VStack spacing=".5rem" w="65vw">
          <Text
            fontSize="16px"
            lineHeight="1.3"
            textAlign="justify"
            fontStyle="italic"
            fontWeight={700}
          >
            "Nossa casa está prontiha
            <br />
            Já não cabe mais nadinha <br /> Mas a gente não é louco <br />
            De recusar uma ajudinha <br />
            Afinal quem é que nunca
            <br /> Precisou de uma graninha?"
          </Text>
        </VStack>
      </Center>
      <Center>
        <VStack>
          <Text fontSize="14px" lineHeight="1" textAlign={"center"}>
            Escolha sua opção:
          </Text>

          <Form method="post">
            <Input
              hidden
              readOnly
              name="guestName"
              value={guestName ? guestName : ""}
            />

            <HStack spacing={8}>
              <PixButton />
              <EnvelopeButton />
            </HStack>
          </Form>
        </VStack>
      </Center>

      <VStack>
        <Text fontSize="14px" textTransform="uppercase" letterSpacing="1px">
          Pato Branco, {settings.eventFullDateHumanReadable}
        </Text>
      </VStack>
    </Grid>
  );
}

function PaymentButton({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Button
      type="submit"
      fontSize="14px"
      minW={"130px"}
      bg="secondary.500"
      {...props}
    >
      {children}
    </Button>
  );
}

function PixButton() {
  return (
    // <Link to="/invitation/gift/pix">
    <PaymentButton rightIcon={<PixIcon />} name="type" value="pix">
      PIX
    </PaymentButton>
    // </Link>
  );
}

function EnvelopeButton() {
  return (
    // <Link to="/invitation/gift/envelope">
    <PaymentButton rightIcon={<EnvelopeIcon />} name="type" value="envelope">
      ENVELOPE
    </PaymentButton>
    // </Link>
  );
}
