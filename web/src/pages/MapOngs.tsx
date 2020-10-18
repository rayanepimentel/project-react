import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';

import logoLocal from '../img/logoLocal.svg';


import '../styles/pages/map.css';

const mapIcon = leaflet.icon({
    iconUrl: logoLocal,
    
    iconSize: [50, 60],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


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

                <Marker
                  icon={mapIcon}
                  position={[-23.5593829,-46.6412154]}
                >
                    <Popup closeButton={false} minWidth={240} maxHeight={240} className="map-popup">
                        nome da ONG
                        <Link to="/ong/1">
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/ong/create" className="create-ong">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )
}

export default MapOngs;