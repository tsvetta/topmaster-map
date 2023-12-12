import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import {
  LeafletMap,
  centerMapDataCalculate,
  getInitialWaypoints,
  getMarkersLatLon,
} from './LeafletMap.tsx';
import { FakeMapData } from './fakeData.ts';

it('demo', () => {
  expect(true).toBe(true);
});

it('Renders Leafletmap', () => {
  render(<LeafletMap onWaypointsSet={() => {}} />);
  expect(true).toBeTruthy();
});

it('centerMapDataCalculate', () => {
  const res = centerMapDataCalculate([
    [
      { latitude: 1, longitude: 1 },
      { latitude: 2, longitude: 2 },
      { latitude: 3, longitude: 3 },
      { latitude: 4, longitude: 5 },
    ],
    [
      { latitude: 5, longitude: 5 },
      { latitude: 6, longitude: 6 },
    ],
  ]);

  expect(res).toStrictEqual([
    { latitude: 1, longitude: 1 },
    { latitude: 2, longitude: 2 },
    { latitude: 3, longitude: 3 },
    { latitude: 4, longitude: 5 },
    { latitude: 5, longitude: 5 },
    { latitude: 6, longitude: 6 },
  ]);
});

it('getInitialWaypoints', () => {
  const res = getInitialWaypoints(FakeMapData);

  expect(res).toStrictEqual([
    [
      { lat: 41.6901, lng: 44.8725 },
      { lat: 41.7081, lng: 44.8743 },
      { lat: 41.7175, lng: 44.8766 },
    ],
  ]);
});

it('getMarkersLatLon', () => {
  const res = getMarkersLatLon(FakeMapData);

  expect(res).toStrictEqual([
    [
      { latitude: 41.6901, longitude: 44.8725 },
      { latitude: 41.7081, longitude: 44.8743 },
      { latitude: 41.7175, longitude: 44.8766 },
    ],
  ]);
});
