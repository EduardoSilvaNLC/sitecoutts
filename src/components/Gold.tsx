import { HStack, Image } from "@chakra-ui/react";
import gold from "../assets/1.png";

function Gold() {
  const imgMedio = "290px";
  return (
    <HStack justifyContent="center">
      <Image w={{ base: imgMedio }} objectFit="cover" src={gold} />;
    </HStack>
  );
}
export default Gold;
