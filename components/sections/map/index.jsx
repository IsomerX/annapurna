import React from "react";
import { data } from "./data";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

const Map = ({ data }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA1hGVWzCT78RfW7CRHJvzhZw_9ZyTSpDI",
  });

  console.log("dataqwe", data);

  if (!data) return;

  const markers = data.map((marker) => {
    console.log(marker);

    return (
      <Marker
        key={marker.uid}
        position={{ lat: marker.lat, lng: marker.lng }}
      />
    );
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const center = {
    lat: data[0].lat,
    lng: data[0].lng,
  };

  return (
    <GoogleMap center={center} zoom={15} mapContainerClassName="w-full h-full">
      {markers}
    </GoogleMap>
  );
};

export default Map;
