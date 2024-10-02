import React from "react";
import { Link } from "react-router-dom";
import "./ButtonContact.scss";

const ButtonContact = () => {
  return (
    <div className="contact-container">
      <h1>Intéresser par une collaboration ?</h1>
      <h2>Nous pouvons discuter de vos projet juste ici 👇</h2>
      <Link to="/contact" className="button-container">
        <button className="button">Un projet ?</button>
      </Link>
    </div>
  );
};

export default ButtonContact;
