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
            <MenuItem>
              <Link>Store</Link>
            </MenuItem>
            <MenuItem>
              <Link>PC Gamer</Link>
            </MenuItem>
            <MenuItem>
              <Link>PC Office</Link>
            </MenuItem>
            <MenuItem>
              <Link>Pheripheral</Link>
            </MenuItem>
            <MenuItem>
              <Link>Services</Link>
            </MenuItem>
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
