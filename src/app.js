const Beers = require('./models/beers.js');
const SelectView = require('./views/select_view.js');
const BeersListView = require('./views/beers_list_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS Loaded!');

  const selectElement = document.querySelector('select#beer-select');
  const selectView = new SelectView(selectElement);
  selectView.bindEvents();

  const beersListContainer = document.querySelector('#beer-list');
  const beersListView = new BeersListView(beersListContainer);
  beersListView.bindEvents();

  const beers = new Beers();
  beers.bindEvents();
  beers.getData();

})
