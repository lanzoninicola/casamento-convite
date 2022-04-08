import { HStack, Text } from "@chakra-ui/react";
import { Link } from "remix";

import ArrowRight from "../ArrowRight";

export default function InternalNavigationButton({
  icon,
  label,
  urlFragment,
  bg = "gray.200",
  ...props
}: {
  icon?: React.ReactElement;
  label: string;
  url: string;
  bg?: string;
  [key: string]: any;
}) {
  return (
    <Link to={urlFragment}>
      <HStack bg={bg} borderRadius="5px" p=".25rem .5rem" shadow={"lg"}>
        <HStack>
          {icon}
          <Text fontSize="16px" {...props}>
            {label}
          </Text>
        </HStack>
        <ArrowRight size={16} />
      </HStack>
    </Link>
  );
}
