import { useState } from 'react';

import LeafletMap from './LeafletMap/LeafletMap';

import './App.css';

function App() {
  // const [latlng, setLatlng] = useState({ lat: 0, lng: 0 });
  // const onMarkerClick = (e: any) => {
  //   console.log(e.latlng);
  //   setLatlng(e.latlng);
  // };

  return (
    <>
      <h1 className='text-3xl font-bold'>Topmaster Tbilisi Map</h1>
      <p>{/* {latlng.lat} {latlng.lng} */}</p>
      <LeafletMap />
    </>
  );
}

export default App;
