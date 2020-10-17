import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import logoLocal from '../img/logoLocal.svg';

import '../styles/pages/map.css';

function MapOngs() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={logoLocal} alt="Happy"></img>

                    <h2>Escolha uma ONG no mapa</h2>
                    <p>Muitas crinças estão esperando sua doação :)</p>
                </header>

                <footer>
                    <strong>São Paulo</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-23.5593829,-46.6412154]}
                zoom={12}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {/* <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.MAP_TOKEN}`}
                /> */}
            </Map>

            <Link to="" className="enter-ongs">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default MapOngs;