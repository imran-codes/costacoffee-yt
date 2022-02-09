import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Container, NavigatorContainer } from "./styles";
import { getCenter } from "geolib";
import Image from "next/image";
import NavigatorIcon from "../../public/images/locationmarker.svg";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});
function Map({ storeResults }) {
  const coordinates = storeResults?.map((store) => ({
    latitude: store.latitude,
    longitude: store.longitude,
  }));

  const center = getCenter(coordinates);

  const centerposition = [center.latitude, center.longitude];

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
    const crd = pos.coords;
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const handleLocation = () => {
    window.navigator.geolocation.getCurrentPosition(success, error, options);
  };

  return (
    <Container>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossorigin=""
        />
      </Head>
      <MapContainer center={centerposition} zoom={13} className="mapContainer">
        <TileLayer
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
        />
        {storeResults?.map((store) => (
          <Marker position={[store.latitude, store.longitude]}>
            <Popup>
              <h1>{store.name}</h1>
              <p>{store.address}</p>
              <p>
                <strong>Opening Times:</strong> {store.times}
              </p>
            </Popup>
          </Marker>
        ))}

        <NavigatorContainer onClick={() => handleLocation()}>
          <Image src={NavigatorIcon} width={200} height={200} />
        </NavigatorContainer>
      </MapContainer>
    </Container>
  );
}

export default Map;
