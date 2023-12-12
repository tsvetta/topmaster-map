import { useEffect } from 'react';

import L, { latLngBounds } from 'leaflet';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import { useMap } from 'react-leaflet';

L.Marker.prototype.options.icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
});

const LeafletRouting = ({ eachPoint, dataSource, color, bounds }: any) => {
  const map = useMap();
  let markerBounds = latLngBounds([]);
  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: eachPoint,
      lineOptions: {
        styles: [
          {
            color: color,
            opacity: 1,
            weight: 7,
          },
        ],
      },

      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: false,
      showAlternatives: true,
    }).addTo(map);
    if (bounds.length && bounds.length > 0) {
      bounds.forEach((marker) => {
        markerBounds.extend([marker.latitude, marker.longitude]);
      });
      map.fitBounds(markerBounds);
    }

    return () => map.removeControl(routingControl);
  }, [map, eachPoint, bounds, color]);

  return null;
};
export default LeafletRouting;
