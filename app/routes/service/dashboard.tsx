import { Center, Container } from "@chakra-ui/react";
import { Outlet } from "remix";
import Tab from "~/components/dashboard/components/Tab";
import Tabs from "~/components/dashboard/components/Tabs";
import BaseHeading from "~/components/shared/BaseHeadings";
import {
  BabyIcon,
  HomeIcon,
  InvitationIcon,
  PaymentIcon,
} from "~/components/shared/Icons";

export default function Dashboard() {
  return (
    <Container padding="1rem" bg="gray.50" gap="1rem" minH={"100vh"}>
      <Center>
        <BaseHeading
          mb="2rem"
          fontSize="28px"
          fontWeight="700"
          letterSpacing="-0.02rem"
        >
          Relatorios
        </BaseHeading>
      </Center>
      <Tabs>
        <Tab
          icon={<HomeIcon />}
          label="Home"
          urlFragment="/service/dashboard"
        />
        <Tab
          icon={<InvitationIcon />}
          label="Convidados"
          urlFragment="/service/dashboard/invitation"
        />
        <Tab
          icon={<PaymentIcon />}
          label="Presentes"
          urlFragment="/service/dashboard/gifts"
        />
        <Tab
          icon={<BabyIcon />}
          label="Revelação"
          urlFragment="/service/dashboard/revelation"
        />
      </Tabs>
      <Outlet />
    </Container>
  );
}
