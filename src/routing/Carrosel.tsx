import { HStack, Image } from "@chakra-ui/react";
import gold from "../assets/1.png";
import platinum from "../assets/2.png";
import diamond from "../assets/3.png";

function Carrosel() {
  const largura = "20%";

  return (
    <HStack m="70px auto" justifyContent="space-around">
      <Image w={largura} src={gold} />
      <Image w={largura} src={platinum} />
      <Image w={largura} src={diamond} />
    </HStack>
  );
}

export default Carrosel;
