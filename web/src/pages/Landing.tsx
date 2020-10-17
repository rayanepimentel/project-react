import React from 'react';
import {FiArrowRight} from 'react-icons/fi'

import '../styles/global.css';
import '../styles/pages/landing.css'

import logoImg from '../img/logo.svg';


function Landing() {
    return (
        <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo Happy"/>

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite as ONGs e contribua com doações. <br/>
            Mude a vida de uma criança e de uma mãe.</p>
        </main>
        
        <div className="location">
          <strong>São Paulo</strong>
          <span>São Paulo</span>
        </div>

        <a href="" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0.6)"/>
        </a>
      </div>
    </div>
    );
}

export default Landing;