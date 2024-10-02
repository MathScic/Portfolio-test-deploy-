import React from "react";
import "./Presentation.scss";

const Presentation = () => {
  return (
    <div className="presentation-container">
      <h1 className="title-1">
        Développeur front-end en apprentissage vers le fullstack
      </h1>
      <h2 className="title-2">
        J’apprends chaque jour à créer des interfaces uniques et fonctionnelles,
        tout en explorant les subtilités du back-end.
      </h2>
      <div className="banner">
        <img src="./images/banner.png" />
      </div>
    </div>
  );
};

export default Presentation;
