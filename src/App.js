import React, { Component } from 'react'
import MapContainer from './Map';
import Filter from './SearchBar.js'
import restaurants from "./restaurants.json";

class App extends Component {
  /*state = {
      restaurants: restaurants.results
  }*/

  render(){
  return (
  
    <div >
    	<header><h1>Places in Krakow</h1></header>
    <Filter />
  
 	
    </div>

    
  );
}}

export default App
