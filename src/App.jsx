import { useState, useEffect } from "react";
import AboutUs from "./pages/AboutUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import ContactUs from "./pages/Contact";
import Footer from "./components/Footer";
import Pricing from "./pages/Pricing";
import PagePreloader from "./utils/PagePreloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <>
      {loading ? (
        <PagePreloader />
      ) : (
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
      )}
    </>
  );
}

export default App;
