import { HStack, Icon, Link, Show } from "@chakra-ui/react";
import { FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";

function SocialMedia() {
  const sizeImage = "28px";
  const colorThem = "#32BFA8";

  return (
    <Show above="md">
      <HStack>
        <Link
          href="https://api.whatsapp.com/message/JQQXGPUC55FHJ1?autoload=1&app_absent=0"
          isExternal
        >
          <Icon boxSize={sizeImage} as={FaWhatsapp} color={colorThem} />
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCEUACwc1djBchVZgO-ZKEcg"
          isExternal
        >
          <Icon boxSize={sizeImage} as={FaYoutube} color={colorThem} />
        </Link>
        <Link href="https://www.instagram.com/couttscomputersuk/" isExternal>
          <Icon boxSize={sizeImage} as={FaInstagram} color={colorThem} />
        </Link>
      </HStack>
    </Show>
  );
}

export default SocialMedia;
