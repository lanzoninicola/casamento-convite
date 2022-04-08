import { Center, Grid, HStack, Input, VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ActionFunction, Form, MetaFunction, Outlet, redirect } from "remix";
import useRemixLocalStorage from "~/components/shared/hooks/useRemixLocalStorage";
import LogoWithBackground from "~/components/shared/LogoWithBackground";
import {
  EnvelopeButton,
  PixButton,
} from "~/components/shared/buttons/PaymentButtons";
import SafeArea from "~/components/shared/SafeArea";
import Section from "~/components/shared/Section";
import Pegadinha from "~/components/thank-you-page/components/Pegadinha";
import useWillAttendFormData from "~/context/invitation-context/hooks/useWillAttendFormData";
import { firestoreService } from "~/lib/firebase/db.server";

import GiftDatabaseService from "~/modules/gifts/services/gift-database.service";
import GiftFormDeserializer from "~/modules/gifts/services/giftFormDeserializer";
import settings from "~/modules/settings";

// TODO: instead to use the condition below, use Outlet and split in route the two pages

export const meta: MetaFunction = () => {
  return {
    title: "Gustavo & Kelly",
    description: "Convite de casamento",
  };
};

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

export default function Response() {
  const [guestName] = useRemixLocalStorage<string | null>(
    "INVITATION_FORM_GUEST_NAME",
    null
  );
  const { willAttend } = useWillAttendFormData();

  const bgImage = true ? "thank-you-bg.jpg" : "gosh-bg.png";

  return (
    <Section
      id="invitation-response"
      maxHeight="100vh"
      backgroundImage={`url(/images/${bgImage})`}
      backgroundSize="cover"
    >
      <SafeArea>
        <Grid h="100%" gridTemplateRows="repeat(6, 1fr)" gap="1rem">
          <LogoWithBackground mb="1rem" />
          <Outlet />
          <Center>
            <VStack>
              <Text fontWeight={700} textAlign="center" lineHeight={1.2}>
                Querido(a) {guestName},
              </Text>
              <Text fontSize="16px" textAlign="center" lineHeight={1.2}>
                caso queria nos agraciar <br />
                com um presente, saiba que:
              </Text>
            </VStack>
          </Center>
          <Pegadinha />
          <Center>
            <VStack>
              {willAttend && (
                <Text fontSize="14px" lineHeight="1" textAlign={"center"}>
                  Escolha sua opção:
                </Text>
              )}

              <Form method="post">
                <Input
                  hidden
                  readOnly
                  name="guestName"
                  value={guestName ? guestName : ""}
                />

                <HStack spacing={8}>
                  {willAttend && <EnvelopeButton />}
                  <PixButton />
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
      </SafeArea>
    </Section>
  );
}
