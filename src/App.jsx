import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/Contact";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";

function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <Services />
      <Pricing />
      <ContactUs />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
