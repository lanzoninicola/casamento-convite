import { Box, Grid } from "@chakra-ui/react";
import BaseHeading from "~/components/shared/BaseHeadings";
import { BoyIcon, GirlIcon } from "~/components/shared/Icons";

import IconStat from "./components/IconStat";

export default function RevelationPreference({
  totalBoy,
  totalGirl,
}: {
  totalBoy: number;
  totalGirl: number;
}) {
  return (
    <Box>
      <BaseHeading mb="1rem" fontSize="18px">
        Preferência na revelação
      </BaseHeading>
      <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap="0.5rem">
        <IconStat icon={<BoyIcon size={40} />} number={totalBoy} />
        <IconStat icon={<GirlIcon size={40} />} number={totalGirl} />
      </Grid>
    </Box>
  );
}
