import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import "./Contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectProposal: "",
    message: "",
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false); // État pour afficher/masquer la pop-up

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_0ekhnj9",
        "template_02uvceo",
        {
          name: formData.name,
          email: formData.email,
          projectProposal: formData.projectProposal,
          message: formData.message,
        },
        "om57X_TTINHCi4jfW"
      )
      .then(
        (result) => {
          console.log("Email envoyé :", result.text);
          setIsPopupVisible(true); // Affiche la pop-up

          // Réinitialise le formulaire après l'envoi
          setFormData({
            name: "",
            email: "",
            projectProposal: "",
            message: "",
          });

          // Cache la pop-up après 4 secondes
          setTimeout(() => {
            setIsPopupVisible(false);
          }, 4000);
        },
        (error) => {
          console.log("Erreur lors de l'envoi :", error.text);
          alert("Une erreur s'est produite, veuillez réessayer.");
        }
      );
  };

  return (
    <div>
      <Navbar isContactPage={true} />
      <div className="container">
        <form onSubmit={handleSubmit} className="form-container">
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="projectProposal">Proposition de projet :</label>
          <input
            type="text"
            id="projectProposal"
            name="projectProposal"
            value={formData.projectProposal}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Détails/Messages :</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="button-contact">
            Envoyer
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
