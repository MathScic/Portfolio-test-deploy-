import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Presentation from "../../components/presentation/Presentation";
import Footer from "../../components/footer/Footer";
import Competence from "../../components/competence/Competence";
import ButtonContact from "../../components/buttonContact/ButtonContact";
import { Link } from "react-scroll";
import Skills from "../../components/skills/Skills";

const HomePage = () => {
  return (
    <div>
      <Navbar isContactPage={false} />
      <Presentation />
      <Skills />
      <Competence />
      <ButtonContact />
      <Footer />
    </div>
  );
};

export default HomePage;
