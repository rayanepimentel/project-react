import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import logoLocal from '../img/logoLocal.svg';
import mapIcon from '../utils/mapIcon';

import '../styles/pages/map.css';
import '../styles/pages/create-ong.css';
import api from '../services/api';

interface Ong {
  id: number;
  latitude: number;
  longitude: number;
  name: string;
}

function MapOngs() {
  const [ongs, setOngs] = useState<Ong[]>([]);

  useEffect(() => {
    api.get('ongs').then(response => {
      setOngs(response.data)
    })
  }, []);

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
        center={[-23.5593829, -46.6412154]}
        zoom={12}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {/* <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        /> */}

        {ongs.map(ong => {
          return (
            <Marker
              key={ong.id}
              icon={mapIcon}
              position={[ong.latitude, ong.longitude]}
            >
              <Popup closeButton={false} minWidth={240} maxHeight={240} className="map-popup">
                {ong.name}
                <Link to={`/ong/${ong.id}`}>
                  <FiArrowRight size={20} color="#FFF" />
                </Link>
              </Popup>
            </Marker>
          )
        })}
      </Map>

      <Link to="/ong/create" className="create-ong">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default MapOngs;