import { Box, Flex, Grid, HStack, Input, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { LoaderFunction, MetaFunction, useLoaderData } from "remix";
import NumberStat from "~/components/dashboard/components/NumberStat";
import NumberStatFullWidth from "~/components/dashboard/components/NumberStatFullWidth";
import StatBox from "~/components/dashboard/components/StatBox";
import StatLabel from "~/components/dashboard/components/StatLabel";
import StatNumber from "~/components/dashboard/components/StatNumber";
import DashboardMealPreference from "~/components/dashboard/DashboardMealPreference";
import GiftPreference from "~/components/dashboard/GiftPreference";
import RevelationPreference from "~/components/dashboard/RevelationPreference";
import BaseHeading from "~/components/shared/BaseHeadings";
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
      <GiftSection
        totalPix={totalPix}
        totalEnvelope={totalEnvelope}
        totalGuests={totalGuests}
      />
      <StatBox bg="white" p="1rem" boxShadow="sm" mb="1rem">
        <RevelationPreference totalBoy={totalBoy} totalGirl={totalGirl} />
      </StatBox>
    </>
  );
}

function GiftSection({
  totalPix,
  totalEnvelope,
  totalGuests,
}: {
  totalPix: number;
  totalEnvelope: number;
  totalGuests: number;
}) {
  const [totalIncomeEstimation, setTotalIncomeEstimation] = useState(
    totalGuests * 100
  );
  const [averagePaxAmount, setAveragePaxAmount] = useState(100);
  const [weddingCostAmount, setWeddingCostAmount] = useState(5000);
  const [result, setResult] = useState(0);

  function onChangeAverageValue(value: number) {
    if (isNaN(value)) {
      setAveragePaxAmount(0);
    } else {
      setAveragePaxAmount(value);
    }
  }

  function calculateIncomeEstimation() {
    setTotalIncomeEstimation(totalGuests * averagePaxAmount);
  }

  function onChangeWeddingCost(value: number) {
    if (isNaN(value)) {
      setWeddingCostAmount(0);
    } else {
      setWeddingCostAmount(value);
    }
  }

  function calculateResult() {
    const result = totalIncomeEstimation - weddingCostAmount;
    setResult(result);
  }

  useEffect(() => {
    calculateIncomeEstimation();
  }, [averagePaxAmount]);

  useEffect(() => {
    calculateResult();
  }, [totalIncomeEstimation, weddingCostAmount]);

  return (
    <StatBox bg="white" p="1rem" boxShadow="sm" mb="1rem">
      <VStack align={"flex-start"} spacing={8} w="100%">
        <GiftPreference totalPix={totalPix} totalEnvelope={totalEnvelope} />
        <VStack align={"flex-start"} spacing={0} w="100%">
          <BaseHeading mb="1rem" fontSize="16px">
            Balanço Casamento
          </BaseHeading>
          <Grid gridTemplateColumns={"1fr 1fr"} w="100%" gap="1rem">
            {/* First Row */}
            <HStack>
              <StatLabel>Media R$</StatLabel>
              <Input
                variant="filled"
                name="average-value"
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                value={averagePaxAmount || ""}
                fontSize="18px"
                textAlign={"right"}
                onChange={(e) =>
                  onChangeAverageValue(parseInt(e.target.value, 10))
                }
              />
              <StatLabel>por pessoa</StatLabel>
            </HStack>
            <HStack justify="space-between">
              <StatLabel>R$</StatLabel>
              <StatNumber textAlign="right">{`${totalIncomeEstimation}`}</StatNumber>
            </HStack>
            {/* Second Row */}
            <HStack>
              <StatLabel>Custo Casamento</StatLabel>
            </HStack>
            <HStack>
              <StatLabel>R$</StatLabel>
              <Input
                variant="filled"
                type="text"
                name="wedding-cost"
                inputMode="numeric"
                pattern="[0-9*]"
                value={weddingCostAmount || ""}
                fontSize="18px"
                textAlign={"right"}
                onChange={(e) =>
                  onChangeWeddingCost(parseInt(e.target.value, 10))
                }
              />
            </HStack>
            {/* Third Row */}
            <HStack>
              <StatLabel>{`Resultado (+/-)`}</StatLabel>
            </HStack>
            <HStack justify="space-between">
              <StatLabel>R$</StatLabel>
              <StatNumber
                textAlign="right"
                color={result > 0 ? "green.300" : "red.300"}
              >
                {result}
              </StatNumber>
            </HStack>
          </Grid>
        </VStack>
      </VStack>
    </StatBox>
  );
}
