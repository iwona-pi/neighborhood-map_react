import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';

class Filter extends Component {

	render(){

	const { restaurants } = this.props

	return(
	<div className='container'>
        //{JSON.stringify(this.state)}
        <div className='search'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search contacts'
            /*value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}*/
          />
        </div>
        <ul className='restaurants-list'>
          {restaurants.map((restaurant) => (
            <li key={restaurant.name} className='contact-list-item'>
             
              <div className='contact-details'>
                <p>{restaurant.name}</p>
               
              </div>
            
            </li>
          ))}
        </ul>
      </div>
        );
		

}}

export default Filter;