const BeerDetailView = function (){
};

/// VIEW TO HANDLE HOW THE DATA IS DISPLAYED/STRUCTURED //
BeerDetailView.prototype.createBeerDetail = function (beer) {

  const beerDetail = document.createElement('div')
  beerDetail.classList.add('beer-wrapper');
///////////////////////////////////////////////////////////////////////////////
  const beerImageDiv = document.createElement('div')
  beerImageDiv.classList.add('beer-image');

  const beerImage = document.createElement('img')
  beerImage.src = beer.image_url;
  beerImage.alt = beer.name;
  beerImage.classList.add('image');
  beerImageDiv.appendChild(beerImage);
///////////////////////////////////////////////////////////////////////////////
  const beerTextDiv = document.createElement('div')
  beerTextDiv.classList.add('beer-info');
///////////////////////////////////////////////////////////////////////////////
  const beerNameDiv = document.createElement('div')
  beerNameDiv.classList.add('beer-name');
  beerTextDiv.appendChild(beerNameDiv)

  const beerName = document.createElement('h2')
  beerName.textContent = beer.name;
  beerName.classList.add('name');
  beerNameDiv.appendChild(beerName);
///
  const beerTaglineDiv = document.createElement('div')
  beerTaglineDiv.classList.add('beer-tagline');
  beerTextDiv.appendChild(beerTaglineDiv)


  const beerTagline = document.createElement('h3')
  beerTagline.textContent = `"${beer.tagline}"`;
  beerTagline.classList.add('tagline');
  beerTaglineDiv.appendChild(beerTagline);
///
  const beerAbvDiv = document.createElement('div')
  beerAbvDiv.classList.add('beer-abv');
  beerTextDiv.appendChild(beerAbvDiv)

  const beerAbv = document.createElement('h3')
  beerAbv.textContent = `ABV: ${beer.abv}%`;
  beerAbv.classList.add('abv');
  beerAbvDiv.appendChild(beerAbv);
///
  const beerDescriptionDiv = document.createElement('div')
  beerDescriptionDiv.classList.add('beer-description');
  beerTextDiv.appendChild(beerDescriptionDiv)

  const beerDescription = document.createElement('h3')
  beerDescription.textContent = `TASTING NOTES: ${beer.description}`;
  beerDescription.classList.add('description');
  beerDescriptionDiv.appendChild(beerDescription);
///
  const beerFoodDiv = document.createElement('div')
  beerFoodDiv.classList.add('beer-food');
  beerTextDiv.appendChild(beerFoodDiv)

  const BeerFood = document.createElement('h3')
  BeerFood.textContent = `EATINGS NOT CHEATING: ${beer.food_pairing}`;
  BeerFood.classList.add('food');
  beerFoodDiv.appendChild(BeerFood);
///
  beerDetail.appendChild(beerImageDiv);
  beerDetail.appendChild(beerTextDiv);
  return beerDetail;

};


module.exports = BeerDetailView;
