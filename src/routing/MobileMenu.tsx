import {
  HStack,
  Hide,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from "./Navbar";
import { Link as Dink } from "react-router-dom";

function MobileMenu() {
  return (
    <Hide above="md">
      <HStack justifyContent="space-evenly" alignItems="center">
        <Navbar />
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<RxHamburgerMenu />}
            variant="outline"
          />
          <MenuList>
            <Dink
              to="https://www.ebay.co.uk/usr/couttscomputersltd"
              target="_blank"
            >
              <MenuItem>Store</MenuItem>
            </Dink>

            <Link
              href="https://www.ebay.co.uk/usr/couttscomputersltd/Desktops-All-in-Ones/_i.html?_sacat=171957"
              isExternal
            >
              <MenuItem>Computers</MenuItem>
            </Link>

            <Link
              href="https://www.ebay.co.uk/usr/couttscomputersltd/Computer-Components-Parts/_i.html?_sacat=175673"
              isExternal
            >
              <MenuItem> Pheripheral</MenuItem>
            </Link>

            <Dink to="/services">
              <MenuItem>Services</MenuItem>
            </Dink>

            <MenuItem>
              <Link>Q&A</Link>
            </MenuItem>
            <MenuItem>
              <Link>Support</Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Hide>
  );
}

export default MobileMenu;
