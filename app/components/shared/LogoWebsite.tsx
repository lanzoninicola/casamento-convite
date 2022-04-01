import { Box, Image } from "@chakra-ui/react";
import { Link } from "remix";

export default function LogoWebsite() {
  return (
    <Box>
      <Link to="/#hero">
        <Image src={`/images/logo-website.png`} alt="logo" />
      </Link>
    </Box>
  );
}
