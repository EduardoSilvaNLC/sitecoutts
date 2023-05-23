import { Show } from "@chakra-ui/react";
import "./App.css";
import AddressTop from "./routing/AddressTop";
import Footer from "./routing/Footer";
import Gold from "./routing/Gold";
import GoldLearn from "./routing/GoldLearn";
import GoldTitle from "./routing/GoldTitle";
import MadeBy from "./routing/MadeBy";
import MobileMenu from "./routing/MobileMenu";
import Navbar from "./routing/Navbar";
import Services from "./routing/Services";
import Carrosel from "./routing/Carrosel";
import Menu from "./routing/Menu";

function App() {
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

export default App;
