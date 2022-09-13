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
    
    this.setState({ query: query.trim() },()=>{
    //this.setState({showRestaurants: showRestaurants});
    this.updateState(this.showRestaurants)})
    }

  updateState = (showRestaurants) => {
    this.setState({showRestaurants: showRestaurants});
  }

  onSelect=(restaurant, Url) => {
    this.dupa(restaurant);

    this.setState({selected: restaurant,
                  url: Url});
                  //animation:1

  }

  setSelected=()=> {
    this.setState({selected: null,
                  url: ''})
                  //animation: '0'
  }

dupa = (selected) => {
let adres, Url

      adres = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c30015377c78bd8635055c5ea59e145e&lat=" +selected.geometry.location.lat+"&lon=" +selected.geometry.location.lng +"&per_page=5&page=5&format=json&nojsoncallback=1"
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
  alert("Sorry, you can't see image now. There is problem with Flickr API. Refresh your browser or try agaian later")
}) 
      //adresik = Url;
      //console.log(adresik);
      //Url = "https://farm" + jsonData.photos.photo[1].farm + ".staticflickr.com/" + jsonData.photos.photo[1].server + "/" + jsonData.photos.photo[1].id + '_' + jsonData.photos.photo[1].secret + '.jpg'
  }

/*  setA = (restaurant) => {
  this.setState({animation: 1})
}
setN = (selected) => {
  this.setState({animation: null})
}*/
	
  render() {

const { query, selected} = this.state
  /*  let adres
      if(selected) {
        adres = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c30015377c78bd8635055c5ea59e145e&lat=" +selected.geometry.location.lat+ "&" +selected.geometry.location.lng +"&per_page=5&page=1&format=json&nojsoncallback=1"
    fetch(adres).then(data=> {
  return data.json()
}).then(jsonData => {
 console.log(jsonData.photos);
 console.log(adres);
}).catch(error=> {
  console.log(error);
}) 
     
  }
*/
	//const { restaurants, onChange} = this.props
  //const { query, selected} = this.state

        //let showRestaurants
      
      if (this.state.query) {
        const match = new RegExp(escapeRegExp(query), 'i')    
         this.showRestaurants = restaurants.results.filter((contact) => match.test(contact.name));
          
              }
              else {
          this.showRestaurants = restaurants.results
    }

	return(
	<div className='container'>
        
        <div className='search'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search contacts'
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
            //onChange = {this.updateState}
          />
        </div>
        <ul className='restaurants-list'>
          {this.showRestaurants.map((restaurant) => (
            <li key={restaurant.name} className='contact-list-item' 
            onClick={() => this.onSelect(restaurant)}>
             
              <div className='contact-details'>
                <p>{restaurant.name} </p>
               
              </div>
            
            </li>
          ))}
        </ul>
        
        <MapContainer restaurants={this.state.showRestaurants}
                      selected = {this.state.selected}
                      onSelect = {this.onSelect}
                      setSelected = {this.setSelected}
                      url = {this.state.url}
                      //setA= {this.setA}
                      //animation = {this.state.animation}
                      //setN= {this.setN}
                      />
                    
      </div>

        );
		

}}

export default Filter;