import React from "react";

const Footer = () => {
  return (
    <section>
      <footer className="footer">
        <span className="number">919.780.9---</span>
        <span className="linkdin">
          <a
            href="https://www.linkedin.com/in/tony-taylor-7918541b6/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-linkedin" className="icon"></ion-icon>
          </a>
        </span>
        <span class="github">
          <a
            className="icon"
            href="https://github.com/Crimsonsurf07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </span>
      </footer>
    </section>
  );
};

export default Footer;
