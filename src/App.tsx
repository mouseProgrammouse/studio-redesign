import Menu from "./components/Menu";
import HeroSection from "./components/HeroSection";
import React from "react";

const App: React.FC = () => {
  return (
    <>
      <Menu />
      <div className="main-content">
        <HeroSection />
      </div>
    </>
  );
};

export default App;
