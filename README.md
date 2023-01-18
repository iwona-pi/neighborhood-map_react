# Neighborhood Map React

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is a part of Front-End Web Developer Nanodegree program at [Udacity](https://www.udacity.com/).

## Description
One-page application showing places on Google Maps. Clicking on the marker or list of the places causes displaying the infowindow with name of location and image from [Flickr](https://www.flickr.com/). Also added a little animation like bouncing to know which one of the markers was clicked.
Filter locations using filter bar and you see markers dynamically rendered accordingly to location's name.

[![screen.png](https://i.postimg.cc/VN70CtkF/screen.png)](https://postimg.cc/NyH0h5Ty)



## Run project
Clone this repo:\
`git clone https://github.com/iwona-pi/neighborhood-map_react.git`

Open the cmd in the project directory and run:
 </br>`npm install`</br>
 `npm start`


You should see window open in your deafult browser and apllication runnig on [http://localhost:3000](http://localhost:3000).

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Third-party APIs
Apllication besides the [Google Maps](https://developers.google.com/maps) API uses what is known as third party APIs. In this project Google Map API is intergrated with [Flickr API](https://www.flickr.com/services/api/).\
[This](https://www.flickr.com/services/api/flickr.photos.search.htm) method was used to display images matching to locations.

`"https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key={your_API_key}&lat={x}&lon={y}&per_page=5&page=5&format=json&nojsoncallback=1"` 

In the link above `{x}` and `{y}` are replaced by individual location of each place, then we receive the list of photo. In this case 5 photo (`per_page=5`) and we may choose one to display.

#### Errors
Apllications is error free. Special alert is displaying when something is not correct.

## Author
[Iwona P.](https://github.com/iwona-pi)




