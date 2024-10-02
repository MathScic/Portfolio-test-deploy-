import React from "react";
import "./Skills.scss";

const Skills = () => {
  return (
    <div>
      <h1>Hard Skills </h1>
      <div className="hard-container">
        <div className="skills">
          <img src="./images/front-end.png" alt="" className="frontend" />
          <h3>Frontend</h3>
          <div className="skills-front">
            <li>
              <ul className="langages">
                <i class="fa-brands fa-react"></i>React
              </ul>
              <ul className="langages">
                <i class="fa-brands fa-php"></i>php
              </ul>
              <ul className="langages">
                <i class="fa-brands fa-html5"></i>Html
              </ul>
              <ul className="langages">
                <i class="fa-brands fa-css3-alt"></i>Css
              </ul>
              <ul className="langages">
                <i class="fa-brands fa-js"></i>JavaScript
              </ul>
            </li>
          </div>
        </div>

        <div className="skills">
          <img src="./images/back-end.png" alt="" className="backend" />
          <h3>Backend</h3>
          <li>
            <ul className="langages">
              <i class="fa-brands fa-node"></i>Node.js
            </ul>
            <ul className="langages">
              <i class="devicon-mysql-original"></i>MySQL
            </ul>
            <ul className="langages">
              <i class="devicon-mongodb-plain"></i>MongoDB
            </ul>
          </li>
        </div>

        <div className="skills">
          <img
            src="./images/project-management.png"
            alt=""
            className="project"
          />
          <h3>Gesion et communication</h3>
          <li>
            <ul className="langages">
              <i class="devicon-notion-plain"></i>Notion
            </ul>
            <ul className="langages">
              <i class="devicon-git-plain"></i>Git
            </ul>
            <ul className="langages">
              <i class="devicon-github-original"></i>Github
            </ul>
            <ul className="langages">
              <i class="devicon-slack-plain"></i>Slack
            </ul>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Skills;
