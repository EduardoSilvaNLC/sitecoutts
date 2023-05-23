import { Show } from "@chakra-ui/react";
import AddressTop from "./AddressTop";
import Navbar from "./Navbar";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

import Carrosel from "./Carrosel";
import Footer from "./Footer";
import MadeBy from "./MadeBy";
import Learn from "../components/Learn";

function LearnMore() {
  return (
    <>
      <AddressTop />
      <Show above="md">
        <Navbar />
        <Menu />
      </Show>
      <MobileMenu />
      <Learn />
      <Carrosel />
      <Footer />
      <MadeBy />
    </>
  );
}

export default LearnMore;
