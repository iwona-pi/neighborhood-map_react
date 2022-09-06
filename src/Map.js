import React, { Component } from 'react';
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Markers from './Markers';
import Filter from './SearchBar.js';
import restaurants from "./restaurants.json";

class MapContainer extends Component {
      state = {
      restaurants: restaurants.results
    }
 
    render () {
  const mapStyles = {        
    height: "100vh",
    width: "80vw",
    position: "absolute",
    overflow: "hidden"};
  
  const defaultCenter = {
    lat: 50.049683, lng: 19.944544
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyA4cV5aoz8r2Ew2dIOAK-SiH3z6FKMUuM0'>
        <GoogleMap id="map"
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
        <Markers/>

        </GoogleMap>
        <Filter restaurants={this.state.restaurants}/>
     </LoadScript>
  )}
}

export default MapContainer;