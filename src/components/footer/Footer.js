import React from "react";
import "./Footer.scss";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer-container">
      <nav className="link">
        <img src="./images/Logo.png" />
        <a href="https://www.linkedin.com/in/mathieu-scicluna-8346482ba/">
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a href="mailto:mthscicluna@gmail.com">
          <i class="fa-solid fa-envelope"></i>
        </a>
        <a href="https://github.com/">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="https://www.malt.fr/profile/mathieuscicluna1">
          <i class="fa-brands fa-mastodon"></i>
        </a>
      </nav>
      <p>© 2024 MonPortfolio. Tous droits réservés.</p>
    </div>
  );
};

export default Footer;
