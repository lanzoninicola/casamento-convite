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
import StatBox from "~/components/dashboard/components/StatBox";
import DashboardMealPreference from "~/components/dashboard/DashboardMealPreference";
import GiftPreference from "~/components/dashboard/GiftPreference";
import GuestList from "~/components/dashboard/GuestList";
import RevelationPreference from "~/components/dashboard/RevelationPreference";
import BaseHeading from "~/components/shared/BaseHeadings";
import {
  MeatAndVegetableIcon,
  MeatIcon,
  VegetableIcon,
} from "~/components/shared/Icons";
import { firestoreService } from "~/lib/firebase/db.server";
import GiftDatabaseService from "~/modules/gifts/services/gift-database.service";
import GiftStatService from "~/modules/gifts/services/gift-stat.service";
import { InvitationModel } from "~/modules/invitations/models/invitation.model";
import InvitationStatsService from "~/modules/invitations/services/invitation-stats.service";
import Invitation from "~/modules/invitations/services/invitation.service";
import RevelationDatabaseService from "~/modules/revelation-game/services/revelation-database.service";
import RevelationStatsService from "~/modules/revelation-game/services/revelation-stats.service";

// <meta name="robots" content="noindex,nofollow">
export const meta: MetaFunction = () => {
  return {
    robots: "noindex,nofollow",
  };
};

export const loader: LoaderFunction = async () => {
  /**
   * INVITATIONS
   */
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

  /**
   * GIFT
   */
  const giftDatabaseService = new GiftDatabaseService(firestoreService);
  const giftStats = new GiftStatService(giftDatabaseService);

  const totalGiftByTypeResponse = await giftStats.getTotalByType();

  const totalPix = totalGiftByTypeResponse.pix;
  const totalEnvelope = totalGiftByTypeResponse.envelope;

  /**
   * REVELATIONS
   */
  const revelationDatabaseService = new RevelationDatabaseService(
    firestoreService
  );
  const revelationStats = new RevelationStatsService();
  const revelations = await revelationDatabaseService.getAll();

  let totalBoy = 0;
  let totalGirl = 0;

  if (revelations.ok && revelations.payload) {
    totalBoy = revelationStats.getTotalBoy(revelations.payload);
    totalGirl = revelationStats.getTotalGirl(revelations.payload);
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
    totalPix,
    totalEnvelope,
    totalBoy,
    totalGirl,
  };
};

export default function InvitationDashboard() {
  const statistics = useLoaderData();

  const {
    totalInvitationsReceived,
    totalGuests,
    totalCarne,
    totalVegetariano,
    totalIndiferente,
    totalWillAttend,
    totalWillNotAttend,
    totalPix,
    totalEnvelope,
    totalBoy,
    totalGirl,
  } = statistics;

  return (
    <>
      <Flex direction="column">
        <BaseHeading mb="1rem" fontSize="22px">
          Home
        </BaseHeading>

        <StatBox bg="white" p="1rem" boxShadow="sm" mb="1rem">
          <BaseHeading mb="1rem" fontSize="18px">
            Convites
          </BaseHeading>
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
        </StatBox>
      </Flex>

      <StatBox bg="white" p="1rem" boxShadow="sm" mb="1rem">
        <DashboardMealPreference
          totalCarne={totalCarne}
          totalVegetariano={totalVegetariano}
          totalIndiferente={totalIndiferente}
        />
      </StatBox>
      <StatBox bg="white" p="1rem" boxShadow="sm" mb="1rem">
        <GiftPreference totalPix={totalPix} totalEnvelope={totalEnvelope} />
      </StatBox>
      <StatBox bg="white" p="1rem" boxShadow="sm" mb="1rem">
        <RevelationPreference totalBoy={totalBoy} totalGirl={totalGirl} />
      </StatBox>
    </>
  );
}
