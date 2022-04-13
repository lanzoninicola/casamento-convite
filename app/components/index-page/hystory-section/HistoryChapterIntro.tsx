import { Center, Grid, Text, VStack } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import BaseHeading from "~/components/shared/BaseHeadings";
import { TextDecorated } from "~/components/shared/TextDecorated";

export default function HistoryChapterIntro({
  textMonth,
  textYear,
  title,
}: {
  textMonth: string;
  textYear: string;
  title: string;
}) {
  return (
    <>
      {/* <TopBackgroundPattern /> */}
      <Grid h="100%" gridTemplateRows="auto auto auto" pb="2rem">
        <Center>
          <TextDecorated>Nossa Historia</TextDecorated>
        </Center>
        <Center>
          <VStack>
            <Text
              color="text.500"
              fontSize="38px"
              letterSpacing="0.145em"
              lineHeight="1"
            >
              {textMonth}
            </Text>
            <Text
              color="text.500"
              fontSize="60px"
              letterSpacing="-0.04em"
              lineHeight="1"
            >
              {textYear}
            </Text>
          </VStack>
        </Center>
        <Center>
          <BaseHeading as="h3" fontWeight="700">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString(title).start();
              }}
              options={{
                delay: 90,
              }}
            />
          </BaseHeading>
        </Center>
      </Grid>
    </>
  );
}
