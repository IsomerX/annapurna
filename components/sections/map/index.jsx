import React from "react";
import { data } from "./data";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA1hGVWzCT78RfW7CRHJvzhZw_9ZyTSpDI",
  });

  const markers = data.map((marker) => (
    <Marker key={marker.name} position={{ lat: marker.lat, lng: marker.lng }} />
  ));

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const center = {
    lat: 28.69914,
    lng: 77.16938,
  };

  return (
    <GoogleMap
      center={center}
      zoom={15}
      mapContainerClassName="w-full h-full"
    >
      {markers}
    </GoogleMap>
  );
};

export default Map;
