import { Show } from "@chakra-ui/react";
import "./App.css";
import AddressTop from "./components/AddressTop";
import Footer from "./components/Footer";
import Gold from "./components/Gold";
import GoldLearn from "./components/GoldLearn";
import GoldTitle from "./components/GoldTitle";
import MadeBy from "./components/MadeBy";
import MobileMenu from "./components/MobileMenu";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Carrosel from "./components/Carrosel";
import Menu from "./components/Menu";

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
