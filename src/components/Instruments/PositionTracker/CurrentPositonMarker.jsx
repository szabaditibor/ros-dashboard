import { useEffect, useState } from "react";
import L from "leaflet";

import { Popup } from "react-leaflet";
import { LeafletTrackingMarker } from "react-leaflet-tracking-marker";

import arrowIcon from "../../../assets/arrow.svg";

const icon = L.icon({
  iconSize: [40, 40],
  popupAnchor: [2, -20],
  iconUrl: arrowIcon,
});

const CurrentPositionMarker = ({ latitude, longitude }) => {
  const [prevPos, setPrevPos] = useState([latitude, longitude]);

  useEffect(() => {
    if (prevPos[1] !== longitude && prevPos[0] !== latitude) {
      setPrevPos([latitude, longitude]);
    }
  }, [latitude, longitude, prevPos]);

  return (
    <LeafletTrackingMarker icon={icon} position={[latitude, longitude]} keepAtCenter={true} previousPosition={prevPos} duration={1000}>
      <Popup closeOnEscapeKey={true}>
        {latitude}, {longitude}
      </Popup>
    </LeafletTrackingMarker>
  );
};

export default CurrentPositionMarker;
