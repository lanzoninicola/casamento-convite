import { HStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "remix";

export default function Tab({
  icon,
  label,
  urlFragment,
  bg = "gray.200",
  ...props
}: {
  icon?: React.ReactElement;
  label: string;
  urlFragment: string;
  bg?: string;
  [key: string]: any;
}) {
  return (
    <Link
      to={urlFragment}
      // style={{
      //   width: 1,
      // }}
    >
      <HStack bg={bg} borderRadius="10px" p=".25rem .5rem">
        <HStack>
          {icon}
          <Text fontSize="14px" {...props}>
            {label}
          </Text>
        </HStack>
      </HStack>
    </Link>
  );
}
