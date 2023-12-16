import { useState } from 'react';
import { LatLng } from 'leaflet';

import { LeafletMap } from './LeafletMap/LeafletMap';
import { MapboxMap } from './MapboxMap/MapboxMap';

import './index.css';
import './App.css';

function App() {
  const [waypoints, setWaypoints] = useState<LatLng[]>([]);

  return (
    <div className='page'>
      <h1 className='page-title'>Topmaster Tbilisi Map</h1>
      <div className='map-container'>
        <div className='map-sidebar'>
          <p>text</p>
          {waypoints.map((wp) => (
            <p>
              {wp.lat.toFixed(4)} -- {wp.lng.toFixed(4)}
            </p>
          ))}
        </div>
        <MapboxMap />
        {/* <LeafletMap onWaypointsSet={setWaypoints} /> */}
      </div>
    </div>
  );
}

export default App;
