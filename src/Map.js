import React, { Component } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";
//import { useState } from "react";
//import Markers from './Markers';
//import Filter from './SearchBar.js';
//import {  } from "@react-google-maps/api";
//import { Marker } from "@react-google-maps/api";
//import restaurants from "./restaurants.json";

class MapContainer extends Component {

/*state = {
    link: ''
    }
  

  set=(Url)=> {
    this.setState({link: Url})
  }*/

    render () {
  const mapStyles = {        
    height: "100vh",
    width: "79vw",
    position: "absolute",
    overflow: "hidden"};
  
  const defaultCenter = {
    lat: 50.049683, lng: 19.944544
  }
  //We have to move some props to parent element. This allows to use the same states on both componnets
  const {restaurants, onSelect, selected, setSelected, url} = this.props




  return (
    <div>
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
            //set animation when marker or item list is clicked 
            animation={selected!==null ? (selected===restaurant? '1' : '0') : '0'}
            color="blue"
            //this icon isn't working unfortunatelly
            icon={selected!==null ? (selected===restaurant?  "http://maps.google.com/mapfiles/ms/icons/blue.png":''):''}
           /*icon={"http://maps.google.com/mapfiles/ms/icons/blue.png"}*/
            /*onClick ={()=>this.iconeSet(restaurant)}*/
            onClick={() => {onSelect(restaurant)}}
              //; setA(selected)}
            />
        )
         })
         
       } {
        /*If the state is changed on selected (marked or item on filter list is clicked, the Infowindow is open*/
            selected ?
            (
              <InfoWindowF
              position={selected.geometry.location}
              options={{pixelOffset: new window.google.maps.Size(0,-40)}}
              clickable={true}
              onCloseClick={() => {setSelected(selected)}}
            >
            <div>
              <p>{selected.name}</p>
              <img alt="place" src={url}></img>
            </div>
            </InfoWindowF>
            ) :null
         }

        </GoogleMap>
        
     </LoadScript>
  </div>
  )}
}

export default MapContainer;