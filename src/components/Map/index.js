import React from "react";
import { GoogleApiWrapper, Marker, Map } from "google-maps-react";

import MarkerIconPurple from "../../assets/MarkerIconPurple.svg";

function MapWrapper({ google, onClick }) {
  return (
    <Map
      google={google}
      zoom={15}
      initialCenter={{
        lat: -23.6671134,
        lng: -46.4598098,
      }}
    >
      <Marker
        onClick={onClick}
        title={"The marker`s title will appear as a tooltip."}
        name={"SOMA"}
        position={{ lat: -23.669031, lng: -46.4559267 }}
        icon={MarkerIconPurple}
      />
      <Marker
        onClick={onClick}
        title={"The marker`s title will appear as a tooltip."}
        name={"SOMA"}
        position={{ lat: -23.666463, lng: -46.45846 }}
        icon={MarkerIconPurple}
      />
      <Marker
        onClick={onClick}
        title={"The marker`s title will appear as a tooltip."}
        name={"SOMA"}
        position={{ lat: -23.66367, lng: -46.459109 }}
        icon={MarkerIconPurple}
      />
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBKp6nU5pI91RTyj_HOd2fvZ6Lb-K_EPWA",
})(MapWrapper);
