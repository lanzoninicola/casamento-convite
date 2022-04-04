import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useViewportInfo from "./hooks/UseViewPortInfo";

export default function ViewportInfo({
  enableOnProduction = false,
}: {
  enableOnProduction?: boolean;
}) {
  const { width, height } = useViewportInfo();
  const [showViewportInfo, setShowViewPortInfo] = useState<boolean>(false);

  useEffect(() => {
    const nodeEnv = process.env.NODE_ENV;

    if (
      (enableOnProduction && nodeEnv === "development") ||
      nodeEnv === "production"
    ) {
      setShowViewPortInfo(true);
    }

    if (!enableOnProduction && nodeEnv === "development") {
      setShowViewPortInfo(true);
    }
  }, [enableOnProduction]);

  return (
    <>
      {showViewportInfo && (
        <Box
          w="150px"
          h="auto"
          borderRadius="5px"
          boxShadow="2xl"
          position="fixed"
          top="1rem"
          left="1rem"
          bg="yellow.400"
          padding=".5rem"
          zIndex={10000000}
        >
          <VStack>
            <HStack spacing={8} w="100%">
              <Text fontSize="14px" fontWeight={700}>
                Width:
              </Text>
              <Text flex={1} textAlign={"right"}>
                {width}
              </Text>
            </HStack>
            <HStack spacing={8} w="100%">
              <Text fontSize="14px" fontWeight={700}>
                Height:
              </Text>
              <Text flex={1} textAlign={"right"}>
                {height}
              </Text>
            </HStack>
          </VStack>
        </Box>
      )}
    </>
  );
}
