const BeerDetailView = function (){
};

/// VIEW TO HANDLE HOW THE DATA IS DISPLAYED/STRUCTURED //
BeerDetailView.prototype.createBeerDetail = function (beer) {

  const beerDetail = document.createElement('div')
  beerDetail.classList.add('beer-wrapper');

  const beerImageDiv = document.createElement('div')
  beerImageDiv.classList.add('beer-image');

  const beerTextDiv = document.createElement('div')
  beerTextDiv.classList.add('beer-info');

  const beerImage = document.createElement('img')
  beerImage.src = beer.image_url;
  beerImage.alt = beer.name;
  beerImage.classList.add('image');
  beerImageDiv.appendChild(beerImage);

  const beerName = document.createElement('h2')
  beerName.textContent = beer.name;
  beerName.classList.add('name');
  beerTextDiv.appendChild(beerName);

  const beerTagline = document.createElement('h3')
  beerTagline.textContent = beer.tagline;
  beerTagline.classList.add('tagline');
  beerTextDiv.appendChild(beerTagline);

  const beerAbv = document.createElement('h3')
  beerAbv.textContent = `${beer.abv}%`;
  beerAbv.classList.add('abv');
  beerTextDiv.appendChild(beerAbv);

  const beerDescription = document.createElement('h3')
  beerDescription.textContent = beer.description;
  beerDescription.classList.add('description');
  beerTextDiv.appendChild(beerDescription);

  const BeerFood = document.createElement('h3')
  BeerFood.textContent = `Eatings not cheating with: ${beer.food_pairing}`;
  BeerFood.classList.add('food');
  beerTextDiv.appendChild(BeerFood);

  beerDetail.appendChild(beerImageDiv);
  beerDetail.appendChild(beerTextDiv);
  return beerDetail;

};


module.exports = BeerDetailView;
