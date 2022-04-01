import { IconButton, Link } from "@chakra-ui/react";

import { BsWhatsapp } from "react-icons/bs";

export default function WhatsAppWidget() {
  const whastappLink =
    "https://api.whatsapp.com/send?phone=554691201777&text=Ol%C3%A0%20Gustavo%2C%20";

  return (
    <Link href={whastappLink}>
      <IconButton
        aria-label="Whatsapp"
        icon={<BsWhatsapp color="white" />}
        position="fixed"
        bottom="2rem"
        right="2rem"
        borderRadius={50}
        bg="green.500"
        boxShadow={"lg"}
      />
    </Link>
  );
}
