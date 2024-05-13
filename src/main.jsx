import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/Contact";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Preloader from "./utils/PagePreloader.jsx";
import NotFound from "./utils/Notfound.jsx";
import Home from "./pages/Home/index.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App />} >
      <Route path='/' element={<Home />} />
      <Route path='/aboutUs' element={<AboutUs />} />
      <Route path='/services' element={<Services />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/contactUs' element={<ContactUs />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Preloader />}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>
);
