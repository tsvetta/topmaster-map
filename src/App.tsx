import { useState } from 'react';
import { LatLng } from 'leaflet';

import LeafletMap from './LeafletMap/LeafletMap';

import './App.css';

function App() {
  const [waypoints, setWaypoints] = useState<LatLng[]>([]);

  return (
    <div className='page'>
      <h1 className='page-title'>Topmaster Tbilisi Map</h1>
      <div className='map-container'>
        <div className='map-sidebar'>
          {waypoints.map((wp) => (
            <p>
              {wp.lat.toFixed(4)} -- {wp.lng.toFixed(4)}
            </p>
          ))}
        </div>
        <LeafletMap getWaypoints={setWaypoints} />
      </div>
    </div>
  );
}

export default App;
