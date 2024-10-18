import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  // Location to be centered on and where the markers will be placed
  const centerLocation = {
    lat: 13.346434,
    lng: 77.184534,
  };

  // Second marker location
  const secondLocation = {
    lat: 13.348434, // Slightly different latitude
    lng: 77.182534, // Slightly different longitude
  };

  // Define container style using Tailwind
  const containerStyle = {
    width: "100%",
    height: "500px", // Adjust this for your layout
  };

  return (
    <div className="flex justify-center items-center">
      <LoadScript googleMapsApiKey="AIzaSyCAn1AoU-SBgUc1xwceXzXhhnKP3z_HeLY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={centerLocation}
          zoom={13} // Adjust the zoom level as needed
        >
          {/* Marker at the center location */}
          <Marker position={centerLocation} />

          {/* Second marker at a nearby location */}
          <Marker position={secondLocation} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
