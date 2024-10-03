import 'leaflet/dist/leaflet.css';
import React, { useEffect } from 'react';
import "./style.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import pointer from './image/blackPin.png'; // Ensure this is the correct pointer image path

const CenteredMap = ({ center, zoom }) => {
  const map = useMap();

  useEffect(() => {
    if (map) {
      map.setView(center, zoom);
    }
  }, [map, center, zoom]);

  return null;
};

const Map = () => {
  const center = [13.346434, 77.184534]; // Use the same coordinates as the marker for centering
  const zoom = 13;

  const markers = [
    {
      location: center, // Marker location
      popup: "This is a popup1",
    },
  ];

  const symbol = new icon({
    iconUrl: pointer,
    iconSize: [50, 50],  // Adjust size to match the pointer image
    iconAnchor: [25, 50], // Ensure the bottom tip of the icon is the anchor (half of iconSize width, full height)
    popupAnchor: [0, -50], // Popup should appear above the marker
  });

  return (
    <div className='h-[500px] w-[800px]'>
      <MapContainer center={center} zoom={zoom} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <CenteredMap center={center} zoom={zoom} />

        <MarkerClusterGroup chunkedLoading>
          {markers.map((marker, index) => (
            <Marker position={marker.location} icon={symbol} key={index}>
              <Popup>{marker.popup}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default Map;
