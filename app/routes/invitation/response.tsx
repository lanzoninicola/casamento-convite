import { Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { MetaFunction, Outlet } from "remix";
import LogoWithBackground from "~/components/shared/LogoWithBackground";
import SafeArea from "~/components/shared/SafeArea";
import Section from "~/components/shared/Section";
import useWillAttendFormData from "~/context/invitation-context/hooks/useWillAttendFormData";

// TODO: instead to use the condition below, use Outlet and split in route the two pages

export const meta: MetaFunction = () => {
  return {
    title: "Gustavo & Kelly",
    description: "Convite de casamento",
  };
};

export default function Response() {
  const { willAttend } = useWillAttendFormData();

  const bgImage = willAttend ? "thank-you-bg.jpg" : "gosh-bg.png";

  return (
    <Section
      id="invitation-response"
      maxH="100vh"
      backgroundImage={`url(/images/${bgImage})`}
      backgroundSize="cover"
    >
      <SafeArea>
        <Grid h="100%" gridTemplateRows="auto 1fr" gap="1rem">
          <LogoWithBackground />
          <Outlet />
        </Grid>
      </SafeArea>
    </Section>
  );
}
