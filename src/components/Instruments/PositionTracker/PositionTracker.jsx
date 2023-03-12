import { useRef } from "react";

import { MapContainer, TileLayer } from "react-leaflet";
import CurrentPositionMarker from "./CurrentPositonMarker";

const PositionTracker = ({ latitude, longitude, topicName }) => {
  // https://github.com/PaulLeCam/react-leaflet/issues/340#issuecomment-1165518621
  const mapRef = useRef(null);

  const resizeMap = (mapRef) => {
    const resizeObserver = new ResizeObserver(() => mapRef.current?.invalidateSize());

    const container = document.getElementById(`map-container__${topicName}`);
    if (container) {
      resizeObserver.observe(container);
    }
  };

  return (
    <MapContainer
      ref={mapRef}
      id={`map-container__${topicName}`}
      center={[latitude, longitude]}
      zoom={18}
      minZoom={15}
      scrollWheelZoom={false}
      whenReady={() => resizeMap(mapRef)}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <CurrentPositionMarker latitude={latitude} longitude={longitude} />
    </MapContainer>
  );
};

export default PositionTracker;
