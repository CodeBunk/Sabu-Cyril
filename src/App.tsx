/** @format */

import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import Layout from "./components/Layout/Layout";
import { PROSTHETICS, SPECIALPROPS, SETDESIGN, MINIATURES, CUSTOM, ANIMETRONICS } from "./Constants";
import ComingSoon from "./Pages/ComingSoon";

// import MRpage from "./Pages/MRpage";
// import ARpage from "./Pages/ARpage";
// import Modelling from "./Pages/3dModel";
// import CinePreviz from "./Pages/CinePreviz";
// import MVPpage from "./Pages/MVPPage";
// import VRpage from "./Pages/VRpage";
const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash);
      if (element) {
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementTop - 80, // Adjust for any fixed header height
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  return null;
};
function App() {
  return (
    <>
      <Router>
        <ScrollToHashElement />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path={PROSTHETICS} element={<ComingSoon />} />
            <Route path={SPECIALPROPS} element={<ComingSoon />} />
            <Route path={SETDESIGN} element={<ComingSoon />} />
            <Route path={MINIATURES} element={<ComingSoon />} />
            <Route path={CUSTOM} element={<ComingSoon />} />
            <Route path={ANIMETRONICS} element={<ComingSoon />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
