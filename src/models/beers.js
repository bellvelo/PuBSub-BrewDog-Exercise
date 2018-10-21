const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function(){
  this.beersData = [];
  this.names = [];

}
/// SUBS FROM SELECT VIEW AND TRIGGERS METHOD TO RETURN BEER OBJECT ///
Beers.prototype.bindEvents = function () {
  PubSub.subscribe('SelectView:change', (event) => {
    const nameIndex = event.detail; // Index number
    this.publishBeerByName(nameIndex); // console.log('this', this); // array of objects & array of names.
    })
};

/// PULLS IN API DATA THEN CALLS METHOD TO COMPILE ARRAY OF NAMES ///
Beers.prototype.getData = function () {
  const url = "https://api.punkapi.com/v2/beers";
  const request = new Request(url);
  request.get().then(data => {
    console.log('Data from Model:', data); //array of 25 objects
    PubSub.publish('Beers:beers-loaded', data)
    this.publishNames(data);
  });
};

/// LOGIC TO COMPILE LIST OF NAMES FOR THE DROPDOWN ///
Beers.prototype.publishNames = function (data) {
  this.beersData = data;
  this.names = this.nameList();
  PubSub.publish('Beers:names-ready', this.names);
  console.log(this.names); //array of names
};
/// CREATES ARRAY OF NAMES ///
Beers.prototype.nameList = function () {
  console.log(this.beersData); //array
  const fullList = this.beersData.map(beer => beer.name);
  return fullList
  console.log('this is the full list', fullList);
};

 /// METHOD TO RETURN BEER OBJECT FROM AN INDEX NUMBER ///
Beers.prototype.beersByName = function (nameIndex) {
  const selectedName = this.names[nameIndex];
  return this.beersData.filter((beer) => {
    return beer.name === selectedName;
  })
};
Beers.prototype.publishBeerByName = function (nameIndex) {
  const foundBeer = this.beersByName(nameIndex);
  PubSub.publish('Beers:beers-loaded', foundBeer);
  console.log('found beer', foundBeer); // beer object
};


module.exports = Beers;
