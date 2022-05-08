import React, { useEffect, useState } from "react";
import { data2 } from "./data";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";
import { sleep } from "../../../pages/dashboard";

const Map = ({ data }) => {
  const [waiting, setWating] = useState(true);

  // wait 1 sec to check authentication status
  useEffect(() => {
    if (waiting) {
      sleep(1000).then(() => setWating(false));
    }
  }, [waiting]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA1hGVWzCT78RfW7CRHJvzhZw_9ZyTSpDI",
  });

  if (!data) return;

  const markers = data.map((marker) => {
    return (
      <Marker
        key={marker.uid}
        position={{ lat: marker.lat, lng: marker.lng }}
      />
    );
  });

  const markers2 = data2.map((marker) => {
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

  const center = { lat: data[0].lat, lng: data[0].lng };

  return (
    <GoogleMap center={center} zoom={12} mapContainerClassName="w-full h-full">
      {!waiting && markers}
      <Marker
        title={"The marker`s title will appear as a tooltip."}
        name={"SOMA"}
        position={{ lat: 28.69914, lng: 77.1638 }}
      />
    </GoogleMap>
  );
};

export default Map;
