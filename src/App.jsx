import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TimeConverter from "./pages/TimeConverter";
import AboutMe from "./pages/AboutMe";
import PreviousWork from "./pages/PreviousWork";
import ContactMe from "./pages/ContactMe";
import Footer from "./pages/Footer";
import Articles from "./pages/Articles";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <TimeConverter />
              <AboutMe />
              <PreviousWork />
              <ContactMe />
              <Footer />
            </>
          }
        />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </Router>
  );
}

export default App;