import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import restaurants from "./restaurants.json";
import MapContainer from './Map';

class Filter extends Component {
  
  state = {
    query: '',
    showRestaurants: restaurants.results,
    selected: null

  }
  
  updateQuery = (query ) => {
    
    this.setState({ query: query.trim() },()=>{
    //this.setState({showRestaurants: showRestaurants});
    this.updateState(this.showRestaurants)})
    }

  updateState = (showRestaurants) => {
    this.setState({showRestaurants: showRestaurants});
  }

  onSelect=(restaurant) => {
    this.setState({selected: restaurant})
  }

  setSelected=()=> {
    this.setState({selected: null})
  }
	
  render() {

	//const { restaurants, onChange} = this.props
  const { query} = this.state

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
                      setSelected = {this.setSelected}/>
      </div>

        );
		

}}

export default Filter;