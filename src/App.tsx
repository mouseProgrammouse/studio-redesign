import HeroSection from "./components/HeroSection";
import React from "react";
import Header from "./components/Header";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <body>
        <div className="main">
          <HeroSection />
        </div>
      </body>
    </>
  );
};

export default App;
