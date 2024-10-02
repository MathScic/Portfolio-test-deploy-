import React, { useState } from "react";
import "./Card.scss";

const Card = ({ title, image, url, technologies, description, github }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (e) => {
    const clickedElement = e.target;
    if (clickedElement.tagName !== "A") {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal();
    }
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <div className="card" onClick={handleCardClick}>
        <img src={image} alt={title} className="card-image" />
        <div className="card-overlay">
          <h1 className="card-title">{title}</h1>
          <div className="github-buttons">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
              onClick={handleLinkClick}
            >
              <i class="fa-solid fa-earth-americas"></i>
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-button"
              onClick={handleLinkClick}
            >
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal" onClick={handleOverlayClick}>
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={image} alt={title} className="modal-image" />
            <h1 className="card-title">{title}</h1>
            <p>{description}</p>
            <p className="techno">
              <strong>Langages utilisés :</strong> {technologies.join(", ")}
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="button-modal"
            >
              Voir Projet
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
