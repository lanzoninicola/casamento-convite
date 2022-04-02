import { Box, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import useAlertHistorySkipped, {
  HistorySkyppedStatus,
} from "~/components/index-page/hystory-section/hooks/useAlertHistorySkipped";

export default function AlertNoReadStory() {
  const { status, setStatus } = useAlertHistorySkipped();

  function handleClick() {
    setStatus(HistorySkyppedStatus.closed);
  }

  return (
    <>
      {status === HistorySkyppedStatus.visible && (
        <Box
          maxHeight="420px"
          position="fixed"
          bottom="10rem"
          onClick={handleClick}
        >
          <Box position="relative">
            <Image src="/images/alert-no-read-story.png" />
          </Box>
          <Text
            position="absolute"
            bottom="28px"
            left="130px"
            lineHeight={1.2}
            fontWeight={700}
            maxWidth="170px"
          >
            Ei, você passou sem ler nossa história! Volte e leia agora!
          </Text>
        </Box>
      )}
    </>
  );
}
