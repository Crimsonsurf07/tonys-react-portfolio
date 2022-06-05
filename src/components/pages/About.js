import React from "react";
import Selfie from '../../assets/images/Selfie.png';

export default function About() {
  return (
    <div className="about">
      <br />
      <br />
      <h4><span className="about-span">Hello!</span> My names Tony and I'm a Web Dev.</h4>

      <p>
        I primarily enjoy building Front-End Web Applications utilizing React
        JS. I enjoy expanding on my knowledge to be more efficient, as well as
        to build larger, more complex applications. Currently I'm about to
        graduate from the UNC Chapel Hill Coding Bootcamp and pursue a new
        challenging yet rewarding career path!
      </p>
      <div>
        <img
        src={Selfie}
        alt="Selfie wearing black polo shirt"
        title="Selfie"
        id="Selfie"
        height={500}
        width={500}
        style={{ borderRadius: 2700 }}
        />
      </div>
    </div>
    
  );
}
