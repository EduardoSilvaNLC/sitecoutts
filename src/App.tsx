import "./App.css";
import AddressTop from "./components/AddressTop";
import Footer from "./components/Footer";
import Gold from "./components/Gold";
import GoldLearn from "./components/GoldLearn";
import GoldTitle from "./components/GoldTitle";
import MadeBy from "./components/MadeBy";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <AddressTop />
      <Navbar />
      <GoldTitle />
      <GoldLearn />
      <Gold />
      <Services />
      <Footer />
      <MadeBy />
    </>
  );
}

export default App;
