import React from "react";
import LandingPage from "./pages/LandingPage";
import TimeConverter from "./pages/TimeConverter";
import AboutMe from "./pages/AboutMe";
import PreviousWork from "./pages/PreviousWork";
import ContactMe from "./pages/ContactMe";
import Footer from "./pages/Footer";


function App() {
  return (
    <div>
      <LandingPage />
      <TimeConverter />
      <AboutMe /> 
      <PreviousWork /> 
      <ContactMe />
      <Footer />
      

    </div>
  );
}

export default App;
