import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import logoLocal from '../img/logoLocal.svg';

function MapOngs() {
    return(
       <div id="page-map">
           <aside>
               <header>
                   <img src={logoLocal} alt="Happy"></img>

                   <h2>Escolha uma ONG no mapa</h2>
                   <p>Muitas crinças estão esperando sua doação.</p>
               </header>

               <footer>
                   <strong>São Paulo</strong>
                   <span>São Paulo</span>
               </footer>
           </aside>

           <div></div>

           <Link to="" className="create-ongs">
               <FiPlus size={32} color="#FFF"/>
           </Link>
       </div>
    )
}

export default MapOngs;