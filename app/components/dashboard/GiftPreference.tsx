import { Box, Grid } from "@chakra-ui/react";
import BaseHeading from "~/components/shared/BaseHeadings";
import { EnvelopeIcon, PixIcon } from "~/components/shared/Icons";

import IconStat from "./components/IconStat";

export default function GiftPreference({
  totalPix,
  totalEnvelope,
}: {
  totalPix: number;
  totalEnvelope: number;
}) {
  return (
    <Box w="100%">
      <BaseHeading mb="1rem" fontSize="18px">
        PreferĂȘncia presente
      </BaseHeading>
      <Grid gridTemplateColumns={"repeat(2, 1fr)"} gap="0.5rem">
        <IconStat icon={<PixIcon />} number={totalPix} />
        <IconStat icon={<EnvelopeIcon />} number={totalEnvelope} />
      </Grid>
    </Box>
  );
}
