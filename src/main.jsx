import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contact";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/contactUs' element={<ContactUs />} />
      <Route path='/services' element={<Services />} />
      <Route path='/pricing' element={<Pricing />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
