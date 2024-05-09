import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contact";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Preloader from "./utils/PagePreloader.jsx";
import NotFound from "./utils/Notfound.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<Preloader />}>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/aboutUs' element={<AboutUs />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/services' element={<Services />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  </React.StrictMode>
);
