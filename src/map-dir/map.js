import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = () => {
  // Location to be centered on and where the markers will be placed
  const centerLocation = {
    lat: 13.346434, // Adjusted to the latest location
    lng: 77.184534,
  };

  // Define container style for the map
  const containerStyle = {
    width: "100%",
    height: "500px", // Adjust this for your layout
  };

  // Custom black marker icon using the provided SVG
  const customMarkerIcon = {
    url: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:sketch='http://www.bohemiancoding.com/sketch/ns' viewBox='0 0 30 37.5' version='1.1' x='0px' y='0px'%3E%3Ctitle%3Eaction_077-location-map-marker-pin-place%3C/title%3E%3Cdesc%3ECreated with Sketch.%3C/desc%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' sketch:type='MSPage'%3E%3Cg sketch:type='MSArtboardGroup' transform='translate(-315.000000, -360.000000)' fill='%23000000'%3E%3Cpath d='M330.2468,386.332577 C330.521957,385.957769 330.828389,385.532919 331.158301,385.066171 C332.100875,383.732652 333.043481,382.329678 333.923914,380.92199 C334.490728,380.015735 335.013548,379.135938 335.483281,378.291917 C337.092557,375.400353 338,373.08905 338,371.5 C338,366.80558 334.19442,363 329.5,363 C324.80558,363 321,366.80558 321,371.5 C321,373.08905 321.907443,375.400353 323.516719,378.291917 C323.986452,379.135938 324.509272,380.015735 325.076086,380.92199 C325.956519,382.329678 326.899125,383.732652 327.841699,385.066171 C328.171611,385.532919 328.478043,385.957769 328.7532,386.332577 C328.918693,386.558005 329.037279,386.717043 329.101156,386.801535 C329.301214,387.066155 329.698786,387.066155 329.898844,386.801535 C329.962721,386.717043 330.081307,386.558005 330.2468,386.332577 L330.2468,386.332577 Z M329.5,374 C331.432997,374 333,372.432997 333,370.5 C333,368.567003 331.432997,367 329.5,367 C327.567003,367 326,368.567003 326,370.5 C326,372.432997 327.567003,374 329.5,374 L329.5,374 Z' sketch:type='MSShapeGroup'/%3E%3C/g%3E%3C/g%3E%3Ctext x='0' y='45' fill='%23000000' font-size='5px' font-weight='bold' font-family='Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif'%3ECreated by Pham Thi Dieu Linh%3C/text%3E%3Ctext x='0' y='50' fill='%23000000' font-size='5px' font-weight='bold' font-family='Helvetica Neue, Helvetica, Arial-Unicode, Arial, Sans-serif'%3Efrom the Noun Project%3C/text%3E%3C/svg%3E",
    scaledSize: { width: 50, height: 50 }, // Adjust size as needed
  };

  return (
    <div className="flex justify-center items-center">
      <LoadScript googleMapsApiKey="AIzaSyCAn1AoU-SBgUc1xwceXzXhhnKP3z_HeLY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={centerLocation}
          zoom={13} // Adjust the zoom level as needed
        >
          {/* Marker with the custom black SVG icon */}
          <Marker position={centerLocation} icon={customMarkerIcon} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
