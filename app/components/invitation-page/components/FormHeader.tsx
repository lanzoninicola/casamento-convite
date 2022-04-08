import { Center, Flex, Text } from "@chakra-ui/react";
import BaseHeading from "~/components/shared/BaseHeadings";
import { TextDecorated } from "~/components/shared/TextDecorated";
import settings from "~/modules/settings";

export default function FormHeader() {
  return (
    <Flex direction="column" gap="1.5rem">
      <Center>
        <TextDecorated>Momentos mágicos</TextDecorated>
      </Center>
      <BaseHeading fontSize="38px" fontWeight="700" color="text.500">
        Você vai estar presente em nosso dia especial?
      </BaseHeading>
      <Text fontSize="14px" textTransform="uppercase" letterSpacing="1px">
        CASAMENTO EM{" "}
        <Text as="span" fontWeight={700}>
          {" "}
          {settings.eventFullDateHumanReadable}
        </Text>
      </Text>
      {/* <Center w="100%" h="30px" gap="1rem">
        <EllipseDecorator
          diameter="8px"
          repeat={3}
          bg="primary.500"
          gap="1rem"
        />
      </Center> */}
    </Flex>
  );
}
