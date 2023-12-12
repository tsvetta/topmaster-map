import { LatLng } from 'leaflet';
import { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet';
import L from 'leaflet';

import './App.css';
import 'leaflet/dist/leaflet.css';
import LeafletRouting from './LeafletRouting/LeafletRouting';

const MapWithPopupdatav2 = {
  data: [
    {
      id: 1,
      vehicleCode: 'Vehicle39',
      vehicleId: 39,
      color: '#0ac282',
      gridData: {
        currentPage: 1,
        firstRowOnPage: 1,
        kind: 0,
        lastRowOnPage: 15,
        pageCount: 1,
        pageSize: 10000,
        totalRowCount: 15,
        data: [
          {
            distanceMatrixId: 245046421,
            duration: 618000,
            endDate: '2019-09-24T11:44:39',
            latitude: 41.021569,
            locationCode: 'S1R1037',
            locationName: '',
            locationType: 'RCM',
            longitude: 29.040992,
            planDayId: 183,
            planResultId: 116894,
            serviceType: 'RCM Replenish',
            startDate: '2019-09-24T11:34:21',
            status: 'To Do',
            vehicleCode: 'Vehicle39',
            vehicleId: 39,
            visitOrder: 1,
          },
          {
            distanceMatrixId: 189364956,
            duration: 1074000,
            endDate: '2019-09-24T12:05:35',
            latitude: 41.018218,
            locationCode: 'S1A2275',
            locationName: '',
            locationType: 'RCM',
            longitude: 29.044254,
            planDayId: 183,
            planResultId: 116906,
            serviceType: 'Fix',
            startDate: '2019-09-24T11:47:41',
            status: 'To Do',
            vehicleCode: 'Vehicle39',
            vehicleId: 39,
            visitOrder: 2,
          },
          {
            distanceMatrixId: 189452735,
            duration: 618000,
            endDate: '2019-09-24T12:47:52',
            latitude: 41.0075,
            locationCode: 'S1R2054',
            locationName: '',
            locationType: 'RCM',
            longitude: 29.035592,
            planDayId: 183,
            planResultId: 116891,
            serviceType: 'RCM Replenish',
            startDate: '2019-09-24T12:37:34',
            status: 'To Do',
            vehicleCode: 'Vehicle39',
            vehicleId: 39,
            visitOrder: 3,
          },
        ],
      },
    },
    {
      id: 2,
      vehicleCode: 'Vehicle24',
      vehicleId: 24,
      color: '#807ACD',
      gridData: {
        currentPage: 1,
        firstRowOnPage: 1,
        kind: 0,
        lastRowOnPage: 6,
        pageCount: 1,
        pageSize: 10000,
        totalRowCount: 6,
        data: [
          {
            distanceMatrixId: 245857071,
            duration: 696000,
            endDate: '2019-09-24T12:13:45',
            latitude: 40.999569,
            locationCode: '0405',
            locationName: 'Branch48',
            locationType: 'Branch',
            longitude: 29.095666,
            planDayId: 183,
            planResultId: 117530,
            serviceType: 'Cash pickup & Delivery',
            startDate: '2019-09-24T12:02:09',
            status: 'To Do',
            vehicleCode: 'Vehicle24',
            vehicleId: 24,
            visitOrder: 1,
          },
          {
            distanceMatrixId: 276074744,
            duration: 696000,
            endDate: '2019-09-24T14:11:36',
            latitude: 40.992341,
            locationCode: '0022',
            locationName: 'Branch10',
            locationType: 'Branch',
            longitude: 29.101693,
            planDayId: 183,
            planResultId: 117529,
            serviceType: 'Cash pickup & Delivery',
            startDate: '2019-09-24T14:00:00',
            status: 'To Do',
            vehicleCode: 'Vehicle24',
            vehicleId: 24,
            visitOrder: 2,
          },
          {
            distanceMatrixId: 242141750,
            duration: 696000,
            endDate: '2019-09-24T16:11:36',
            latitude: 40.98491,
            locationCode: '0610',
            locationName: 'Branch70',
            locationType: 'Branch',
            longitude: 29.092627,
            planDayId: 183,
            planResultId: 117528,
            serviceType: 'Cash pickup & Delivery',
            startDate: '2019-09-24T16:00:00',
            status: 'To Do',
            vehicleCode: 'Vehicle24',
            vehicleId: 24,
            visitOrder: 3,
          },
        ],
      },
    },
    {
      id: 3,
      vehicleCode: 'Vehicle36',
      vehicleId: 24,
      color: '#F38876',
      gridData: {
        currentPage: 1,
        firstRowOnPage: 1,
        kind: 0,
        lastRowOnPage: 28,
        pageCount: 1,
        pageSize: 10000,
        totalRowCount: 28,
        data: [
          {
            distanceMatrixId: 245046567,
            duration: 1074000,
            endDate: '2019-09-24T11:38:01',
            latitude: 40.980517,
            locationCode: 'S1A4960',
            locationName: '',
            locationType: 'ATM',
            longitude: 29.075156,
            planDayId: 183,
            planResultId: 117282,
            serviceType: 'Fix',
            startDate: '2019-09-24T11:20:07',
            status: 'To Do',
            vehicleCode: 'Vehicle36',
            vehicleId: 36,
            visitOrder: 1,
          },
          {
            distanceMatrixId: 189328693,
            duration: 444000,
            endDate: '2019-09-24T11:49:35',
            latitude: 40.979788,
            locationCode: 'S1A7396',
            locationName: '',
            locationType: 'ATM',
            longitude: 29.067378,
            planDayId: 183,
            planResultId: 117281,
            serviceType: 'ATM Replenish',
            startDate: '2019-09-24T11:42:11',
            status: 'To Do',
            vehicleCode: 'Vehicle36',
            vehicleId: 36,
            visitOrder: 2,
          },
          {
            distanceMatrixId: 191205228,
            duration: 1074000,
            endDate: '2019-09-24T12:14:55',
            latitude: 40.974639,
            locationCode: 'S1A9243',
            locationName: '',
            locationType: 'RCM',
            longitude: 29.05792,
            planDayId: 183,
            planResultId: 117280,
            serviceType: 'Fix',
            startDate: '2019-09-24T11:57:01',
            status: 'To Do',
            vehicleCode: 'Vehicle36',
            vehicleId: 36,
            visitOrder: 3,
          },
        ],
      },
    },
    {
      id: 4,
      vehicleCode: 'Vehicle30',
      vehicleId: 30,
      color: '#008EA9',
      gridData: {
        currentPage: 1,
        firstRowOnPage: 1,
        kind: 0,
        lastRowOnPage: 23,
        pageCount: 1,
        pageSize: 10000,
        totalRowCount: 23,
        data: [
          {
            distanceMatrixId: 271855562,
            duration: 618000,
            endDate: '2019-09-24T12:46:37',
            latitude: 41.025808,
            locationCode: 'S1R2206',
            locationName: '',
            locationType: 'RCM',
            longitude: 29.015655,
            planDayId: 183,
            planResultId: 117165,
            serviceType: 'RCM Replenish',
            startDate: '2019-09-24T12:36:19',
            status: 'To Do',
            vehicleCode: 'Vehicle30',
            vehicleId: 30,
            visitOrder: 1,
          },
          {
            distanceMatrixId: 245814193,
            duration: 1074000,
            endDate: '2019-09-24T11:18:01',
            latitude: 41.022554,
            locationCode: 'S1C2293',
            locationName: '',
            locationType: 'ATM',
            longitude: 29.015923,
            planDayId: 183,
            planResultId: 117170,
            serviceType: 'Fix',
            startDate: '2019-09-24T11:00:07',
            status: 'To Do',
            vehicleCode: 'Vehicle30',
            vehicleId: 30,
            visitOrder: 2,
          },
          {
            distanceMatrixId: 273658538,
            duration: 444000,
            endDate: '2019-09-24T11:32:59',
            latitude: 41.018628,
            locationCode: 'S1C1902',
            locationName: '',
            locationType: 'ATM',
            longitude: 29.011041,
            planDayId: 183,
            planResultId: 117169,
            serviceType: 'ATM Replenish',
            startDate: '2019-09-24T11:25:35',
            status: 'To Do',
            vehicleCode: 'Vehicle30',
            vehicleId: 30,
            visitOrder: 3,
          },
          {
            distanceMatrixId: 272746632,
            duration: 618000,
            endDate: '2019-09-24T11:47:01',
            latitude: 41.01522,
            locationCode: 'S1R2650',
            locationName: '',
            locationType: 'RCM',
            longitude: 29.011577,
            planDayId: 183,
            planResultId: 117168,
            serviceType: 'RCM Replenish',
            startDate: '2019-09-24T11:36:43',
            status: 'To Do',
            vehicleCode: 'Vehicle30',
            vehicleId: 30,
            visitOrder: 4,
          },
        ],
      },
    },
  ],
};

function LocationMarker({ onClick }: { onClick: Function }) {
  const [position, setPosition] = useState<LatLng | null>(null);
  const map = useMapEvents({
    click(e: any) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      onClick(e);
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function App() {
  const [latlng, setLatlng] = useState({ lat: 0, lng: 0 });
  const onMarkerClick = (e: any) => {
    console.log(e.latlng);
    setLatlng(e.latlng);
  };

  const [selectedDeviceIndex, setSelectedDeviceIndex] = useState(null);
  const [markersDataSource, setMarkersDataSource] = useState(
    MapWithPopupdatav2.data.map((item) =>
      item.gridData.data.map((item) => item)
    )
  );

  const [routeWayColor, setRouteWayColor] = useState<string[]>(
    MapWithPopupdatav2.data.map((item) => item.color)
  );

  const [dataForRouting, setDataForRouting] = useState<any[][]>(
    MapWithPopupdatav2.data.map((eachPoint) =>
      eachPoint.gridData.data.map((point) =>
        L.latLng(point.latitude, point.longitude)
      )
    )
  );

  const markersLatLon: any[][] = MapWithPopupdatav2.data.map((eachPoint) =>
    eachPoint.gridData.data.map((point) => ({
      latitude: point.latitude,
      longitude: point.longitude,
    }))
  );
  function centerMapDataCalculate(data: any[][]) {
    let newArray: any[] = [];
    data.forEach((item) => {
      item.map((point) => {
        newArray.push(point);
      });
    });
    return newArray;
  }

  const markersCoordinatesForMapCentering: any[] =
    centerMapDataCalculate(markersLatLon);

  return (
    <>
      <h1 className='text-3xl font-bold'>Topmaster Tbilisi Map</h1>
      <p>
        {latlng.lat} {latlng.lng}
      </p>
      <MapContainer center={[41.71525, 44.87479]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <LocationMarker onClick={onMarkerClick} />

        <LeafletRouting
          eachPoint={dataForRouting[0]}
          dataSource={markersDataSource[0]}
          color={routeWayColor[0]}
          bounds={markersCoordinatesForMapCentering}
        />
      </MapContainer>
    </>
  );
}

export default App;
