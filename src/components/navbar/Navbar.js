import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = ({ isContactPage }) => {
  return (
    <div className="home-container">
      <img src="./images/Logo.png" alt="Logo" />
      <div className="navbar">
        {isContactPage ? (
          <Link to="/" className="">
            <button className="navbar-button">Retour à l'accueil</button>
          </Link>
        ) : (
          <Link to="/contact" className="">
            <button className="navbar-button">Un projet, c'est ici !</button>
          </Link>
        )}
        <a
          href="./images/CV Intégrateur Web.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="navbar-button">Mon CV</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
