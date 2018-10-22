const PubSub = require('../helpers/pub_sub');

const SelectView = function(selectElement) {
  this.selectElement = selectElement;
  console.log(selectElement);
};

/// SUBS TO MODEL AND POPULATES DROPDOWN WITH NAMES ///
SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:names-ready', (event) => {
    console.log("names event", event.detail); // array of names
    this.populateSelect(event.detail);
  });

  /// CHANGE LISTENER - REACTS TO DROPDOWN SELECTION ///
  this.selectElement.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    console.log(selectedIndex); // index number
    PubSub.publish('SelectView:change', selectedIndex);
  })
};

///////  DROPDOWN POPULATE SECTION  ////////
SelectView.prototype.populateSelect = function (names) {
  names.forEach((name, index) => {
    const option = this.createNameOption(name, index);
    this.selectElement.appendChild(option);
  })
};
SelectView.prototype.createNameOption = function (name, index) {
  const option = document.createElement('option');
  option.textContent = name;
  option.value = index;
  return option;
};

module.exports = SelectView;
