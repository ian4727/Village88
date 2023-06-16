import React from 'react';
import TypeWriter from './TypeWriter';
import Hackerhero from '../assets/images/hh_logo_beta.svg';
import Github from '../assets/images/GiyHub-Mark.png';
import Linkedin from '../assets/images/linkedin.png';

function AboutMe() {
  return (
    <div>
      <h1><TypeWriter text="Connect with me!"/></h1>
      <a href="https://www.hackerhero.com/profile/ian4727">
        <img src={Hackerhero} alt="HackerHero" />
      </a>
      <a href="https://github.com/ian4727">
        <img className="resize" src={Github} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/gervacio4727/">
        <img className="resize" src={Linkedin} alt="LinkedIn" />
      </a>
    </div>
  );
}

export default AboutMe;