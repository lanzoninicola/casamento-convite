import { AspectRatio, Box, Center, Text } from "@chakra-ui/react";

export default function MapFrame({
  gUrl,
  maxH,
  maxHeight,
}: {
  gUrl: string;
  maxH?: string;
  maxHeight?: string;
}) {
  return (
    <>
      <AspectRatio ratio={9 / 16} maxH={maxH} maxHeight={maxHeight}>
        {process.env.NODE_ENV === "development" ? (
          <MapFramePlaceholder />
        ) : (
          <GoogleMapFrame gUrl={gUrl} />
        )}
      </AspectRatio>
    </>
  );
}

function GoogleMapFrame({ gUrl }: { gUrl: string }) {
  return (
    <iframe
      src={gUrl}
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

function MapFramePlaceholder() {
  return (
    <Center h="100%" w="100%" bg="gray.200" borderRadius="md">
      <Text>Map placeholder</Text>
    </Center>
  );
}
