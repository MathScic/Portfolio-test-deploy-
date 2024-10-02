import React from "react";
import HomePage from "./pages/homepage/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import ButtonContact from "./components/buttonContact/ButtonContact";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
