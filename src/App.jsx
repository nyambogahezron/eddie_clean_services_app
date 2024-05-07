import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Home />
      <AboutUs />
      <Services />
      <ContactUs />
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
