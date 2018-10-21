const PubSub = require('../helpers/pub_sub.js');
const BeerDetailView = require('./beer_detail_view.js');

const BeersListView = function(container){
  this.container = container; //html element
}

/// SUBSCRIBES TO API DATA FROM MODEL ///
BeersListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-loaded', (event) => {
    this.clearList();
    console.log('data from list_view:', event.detail); //ARRAY
    this.renderBeerDetailView(event.detail);
  })
};
/// CLEARS THE HTML ELEMENT ///
BeersListView.prototype.clearList = function () {
  this.container.innerHTML = "";
};

/// CREATES HTML ELEMENT FOR EACH OBJECT AND APPENDS IT TO ELEMENT FOR ALL BEERS //
BeersListView.prototype.renderBeerDetailView = function (beers) {
  beers.forEach((beer) => {
    const beerItem = this.createBeerListItem(beer);
    // console.log("this", this);
    this.container.appendChild(beerItem)
    // console.log('beerItem:', beerItem); // HTML element for individual beer
  })
};
BeersListView.prototype.createBeerListItem = function (beer) {
  const beerDetailView = new BeerDetailView();
  const beerDetail = beerDetailView.createBeerDetail(beer);
  return beerDetail;
  console.log('beerDetail:', beerDetail); // HTML element for individual beer
};

module.exports = BeersListView;
