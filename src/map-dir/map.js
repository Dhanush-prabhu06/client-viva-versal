import 'leaflet/dist/leaflet.css';
import React from 'react';
import "./style.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { icon } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster'
const Map = () => {
  const markers = [
    {
      location: [13.346434, 77.184534],
      popup: "This is a popup1"
    },
    {
      location: [14.346434, 77.184534],
      popup: "This is a popup2"
    },
    {
      location: [15.346434, 77.184534],
      popup: "This is a popup3"
    }
  ];

  const symbol = new icon({
    iconUrl: "https://media.istockphoto.com/id/1148705812/vector/location-icon-vector-pin-sign-isolated-on-white-background-navigation-map-gps-direction.jpg?s=612x612&w=0&k=20&c=lqEIzW3QedZfytsX30NoBJbHxZZbWnlLsvEiwOSbaow=",
    iconSize: [38, 38]
  });

  return (
    <div className='h-[5px] w-[800px]'>
    <MapContainer center={[13.346434, 77.184534]} zoom={13} style={{ height: "100vh", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup
        chunkedLoading
      >
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
