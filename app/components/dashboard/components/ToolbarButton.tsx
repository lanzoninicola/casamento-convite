import { Text, VStack } from "@chakra-ui/react";

export default function ToolbarButton({
  icon,
  label,
  onClick,
}: {
  icon: React.ReactElement;
  label: string;
  onClick: () => void;
}) {
  return (
    <VStack
      justify={"flex-start"}
      borderRadius={"5px"}
      bg="gray.100"
      w="55px"
      p=".5rem"
      boxShadow={"sm"}
      onClick={onClick}
    >
      {icon}
      <Text
        as="span"
        fontSize="12px"
        color="gray.500"
        lineHeight={1}
        fontWeight={700}
        letterSpacing={".1px"}
        textTransform="uppercase"
        mt=".25rem"
      >
        {label}
      </Text>
    </VStack>
  );
}
