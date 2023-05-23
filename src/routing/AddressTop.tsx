import { Button, HStack, Icon, Link, Show } from "@chakra-ui/react";

import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

function AddressTop() {
  const botaoVariante = "ghost";
  const boldness = "light";
  const medio = "9px";
  const largo = "10px";
  const extraL = "12px";

  return (
    <Show above="md">
      <HStack
        justifyContent="end"
        borderBottom="#37373745 1px solid"
        padding="1px"
        fontFamily="poppins"
      >
        <Button
          fontWeight={boldness}
          variant={botaoVariante}
          leftIcon={<MdOutlineLocationOn />}
        >
          <Link
            href="https://www.google.com/maps/place/Coutts+computers+UK/@52.1988421,0.1199872,13z/data=!4m6!3m5!1s0x88dedeccaf042117:0x3f1c02ad4b8b0b89!8m2!3d52.1988421!4d0.1199872!16s%2Fg%2F11stsmkdwp?hl=en"
            fontSize={{ md: medio, lg: largo, xl: extraL }}
            isExternal
          >
            Cambridge - England
          </Link>
        </Button>
        <Button
          fontWeight={boldness}
          variant={botaoVariante}
          leftIcon={<FiPhone />}
        >
          <Link
            href="tel:+44 07300 930 051"
            isExternal
            fontSize={{ md: medio, lg: largo, xl: extraL }}
          >
            +44 07300 930 051
          </Link>
        </Button>
        <Button
          fontWeight={boldness}
          variant={botaoVariante}
          leftIcon={<MdOutlineEmail />}
        >
          {" "}
          <Link
            href="mailto: sales@couttscomputers.co.uk"
            isExternal
            fontSize={{ md: medio, lg: largo, xl: extraL }}
          >
            sales@couttscomputers.co.uk
          </Link>
        </Button>
      </HStack>
    </Show>
  );
}

export default AddressTop;
