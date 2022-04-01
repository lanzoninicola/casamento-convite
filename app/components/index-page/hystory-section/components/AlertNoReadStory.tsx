import { Box, Fade, Image, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import useAlertHistorySkipped from "~/context/history-context/hooks/useAlertHistorySkipped";
import useHasReadContext from "~/context/history-context/hooks/useHasReadContext";

export default function AlertNoReadStory() {
  const { isAlertHistorySkippedOpen, setIsAlertHistorySkippedOpen } =
    useAlertHistorySkipped();

  const { setHasRead } = useHasReadContext();

  function handleClick() {
    setIsAlertHistorySkippedOpen(false);
    setHasRead(true);
  }

  useEffect(() => {}, []);

  return (
    <>
      {isAlertHistorySkippedOpen && (
        <Fade in={isAlertHistorySkippedOpen}>
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
              bottom="35px"
              left="130px"
              lineHeight={1}
              fontWeight={700}
              maxWidth="170px"
            >
              Ei, você passou sem ler nossa história! Volte e leia-o agora!
            </Text>
          </Box>
        </Fade>
      )}
    </>
  );
}
