import Map from 'react-map-gl';

import GeocoderControl from './MapboxGeocoderControl';

import 'mapbox-gl/dist/mapbox-gl.css';

// eslint-disable-next-line
const TOKEN = process.env.MapboxAccessToken; // Set your mapbox token here

export const MapboxMap = () => {
  return (
    <div className='mapbox-container'>
      <Map
        initialViewState={{
          longitude: 44.875361,
          latitude: 41.713197,
          zoom: 14,
        }}
        mapStyle='mapbox://styles/mapbox/streets-v12'
        mapboxAccessToken={TOKEN}
      >
        <GeocoderControl mapboxAccessToken={TOKEN} position='top-left' />
      </Map>
    </div>
  );
};
