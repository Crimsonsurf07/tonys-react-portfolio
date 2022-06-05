import React from 'react';

const Resume = () => {

    return (

        <section className="resume">
      <p>
        <h4> Some of my Proficiencies: </h4>
        <ul className="skill-list">
          <li className="skill">React JS</li>
          <li className="skill">JavaScript</li>
          <li className="skill">Node JS</li>
          <li className="skill">CSS</li>
          <li className="skill">HTML</li>
          <li className="skill">Heroku Deployment</li>
          <li className="skill">GitHub</li>
        </ul>
      </p>

      <p>
          <a className="resume-link" href="https://my.indeed.com/p/tonyt-bgilbe1">
              View my <span>Resume</span> here
          </a>
      </p>

        </section>
    );
}

export default Resume;