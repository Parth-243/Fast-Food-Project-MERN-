import React from "react";
import Home from "./landingComponent/Home";
import About from "./landingComponent/About";
import Work from "./landingComponent/Work";
import Contact from "./landingComponent/Contact";
const LandingPages = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default LandingPages;
