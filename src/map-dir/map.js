import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  // Location to be centered on and where the markers will be placed
  const centerLocation = {
    lat: 13.346434, // Adjusted to the latest location
    lng: 77.184534,
  };

  // Define container style using Tailwind
  const containerStyle = {
    width: "100%",
    height: "500px", // Adjust this for your layout
  };

  // Custom icon for the marker
  // const customMarkerIcon = {
  //   url: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.dreamstime.com%2Fillustration%2Fgoogle-map-marker.html&psig=AOvVaw0fu3ntVKx0lKOtav_kVaP9&ust=1729351505157000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIj1iseemIkDFQAAAAAdAAAAABAE", // Replace with the URL of your icon image
  //   scaledSize: { width: 50, height: 50 }, // Adjust size as needed
  // };

  return (
    <div className="flex justify-center items-center">
      <LoadScript googleMapsApiKey="AIzaSyCAn1AoU-SBgUc1xwceXzXhhnKP3z_HeLY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={centerLocation}
          zoom={13} // Adjust the zoom level as needed
        >
          {/* Marker with custom icon and label */}
          <Marker position={centerLocation} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
