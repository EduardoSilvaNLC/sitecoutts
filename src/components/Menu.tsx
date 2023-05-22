import { HStack, ListItem, UnorderedList, Link, Image } from "@chakra-ui/react";

function Menu() {
  return (
    <HStack bg="#32BFA8" color="white" height="40px">
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
        <Link>
          <ListItem>Store</ListItem>
        </Link>
        <Link>
          <ListItem>PC Gamer</ListItem>
        </Link>
        <Link>
          <ListItem>PC Office</ListItem>
        </Link>
        <Link>
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
