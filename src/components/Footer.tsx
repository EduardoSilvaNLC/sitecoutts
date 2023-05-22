import { HStack, Link, Stack, Text } from "@chakra-ui/react";

function Footer() {
  const estilo = "medium";
  const direcao = "column";
  const alinhamento = "baseline";
  const altura = "30px";
  return (
    <>
      <HStack
        justifyContent="space-around"
        alignItems={{ base: alinhamento }}
        flexDirection={{ base: direcao }}
        height="80vh"
      >
        <Stack>
          <Text fontWeight={estilo}>Shop and Learn</Text>
          <Link>CC Class Gold 1 Gen</Link>
          <Link>CC Class Platinum 1 Gen</Link>
          <Link>CC Class Diamond 1 Gen</Link>
          <Link>CC Class Smart Office 1 Gen</Link>
          <Link>Pheripheral</Link>
        </Stack>
        <Stack>
          <Text fontWeight={estilo}>Services</Text>
          <Link>Maintenance</Link>
          <Link>Repairs</Link>
          <Link>Cleaning</Link>
          <Link>Assembly</Link>
          <Link>Computer formatting</Link>
        </Stack>
        <Stack>
          <Text fontWeight={estilo}>Contact and Address</Text>
          <Link>+44 07300 930 051</Link>
          <Link>sales@couttscomputers.co.uk</Link>
          <Link>Cambridge, Cambridgeshire - England</Link>
        </Stack>
      </HStack>
    </>
  );
}
export default Footer;
