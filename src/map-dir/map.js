import React from "react";
import { Icon } from "leaflet";
import "./map.css";
import "leaflet/dist/leaflet.css";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import BlackPin from "./image/blackPin.png";
const Map = () => {
  const markSit = [
    {
      Geolocation: [13.346434, 77.184534],
      Popup: "Sit",
    },
  ];
  const custumIconSit = new Icon({
    iconUrl: BlackPin,
    iconSize: [38, 38],
  });

  return (
    <MapContainer center={[13.346434, 77.184534]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markSit.map((markSit, index) => (
        <Marker position={markSit.Geolocation} icon={custumIconSit} key={index}>
          <Popup>{markSit.Popup}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
