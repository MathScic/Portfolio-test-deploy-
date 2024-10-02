import React from "react";
import "./Competence.scss";
import data from "../../data/data.json";
import Card from "../card/Card";

const Competence = () => {
  return (
    <div className="projet-container">
      <h1>Vous trouverez ici certains </h1>
      <h2>Mes projets récents</h2>
      <div className="card-list">
        {data.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            image={project.image}
            url={project.url}
            technologies={project.technologies}
            description={project.description}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default Competence;
