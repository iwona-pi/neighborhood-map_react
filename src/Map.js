import React, { Component } from 'react';
import { GoogleMap, LoadScript, MarkerF, InfoWindowF } from "@react-google-maps/api";
//import { useState } from "react";
//import Markers from './Markers';
//import Filter from './SearchBar.js';
//import {  } from "@react-google-maps/api";
//import { Marker } from "@react-google-maps/api";
//import restaurants from "./restaurants.json";

class MapContainer extends Component {

state = {
    animation: null
    }
  
/*  onSelect=(restaurant) => {
    this.setState({select: restaurant})
  }*/
i/*coneSet = (restaurant) => {
    this.setState({url:'http://maps.google.com/mapfiles/ms/icons/yellow.png' })
}*/
setA = (restaurant) => {
  this.setState({animation: 1})
}
setN = () => {
  this.setState({animation: null})
}
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
  const {restaurants, onSelect, selected, setSelected, setA, animation, setN} = this.props

  const image = {
    url: '../map-marker.png',
}
  //const {selected} = this.state

  //const [ selected, setSelected ] = useState({});


/*  const onSelect = item => {
    setSelected(item);
  }
  */

 /* const icon = {
    url: 'http://maps.google.com/mapfiles/ms/icons/blue.png'
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
            animation={selected!==null ? (selected===restaurant? '1' : '0') : '0'}
            //animation={animation}
            //icon={selected===restaurant? selected.icon: "http://maps.google.com/mapfiles/ms/icons/blue.png"}
           /*icon={"http://maps.google.com/mapfiles/ms/icons/blue.png"}*/
            /*onClick ={()=>this.iconeSet(restaurant)}*/
            onClick={() => {onSelect(restaurant)}}
              //; setA(selected)}
            />
        )
         })
         
       } {
            selected ?
            (
              <InfoWindowF
              position={selected.geometry.location}
              options={{pixelOffset: new window.google.maps.Size(0,-40)}}
              //position = {selected.geometry.location.lat, selected.geometry.location.lng}
              //setPosition
              clickable={true}
              onCloseClick={() => {setSelected(selected)}}
                //; setN(selected)}}
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