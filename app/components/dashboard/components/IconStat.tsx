import { Flex, StatNumber } from "@chakra-ui/react";
import StatBox from "./StatBox";

export default function IconStat({
  icon,
  number,
  ...props
}: {
  icon: React.ReactElement;
  number: number;
  [key: string]: any;
}) {
  return (
    <StatBox bg="gray.200" {...props}>
      <Flex direction={"row"} justify="space-between">
        {icon}
        <StatNumber fontSize="24px">{number}</StatNumber>
      </Flex>
    </StatBox>
  );
}
