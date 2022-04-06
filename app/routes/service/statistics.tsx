import {
  Box,
  Center,
  Container,
  Flex,
  Grid,
  HStack,
  Stack,
  Stat,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import BaseHeading from "~/components/shared/BaseHeadings";
import Section from "~/components/shared/Section";
import { firestoreService } from "~/lib/firebase/db.server";
import { FirestoreCollectionResponse } from "~/lib/firebase/firestore.interfaces";
import { MealPreference } from "~/modules/invitations/interfaces/invitation.interface";
import { InvitationModel } from "~/modules/invitations/models/invitation.model";
import InvitationStatsService from "~/modules/invitations/services/invitation-stats.service";
import Invitation from "~/modules/invitations/services/invitation.service";
import InvitationService from "~/modules/invitations/services/invitation.service";
import InvitationMockService from "~/modules/invitations/services/invitation.service.mock";

// <meta name="robots" content="noindex,nofollow">
export const meta: MetaFunction = () => {
  return {
    robots: "noindex,nofollow",
  };
};

export const loader: LoaderFunction = async () => {
  const invitation = new Invitation(firestoreService);
  const invitationStats = new InvitationStatsService();
  const invitations = await invitation.getAll();

  let totalInvitationsReceived = 0;
  let totalRevelations = 0;
  let totalSessions = 0;
  let totalGifts = 0;

  if (invitations.ok && invitations.payload) {
    totalInvitationsReceived = invitationStats.getTotalsInvitations(
      invitations.payload
    );
  }

  return null;
};

export default function Statistics() {
  const invitations: InvitationModel[] = useLoaderData();
  console.log(invitations);

  // const totalInvitationsReceived = invitations.length;
  // const totalGuests = getTotalGuests(invitations);
  // const totalCarne = getTotalByMealPreference(invitations, "carne");
  // const totalVegetariano = getTotalByMealPreference(invitations, "vegetariano");
  // const totalIndiferente = getTotalByMealPreference(invitations, "indiferente");
  // const totalWillAttend = getWillAttend(invitations).length;
  // const totalWillNotAttend = getWillNotAttend(invitations).length;
  // const listWillAttend = getWillAttend(invitations);
  // const listWillNotAttend = getWillNotAttend(invitations);

  return (
    <Container padding="1rem" bg="gray.50" gap="1rem">
      <Center>
        <Text
          mb="1rem"
          fontSize="16px"
          textTransform="uppercase"
          fontWeight="700"
        >
          Estatisticas
        </Text>
      </Center>
      {/* <Box mb="1rem">
        <Box mb="1rem">
          <NumberStat
            label="Convidados"
            number={totalGuests}
            helpText="Numero total de convidados"
          />
        </Box>
        <HStack>
          <NumberStat
            label="Recebidos"
            number={totalInvitationsReceived}
            helpText="Total de respostas recebidas"
          />
          <NumberStat
            label="Participantes"
            number={totalWillAttend}
            helpText="Total de respostas positivas"
          />
          <NumberStat
            label="Ausentes"
            number={totalWillNotAttend}
            helpText="Total de respostas negativas"
          />
        </HStack>
      </Box> */}
      <Box>
        <Text mb="1rem" fontSize="14px" textTransform="uppercase">
          Preferência comida
        </Text>
      </Box>
      <Box></Box>
    </Container>
  );
}

function ListRow() {}

function NumberStat({
  label,
  number,
  helpText,
}: {
  label: string;
  number: number;
  helpText: string;
}) {
  return (
    <StatBox>
      <StatLabel>{label}</StatLabel>
      <StatNumber>{number}</StatNumber>
      <StatHelpText>{helpText}</StatHelpText>
    </StatBox>
  );
}

function StatBox({
  children,
  ...props
}: {
  children: React.ReactNode;
  [key: string]: any;
}) {
  return (
    <Box
      borderRadius="5px"
      border="1px solid"
      borderColor="gray.300"
      paddingBlock=".5rem"
      paddingInline="1rem"
      {...props}
    >
      <Stat textAlign="center">{children}</Stat>
    </Box>
  );
}

function StatLabel({ children }: { children: React.ReactNode }) {
  return (
    <Text fontSize="14px" fontWeight="bold" lineHeight={1}>
      {children}
    </Text>
  );
}

function StatNumber({ children }: { children: React.ReactNode }) {
  return (
    <Text fontSize="24px" fontWeight="bold">
      {children}
    </Text>
  );
}

function StatHelpText({ children }: { children: React.ReactNode }) {
  return (
    <Text fontSize="12px" color="gray.500" lineHeight={1}>
      {children}
    </Text>
  );
}
