import React, { Component } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";
import { useState } from "react";
//import Markers from './Markers';
//import Filter from './SearchBar.js';
//import {  } from "@react-google-maps/api";
//import { Marker } from "@react-google-maps/api";
//import restaurants from "./restaurants.json";

class MapContainer extends Component {

/*  state = {
    selected: null
    
  }*/
 /* onSelect=(restaurant) => {
    this.setState({selected: restaurant})
  }*/

  /*setSelected=()=> {
    this.setState({selected: null})
  }*/
 
    render () {
  const mapStyles = {        
    height: "100vh",
    width: "80vw",
    position: "absolute",
    overflow: "hidden"};
  
  const defaultCenter = {
    lat: 50.049683, lng: 19.944544
  }
  const {restaurants, onSelect, selected, setSelected} = this.props
  //const {selected} = this.state

  //const [ selected, setSelected ] = useState({});


/*  const onSelect = item => {
    setSelected(item);
  }
  */
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyA4cV5aoz8r2Ew2dIOAK-SiH3z6FKMUuM0'>
        <GoogleMap id="map"
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}>
         
         {restaurants.map(restaurant=>{
           return(
            <MarkerF key={restaurant.name} 
            position={restaurant.geometry.location}
            onClick={() => onSelect(restaurant)}
            />
        )})}
         {
            selected ?
            (
              <InfoWindowF
              position={selected.geometry.location}
              clickable={true}
              onCloseClick={() => setSelected()}
            >
            <div>
              <p>{selected.name}</p>
            </div>
            </InfoWindowF>
            ) :null
         }

        </GoogleMap>
        
     </LoadScript>
  )}
}

export default MapContainer;