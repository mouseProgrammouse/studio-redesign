import React from "react";
import Menu from "./components/Menu";
import HeroSection from "./components/HeroSection";
import HeroCarousel from "./components/HeroCarousel";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";

const App: React.FC = () => {
  return (
    <>
      <Menu />
      <div className="main-content">
        <HeroSection />
        <HeroCarousel />
        <AboutUs />
        <OurServices />
      </div>
    </>
  );
};

export default App;
