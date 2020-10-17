import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css'

import logoImg from './img/logo.svg'

function App() {
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
          >
        </a>
      </div>
    </div>
  );
}

export default App;
