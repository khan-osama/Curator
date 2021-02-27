/* exported data */
var xhr = new XMLHttpRequest();
var $nextButton = document.querySelector('.next-button');

$nextButton.addEventListener('click', fetchData);

var xhrTwo = new XMLHttpRequest();

function artDetails(objectNum) {
  xhrTwo.open('GET', 'https://www.rijksmuseum.nl/api/en/collection/' + objectNum + '?key=Rgcbm689');
  xhrTwo.responseType = 'json';
  xhrTwo.addEventListener('load', function () {
    console.log(xhrTwo.status);
    console.log(xhrTwo.response);
  });

  xhrTwo.send();
}

var data = {
  view: 'home-page',
  centuryPicked: null,
  likedImages: []
};

var previousDataJSON = localStorage.getItem('view-data');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('view-data', dataJSON);
});

// Fetch API data on session and refresh

function createArtPieces(event) {

  var newDivColumnHalf = document.createElement('div');
  var newLi = document.createElement('li');
  var newArtImg = document.createElement('img');
  var newArtArtist = document.createElement('h2');
  var newArtTitleYear = document.createElement('p');
  var newItalics = document.createElement('i');
  var addArtIcon = document.createElement('img');

  newDivColumnHalf.className = 'column-half';
  newArtArtist.className = 'artist-name-header';
  newArtTitleYear.className = 'art-name-year';

  newArtImg.setAttribute('src', event.webImage.url);
  addArtIcon.setAttribute('src', 'images/plus.svg');
  addArtIcon.className = 'add-icon';

  newArtArtist.textContent = event.principalOrFirstMaker;
  newItalics.textContent = event.title;
  var artYearString = event.longTitle.match(/\d/g);
  var artYearStringJoin = artYearString.join('');
  artYearStringJoin = artYearStringJoin.substring(0, 4);
  newArtTitleYear.textContent = ', ' + artYearStringJoin;

  $artAddDivRow.appendChild(newDivColumnHalf);
  newDivColumnHalf.appendChild(newLi);
  newArtArtist.appendChild(addArtIcon);
  newLi.appendChild(newArtImg);
  newLi.appendChild(newArtArtist);
  newLi.appendChild(newArtTitleYear);

  var firstChild = newArtTitleYear.firstChild;
  newArtTitleYear.insertBefore(newItalics, firstChild);

  $artList.appendChild($artAddDivRow);
}

function fetchData(data) {
  var $selectedCentury = document.querySelector('.century-onclick');
  if ($selectedCentury.innerHTML === '16th century') {
    xhr.open('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Rgcbm689&f.dating.period=16&ps=100');
  }
  if ($selectedCentury.innerHTML === '17th century') {
    xhr.open('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Rgcbm689&f.dating.period=17&ps=100');
  }
  if ($selectedCentury.innerHTML === '18th century') {
    xhr.open('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Rgcbm689&f.dating.period=18&ps=100');
  }
  if ($selectedCentury.innerHTML === '19th century') {
    xhr.open('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Rgcbm689&f.dating.period=19&ps=100');
  }
  if ($selectedCentury.innerHTML === '20th century') {
    xhr.open('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Rgcbm689&f.dating.period=20&ps=100');
  }
  if ($selectedCentury.innerHTML === 'Contemporary') {
    xhr.open('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Rgcbm689&f.dating.period=21&ps=100');
  }
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  });

  xhr.send();
}

window.addEventListener('DOMContentLoaded', function () {
  if (data.centuryPicked === '16th century') {
    xhr.open('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Rgcbm689&f.dating.period=16&ps=100');
  }
  if (data.centuryPicked === '17th century') {
    xhr.open('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Rgcbm689&f.dating.period=17&ps=100');
  }
  if (data.centuryPicked === '18th century') {
    xhr.open('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Rgcbm689&f.dating.period=18&ps=100');
  }
  if (data.centuryPicked === '19th century') {
    xhr.open('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Rgcbm689&f.dating.period=19&ps=100');
  }
  if (data.centuryPicked === '20th century') {
    xhr.open('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Rgcbm689&f.dating.period=20&ps=100');
  }
  if (data.centuryPicked === 'Contemporary') {
    xhr.open('GET', 'https://www.rijksmuseum.nl/api/en/collection?key=Rgcbm689&f.dating.period=21&ps=100');
  }
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
    for (var i = 0; i < xhr.response.artObjects.length; i++) {
      createArtPieces(xhr.response.artObjects[i]);
    }
  });

  xhr.send();

});
