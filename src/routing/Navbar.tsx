import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import SocialMedia from "./SocialMedia";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <HStack justifyContent="space-between" padding="5px">
      <Link to="/">
        <Image w="233px" h="66px" objectFit="cover" src={logo}></Image>
      </Link>
      <SocialMedia />
    </HStack>
  );
}

export default Navbar;
