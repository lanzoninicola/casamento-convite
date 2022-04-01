import { Box, Center, Text } from "@chakra-ui/react";

export default function MapFrame({
  gUrl,
  w,
  h,
}: {
  gUrl: string;
  w: number;
  h: number;
}) {
  return (
    <>
      {process.env.NODE_ENV === "development" ? (
        <MapFramePlaceholder w={w} h={h} />
      ) : (
        <GoogleMapFrame gUrl={gUrl} w={w} h={h} />
      )}
    </>
  );
}

function GoogleMapFrame({
  gUrl,
  w,
  h,
}: {
  gUrl: string;
  w: number;
  h: number;
}) {
  return (
    <iframe
      src={gUrl}
      width={w}
      height={w}
      style={{ border: 0 }}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}

function MapFramePlaceholder({ w, h }: { w: number; h: number }) {
  return (
    <Center width={w} height={h} bg="gray.200" borderRadius="md">
      <Text>Map placeholder</Text>
    </Center>
  );
}
