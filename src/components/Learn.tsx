import {
  AspectRatio,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
} from "@chakra-ui/react";
import goldImagem from "../assets/1.png";
import { HiOutlineChip } from "react-icons/hi";
import { SiNvidia } from "react-icons/si";
import { FaMemory } from "react-icons/fa";
import { FiHardDrive } from "react-icons/fi";
import { ImPowerCord } from "react-icons/im";
import { CgBox } from "react-icons/cg";
import { TbExternalLink } from "react-icons/tb";
function Learn() {
  const larga = "50px";
  const medio = "38px";

  return (
    <>
      <Heading
        color="#393535"
        fontWeight="medium"
        mt="100px"
        textAlign="center"
        as="h2"
        fontSize={{ base: medio, md: larga }}
      >
        CC Class Gold
      </Heading>
      <Flex
        m="auto"
        w="1324px"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Box>
          <Image src={goldImagem} />
        </Box>
        <Box display="flex" alignItems="start" flexDirection="column">
          <Button variant="ghost" leftIcon={<HiOutlineChip />}>
            Ryzen 3 4100
          </Button>
          <Button variant="ghost" leftIcon={<SiNvidia />}>
            GTX 1650 4GB Palit
          </Button>
          <Button variant="ghost" leftIcon={<FaMemory />}>
            16GB RAM HyperX
          </Button>
          <Button variant="ghost" leftIcon={<FiHardDrive />}>
            SSD 480 GB Kingston
          </Button>
          <Button variant="ghost" leftIcon={<ImPowerCord />}>
            PSU 650W 80+ Bronze
          </Button>
          <Button variant="ghost" leftIcon={<CgBox />}>
            PC Case Sahara Mid Tower
          </Button>
        </Box>
      </Flex>
      <Box textAlign="center">
        <Link
          href="https://www.ebay.co.uk/itm/404286439961?mkcid=16&mkevt=1&mkrid=711-127632-2357-0&ssspo=_quk-6jtsnw&sssrc=2047675&ssuid=_quk-6jtsnw&widget_ver=artemis&media=COPY"
          isExternal
        >
          <Button
            textAlign="center"
            variant="solid"
            colorScheme="teal"
            color="white"
            leftIcon={<TbExternalLink />}
          >
            Buy
          </Button>
        </Link>
      </Box>
    </>
  );
}

export default Learn;
