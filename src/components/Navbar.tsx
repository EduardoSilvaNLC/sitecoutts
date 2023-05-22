import { HStack, Image, Link, Show } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SocialMedia from "./SocialMedia";

function Navbar() {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <Link href="/">
        <Image w="233px" h="66px" objectFit="cover" src={logo}></Image>
      </Link>
      <SocialMedia />
    </HStack>
  );
}

export default Navbar;
