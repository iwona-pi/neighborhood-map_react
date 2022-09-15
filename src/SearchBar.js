import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import restaurants from "./restaurants.json";
import MapContainer from './Map';

class Filter extends Component {
  
  state = {
    query: '',
    showRestaurants: restaurants.results,
    selected: null,
    url: ''
   

  }
  
  updateQuery = (query ) => {
    
    //This function allows change two state in one time
    this.setState({ query: query.trim() },()=>{
    //this.setState({showRestaurants: showRestaurants});
    this.updateState(this.showRestaurants)})
    }

  updateState = (showRestaurants) => {
    this.setState({showRestaurants: showRestaurants});
  }
//When you click on marker or item list this function is invoked
  onSelect=(restaurant, Url) => {
    this.photo(restaurant);

    this.setState({selected: restaurant});
                  //url: Url
   

  }
//Closing the Infowindow you are deleting two states
  setSelected=()=> {
    this.setState({selected: null,
                  url: ''})
                  //animation: '0'
  }
/*Fetch custom image from Flickr API based on choosen place*/
photo = (restaurant) => {
let adres, Url

      adres = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c30015377c78bd8635055c5ea59e145e&lat=" +restaurant.geometry.location.lat+"&lon=" +restaurant.geometry.location.lng +"&per_page=5&page=5&format=json&nojsoncallback=1"
    fetch(adres).then(data=> {
  return data.json()
}).then(jsonData => {
  console.log(adres);
 console.log(jsonData.photos);
 
 //console.log('https://farm' + jsonData.photos.photo[1].farm + '.staticflickr.com/' + jsonData.photos.photo[1].server + '/' + jsonData.photos.photo[1].id + '_' + jsonData.photos.photo[1].secret + '.jpg');
 Url = 'https://farm' + jsonData.photos.photo[0].farm + '.staticflickr.com/' + jsonData.photos.photo[0].server + '/' + jsonData.photos.photo[0].id + '_' + jsonData.photos.photo[0].secret + '.jpg';
console.log(Url);
this.setState({url: Url})
//return Url;
//this.set();
}).catch(error=> {
  console.log(error);
  alert("Sorry, you can't see an image now. There is problem with Flickr API. Refresh your browser or try agaian later")
}) 
      //adresik = Url;
      //console.log(adresik);
      //Url = "https://farm" + jsonData.photos.photo[1].farm + ".staticflickr.com/" + jsonData.photos.photo[1].server + "/" + jsonData.photos.photo[1].id + '_' + jsonData.photos.photo[1].secret + '.jpg'
  }


	
  render() {

const { query, selected} = this.state
 

        //Dynamically change state when filter is running
      
      if (this.state.query) {
        const match = new RegExp(escapeRegExp(query), 'i')    
         this.showRestaurants = restaurants.results.filter((contact) => match.test(contact.name));
          
              }
              else {
          this.showRestaurants = restaurants.results
    }

	return(
	<div className='container'>
      <div className = 'wrapper'> 
        <div className='filter'>
          <input
            className='filter-restaurant'
            type='text'
            placeholder='Location'
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            //onChange = {this.updateState}
          />
        </div>
        <ul className='restaurants-list'>
          {this.showRestaurants.map((restaurant) => (
            <li key={restaurant.name} className='restaurant-item' 
            onClick={() => this.onSelect(restaurant)}>
             
              <div className='restaurant-name' >
                <p tabIndex="0" role="button" aria-pressed={selected!==null?(selected.name === restaurant.name?true:false):false}>{restaurant.name} </p>
               
              </div>
            
            </li>
          ))}
        </ul>
      </div> 
      <div>  
        <MapContainer restaurants={this.state.showRestaurants}
                      selected = {this.state.selected}
                      onSelect = {this.onSelect}
                      setSelected = {this.setSelected}
                      url = {this.state.url}
                      />
       </div>             
    </div>

        );
		

}}

export default Filter;