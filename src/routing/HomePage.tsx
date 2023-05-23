import { Show } from "@chakra-ui/react";
import AddressTop from "./AddressTop";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import Menu from "./Menu";
import GoldTitle from "./GoldTitle";
import GoldLearn from "./GoldLearn";
import Gold from "./Gold";
import Services from "./Services";
import Carrosel from "./Carrosel";
import Footer from "./Footer";
import MadeBy from "./MadeBy";

function HomePage() {
  return (
    <>
      <AddressTop />
      <Show above="md">
        <Navbar />
        <Menu />
      </Show>
      <MobileMenu />
      <GoldTitle />
      <GoldLearn />
      <Gold />
      <Services />
      <Carrosel />
      <Footer />
      <MadeBy />
    </>
  );
}

export default HomePage;
