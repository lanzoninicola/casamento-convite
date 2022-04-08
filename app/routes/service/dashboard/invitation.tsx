import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Grid,
  HStack,
  Stat,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import IconStat from "~/components/dashboard/components/IconStat";
import NumberStat from "~/components/dashboard/components/NumberStat";
import NumberStatFullWidth from "~/components/dashboard/components/NumberStatFullWidth";
import DashboardMealPreference from "~/components/dashboard/DashboardMealPreference";
import GuestList from "~/components/dashboard/GuestList";
import BaseHeading from "~/components/shared/BaseHeadings";
import {
  MeatAndVegetableIcon,
  MeatIcon,
  VegetableIcon,
} from "~/components/shared/Icons";
import { firestoreService } from "~/lib/firebase/db.server";
import { InvitationModel } from "~/modules/invitations/models/invitation.model";
import InvitationStatsService from "~/modules/invitations/services/invitation-stats.service";
import Invitation from "~/modules/invitations/services/invitation.service";

// <meta name="robots" content="noindex,nofollow">
export const meta: MetaFunction = () => {
  return {
    robots: "noindex,nofollow",
  };
};

export const loader: LoaderFunction = async () => {
  const invitation = new Invitation(firestoreService);
  const invitationStats = new InvitationStatsService();
  const invitationResponse = await invitation.getAll();

  let invitations: InvitationModel[] = [];
  let totalInvitationsReceived = 0;
  let totalGuests = 0;
  let totalCarne = 0;
  let totalVegetariano = 0;
  let totalIndiferente = 0;
  let totalWillAttend = 0;
  let totalWillNotAttend = 0;

  if (invitationResponse.ok && invitationResponse.payload) {
    invitations = invitationResponse.payload;

    totalInvitationsReceived =
      invitationStats.getTotalsInvitations(invitations);
    totalGuests = invitationStats.getTotalGuests(invitations);
    totalCarne = invitationStats.getTotalByMealPreference(invitations, "carne");
    totalVegetariano = invitationStats.getTotalByMealPreference(
      invitations,
      "vegetariano"
    );
    totalIndiferente = invitationStats.getTotalByMealPreference(
      invitations,
      "indiferente"
    );
    totalWillAttend = invitationStats.getWillAttend(invitations).length;
    totalWillNotAttend = invitationStats.getWillNotAttend(invitations).length;
  }

  return {
    invitations,
    totalInvitationsReceived,
    totalGuests,
    totalCarne,
    totalVegetariano,
    totalIndiferente,
    totalWillAttend,
    totalWillNotAttend,
  };
};

export default function InvitationDashboard() {
  const statistics = useLoaderData();

  const {
    invitations,
    totalInvitationsReceived,
    totalGuests,
    totalCarne,
    totalVegetariano,
    totalIndiferente,
    totalWillAttend,
    totalWillNotAttend,
  } = statistics;

  return (
    <>
      <Flex direction="column">
        <BaseHeading mb="1rem" fontSize="22px">
          Convites
        </BaseHeading>
        <Box mb="1rem">
          <Box mb="1rem">
            <NumberStatFullWidth
              label="Convidados"
              number={totalGuests}
              helpText="Numero total de convidados"
              bg="green.100"
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
              bg="red.100"
            />
          </HStack>
        </Box>
      </Flex>
      <Divider borderColor={"transparent"} marginBlock={"1rem"} />
      <DashboardMealPreference
        totalCarne={totalCarne}
        totalVegetariano={totalVegetariano}
        totalIndiferente={totalIndiferente}
      />
      <Divider borderColor={"transparent"} marginBlock={"1rem"} />
      <GuestList invitations={invitations} />
    </>
  );
}

function ListRow() {}
