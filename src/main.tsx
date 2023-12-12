import React, { useCallback } from 'react'
import ReactDOM from 'react-dom'
import ReactDOMClient from 'react-dom/client'

import './index.css'
import './App.css'

const LOCATION = {
  center: [44.87485435399532, 41.71534561254158],
  zoom: 19,
};

let map = null;

async function main() {
  const [ymaps3React] = await Promise.all([ymaps3.import('@yandex/ymaps3-reactify'), ymaps3.ready]);
  const reactify = ymaps3React.reactify.bindTo(React, ReactDOM); // ts-ignore 
  const {
    YMap,
    YMapDefaultFeaturesLayer,
    YMapDefaultSchemeLayer,
    YMapControls,
    YMapMarker,
    YMapListener,
  } = reactify.module(ymaps3);
  const { useState } = React;

  const { YMapZoomControl, YMapGeolocationControl } = reactify.module(
    await ymaps3.import('@yandex/ymaps3-controls@0.0.1')
  );

  ReactDOMClient.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )

  function App() {
    const [location] = useState(LOCATION);
    const [clickedLocation, setClickedLocation] = useState({ name: 'Click on map', coords: [0, 0] });

    const onMapClick = useCallback((e: any) => {
      if (e?.type === 'hotspot') {
        // console.log(e .entity.geometry.coordinates, e.entity.properties.name)

        setClickedLocation({
          coords: e.entity.geometry.coordinates,
          name: e.entity.properties.name,
        })
      }
    }, [clickedLocation.name, clickedLocation.coords])

    const createMarker = useCallback(() => {
      const markerElement = document.createElement('div');
      markerElement.className = 'marker-class';
      markerElement.innerText = `${clickedLocation.name}\n${clickedLocation.coords.toString()}`;

      return markerElement;
    }, [clickedLocation.name])

    console.log(clickedLocation)

    return (
      <>
        <h1>Topmaster Tbilisi Map</h1>
        <YMap location={location} ref={(x) => (map = x)}>
          <YMapListener onClick={onMapClick} />
          <YMapDefaultSchemeLayer />
          <YMapDefaultFeaturesLayer />

          <YMapControls position="right">
            <YMapZoomControl />
          </YMapControls>

          <YMapControls position="left">
            <YMapGeolocationControl />
          </YMapControls>

          <YMapMarker coordinates={LOCATION.center as [number, number]} markerElement={createMarker()}  />
        </YMap>
      </>
    );
  }
}

main();