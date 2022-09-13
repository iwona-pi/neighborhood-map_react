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
    link: ''
    }
  
/*  onSelect=(restaurant) => {
    this.setState({select: restaurant})
  }*/
/*if (selected) {
  this.setState({select: restaurant})
}*/
  set=(Url)=> {
    this.setState({link: Url})
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
  const {restaurants, onSelect, selected, setSelected, url, animation, setN} = this.props

  const image = {
    url: '../map-marker.png',
}
  //const {selected} = this.state

  //const [ selected, setSelected ] = useState({});
 let Url, adres, adresik
  
  if(selected!==null) {
    adres = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c30015377c78bd8635055c5ea59e145e&lat=" +selected.geometry.location.lat+"&lon=" +selected.geometry.location.lng +"&per_page=5&page=1&format=json&nojsoncallback=1"
    fetch(adres).then(data=> {
  return data.json()
}).then(jsonData => {
  console.log(adres);
 console.log(jsonData.photos);
 //console.log('https://farm' + jsonData.photos.photo[1].farm + '.staticflickr.com/' + jsonData.photos.photo[1].server + '/' + jsonData.photos.photo[1].id + '_' + jsonData.photos.photo[1].secret + '.jpg');
 Url = 'https://farm' + jsonData.photos.photo[0].farm + '.staticflickr.com/' + jsonData.photos.photo[0].server + '/' + jsonData.photos.photo[0].id + '_' + jsonData.photos.photo[0].secret + '.jpg';
console.log(Url);
return Url;
//this.set();
}).catch(error=> {
  console.log(error);
}) 
      adresik = Url;
      console.log(adresik);
      //Url = "https://farm" + jsonData.photos.photo[1].farm + ".staticflickr.com/" + jsonData.photos.photo[1].server + "/" + jsonData.photos.photo[1].id + '_' + jsonData.photos.photo[1].secret + '.jpg'
  }
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
            color="blue"
            //animation={animation}
            icon={selected!==null ? (selected===restaurant?  "http://maps.google.com/mapfiles/ms/icons/blue.png":''):''}
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
              <img alt="place" src={url}></img>
            </div>
            </InfoWindowF>
            ) :null
         }

        </GoogleMap>
        
     </LoadScript>
  )}
}

export default MapContainer;