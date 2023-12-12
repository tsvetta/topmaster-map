import { useState } from 'react';
import { LatLng } from 'leaflet';
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

import LeafletRouting from '../LeafletRouting/LeafletRouting';
import { FakeMapData } from './fakeData';

import 'leaflet/dist/leaflet.css';

function MapEventListener({ onMapClick }: { onMapClick: Function }) {
  useMapEvents({
    click(e: any) {
      onMapClick(e.latlng);
    },
  });

  return null;
}

export type MapPoint = {
  latitude: number;
  longitude: number;
};

export type MapData = {
  color: string;
  data: MapPoint[];
}[];

export const centerMapDataCalculate = (markersPoints: MapPoint[][]) => {
  let points: MapPoint[] = [];

  markersPoints.forEach((marker: MapPoint[]) => {
    marker.map((point: MapPoint) => {
      points.push(point);
    });
  });
  return points;
};

export const getInitialWaypoints = (initialData: MapData): LatLng[][] =>
  initialData.map((waypoints) =>
    waypoints.data.map((point) => L.latLng(point.latitude, point.longitude))
  );

export const getMarkersLatLon = (initialData: MapData): MapPoint[][] =>
  initialData.map((waypoints) =>
    waypoints.data.map((point) => ({
      latitude: point.latitude,
      longitude: point.longitude,
    }))
  );

export const LeafletMap = ({ onWaypointsSet }: { onWaypointsSet: any }) => {
  const routeWayColor = FakeMapData.map((item) => item.color);
  const initialWaypoints = getInitialWaypoints(FakeMapData);
  const markersLatLon = getMarkersLatLon(FakeMapData);

  const [waypoints, setWaypoints] = useState(initialWaypoints[0]);
  const onMapClick = (latlng: LatLng) => {
    const newWaypoints = [...waypoints, latlng].sort((a, b) => a.lng - b.lng);
    setWaypoints(newWaypoints);
  };

  onWaypointsSet(waypoints);

  return (
    <MapContainer center={[41.71525, 44.87479]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />

      <MapEventListener onMapClick={onMapClick} />

      <LeafletRouting
        color={routeWayColor[0]}
        waypoints={waypoints}
        bounds={centerMapDataCalculate(markersLatLon)}
      />
    </MapContainer>
  );
};
