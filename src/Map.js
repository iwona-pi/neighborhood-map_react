import React, { Component } from 'react';
import { GoogleMap, LoadScript } from "@react-google-maps/api";
//import Markers from './Markers';
import Filter from './SearchBar.js';
import { MarkerF } from "@react-google-maps/api";
//import { Marker } from "@react-google-maps/api";
//import restaurants from "./restaurants.json";

class MapContainer extends Component {
      state = {
      //restaurants: restaurants.results,
      showRestaurants: []
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
  const {restaurants} = this.props
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyA4cV5aoz8r2Ew2dIOAK-SiH3z6FKMUuM0'>
        <GoogleMap id="map"
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         
         {restaurants.map(restaurant=>{
           return(
            <MarkerF key={restaurant.name} position={restaurant.geometry.location}/>
        )})}

        </GoogleMap>
        
     </LoadScript>
  )}
}

export default MapContainer;