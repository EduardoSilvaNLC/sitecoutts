import { HStack, ListItem, UnorderedList, Link, Image } from "@chakra-ui/react";
import { Link as Dink } from "react-router-dom";

function Menu() {
  return (
    <HStack bg="#32BFA8" color="white" height="25px">
      <UnorderedList
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        padding="10px"
        listStyleType="none"
        fontWeight="semibold"
        fontFamily="poppins"
        fontSize="15px"
      >
        <Link href="https://www.ebay.co.uk/usr/couttscomputersltd" isExternal>
          <ListItem>Store</ListItem>
        </Link>
        <Link
          href="https://www.ebay.co.uk/usr/couttscomputersltd/Desktops-All-in-Ones/_i.html?_sacat=171957"
          isExternal
        >
          <ListItem>PC Gamer</ListItem>
        </Link>
        <Link>
          <ListItem>PC Office</ListItem>
        </Link>
        <Link
          href="https://www.ebay.co.uk/usr/couttscomputersltd/Computer-Components-Parts/_i.html?_sacat=175673"
          isExternal
        >
          <ListItem>Pheripheral</ListItem>
        </Link>
        <Link>
          <ListItem>Services</ListItem>
        </Link>
        <Link>
          <ListItem>Q&A</ListItem>
        </Link>
        <Link>
          <ListItem>Support</ListItem>
        </Link>
      </UnorderedList>
    </HStack>
  );
}

export default Menu;
