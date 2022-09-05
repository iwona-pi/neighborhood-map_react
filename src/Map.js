import React from 'react';
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Markers from './Markers';

const MapContainer = () => {

 

  const mapStyles = {        
    height: "100vh",
    width: "100vw"};
  
  const defaultCenter = {
    lat: 50.049683, lng: 19.944544
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyA4cV5aoz8r2Ew2dIOAK-SiH3z6FKMUuM0'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
        <Markers/>
        </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;