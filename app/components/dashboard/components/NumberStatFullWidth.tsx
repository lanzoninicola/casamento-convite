import { Flex } from "@chakra-ui/react";
import StatBox from "./StatBox";
import StatHelpText from "./StatHelpText";
import StatLabel from "./StatLabel";
import StatNumber from "./StatNumber";

export default function NumberStatFullWidth({
  label,
  number,
  helpText,
  ...props
}: {
  label: string;
  number: number;
  helpText?: string;
  [key: string]: any;
}) {
  return (
    <StatBox paddingBlock="1rem" {...props}>
      <Flex direction={"row"} justify={"space-between"}>
        <Flex direction={"column"} gap={"0.5rem"}>
          <StatLabel>{label}</StatLabel>
          <StatHelpText>{helpText}</StatHelpText>
        </Flex>
        <StatNumber fontSize="3rem">{number}</StatNumber>
      </Flex>
    </StatBox>
  );
}
