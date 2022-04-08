import { Box, Grid } from "@chakra-ui/react";
import BaseHeading from "~/components/shared/BaseHeadings";
import {
  MeatIcon,
  VegetableIcon,
  MeatAndVegetableIcon,
} from "~/components/shared/Icons";
import IconStat from "./components/IconStat";

export default function DashboardMealPreference({
  totalCarne,
  totalVegetariano,
  totalIndiferente,
}: {
  totalCarne: number;
  totalVegetariano: number;
  totalIndiferente: number;
}) {
  return (
    <Box>
      <BaseHeading mb="1rem" fontSize="18px">
        Preferência comida
      </BaseHeading>
      <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap="0.5rem">
        <IconStat icon={<MeatIcon />} number={totalCarne} />
        <IconStat icon={<VegetableIcon />} number={totalVegetariano} />
        <IconStat icon={<MeatAndVegetableIcon />} number={totalIndiferente} />
      </Grid>
    </Box>
  );
}
