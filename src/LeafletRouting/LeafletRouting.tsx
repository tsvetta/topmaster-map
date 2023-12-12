import { useEffect } from 'react';

import L, { latLngBounds } from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
});

const LeafletRouting = ({ waypoints, color, bounds }: any) => {
  const map = useMap();

  let markerBounds = latLngBounds([]);

  useEffect((): any => {
    if (!map) return;

    //@ts-ignore
    const routingControl = L.Routing.control({
      //@ts-ignore
      router: L.Routing.osrmv1({
        profile: 'walk',
      }),
      waypoints: waypoints,
      lineOptions: {
        styles: [
          {
            color,
            opacity: 0.7,
            weight: 5,
          },
        ],
      },

      addWaypoints: true,
      draggableWaypoints: true,
      fitSelectedRoutes: false,
      showAlternatives: true,
    }).addTo(map);

    if (bounds.length && bounds.length > 0) {
      bounds.forEach((marker: any) => {
        markerBounds.extend([marker.latitude, marker.longitude]);
      });

      map.fitBounds(markerBounds);
    }

    return () => map.removeControl(routingControl);
  }, [map, waypoints, bounds, color]);

  return null;
};
export default LeafletRouting;
