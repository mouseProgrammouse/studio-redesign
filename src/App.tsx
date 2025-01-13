import React from "react";
import Menu from "./components/Menu";
import HeroSection from "./components/HeroSection";
import HeroCarousel from "./components/HeroCarousel";
import AboutUs from "./components/AboutUs";

const App: React.FC = () => {
  return (
    <>
      <Menu />
      <div className="main-content">
        <HeroSection />
        <HeroCarousel />
        <AboutUs />
      </div>
    </>
  );
};

export default App;
