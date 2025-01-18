import React from "react";
import Menu from "./components/Menu";
import HeroSection from "./components/HeroSection";
import HeroCarousel from "./components/HeroCarousel";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";

const App: React.FC = () => {
  return (
    <>
      <Menu />
      <div className="main-content">
        <HeroSection />
        <HeroCarousel />
        <AboutUs />
        <OurServices />
        <Reviews />
        <Map />
        <Footer />
      </div>
    </>
  );
};

export default App;
