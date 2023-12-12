import { useState } from 'react';
import { LatLng } from 'leaflet';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';

import LeafletRouting from '../LeafletRouting/LeafletRouting';
import { FakeMapData } from './fakeData';

import 'leaflet/dist/leaflet.css';

// function LocationMarker({ onMapClick }: { onMapClick: Function }) {
//   const [position, setPosition] = useState<LatLng | null>(null);
//   const map = useMapEvents({
//     click(e: any) {
//       setPosition(e.latlng);
//       map.flyTo(e.latlng, map.getZoom());
//       onMapClick(e);
//     },
//   });

//   return position === null ? null : (
//     <Marker position={position}>
//       <Popup>You are here</Popup>
//     </Marker>
//   );
// }

type MapPoint = {
  latitude: number;
  longitude: number;
};

export type MapData = {
  color: string;
  data: MapPoint[];
}[];

const centerMapDataCalculate = (data: MapPoint[][]) => {
  // console.log('point', data);
  let newArray: MapPoint[] = [];
  data.forEach((item: MapPoint[]) => {
    item.map((point: MapPoint) => {
      newArray.push(point);
    });
  });
  return newArray;
};

function LeafletMap() {
  // const [latlng, setLatlng] = useState({ lat: 0, lng: 0 });
  const onMapClick = (latlng: LatLng) => {
    // setLatlng(e.latlng);
    console.log('aaaa', latlng);
  };

  // const map = useMapEvents({
  //   click(e: any) {
  //     console.log(e.latlng);
  //     // setPosition(e.latlng);
  //     // map.flyTo(e.latlng, map.getZoom());
  //     // onMapClick(e);
  //   },
  // });

  const [routeWayColor, setRouteWayColor] = useState<string[]>(
    FakeMapData.map((item) => item.color)
  );

  const [leafletRoutingData, setDataForRouting] = useState<LatLng[][]>(
    FakeMapData.map((waypoints) =>
      waypoints.data.map((point) => L.latLng(point.latitude, point.longitude))
    )
  );

  const markersLatLon: MapPoint[][] = FakeMapData.map((waypoints) =>
    waypoints.data.map((point) => ({
      latitude: point.latitude,
      longitude: point.longitude,
    }))
  );

  return (
    <MapContainer center={[41.71525, 44.87479]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {/* <LocationMarker onMapClick={onMapClick} /> */}

      <LeafletRouting
        color={routeWayColor[0]}
        waypoints={leafletRoutingData[0]}
        bounds={centerMapDataCalculate(markersLatLon)}
        // onClick={onMapClick}
      />
    </MapContainer>
  );
}

export default LeafletMap;
