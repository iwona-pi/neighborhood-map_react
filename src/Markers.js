import React from 'react';
import { MarkerF } from "@react-google-maps/api";
import restaurants from "./restaurants.json";

const Markers = () => {
/* const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 50.0636099,
        lng: 19.9378936 
      },
    },
    {
      name: "Location 2",
      location: { 
        lat: 50.065624,
        lng: 19.945442
      }
    }
]*/
	return(
		 restaurants.results.map(restaurant=>{
            return (
              <MarkerF key={restaurant.name} position={restaurant.geometry.location}/>
              )
          }))
}

export default Markers;