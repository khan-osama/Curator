/* exported data */
var xhr = new XMLHttpRequest();
var $nextButton = document.querySelector('.next-button');

$nextButton.addEventListener('click', function () {
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
});

var xhrTwo = new XMLHttpRequest();

function artDetails(objectNum) {
  xhrTwo.open('GET', 'https://www.rijksmuseum.nl/api/en/collection/' + objectNum + '?key=Rgcbm689');
  xhrTwo.responseType = 'json';
  xhrTwo.addEventListener('load', function () {
    console.log(xhrTwo.status);
    console.log(xhrTwo.response);
    /* for (var i = 0; i < xhrTwo.response.length; i++) {
      var newLi = document.createElement('li');
      newLi.textContent = xhrTwo.response[i].name;
      $usersList.appendChild(newLi);
    } */
  });

  xhrTwo.send();
}

var data = {
  view: 'home-page'
};

var previousDataJSON = localStorage.getItem('view-data');
if (previousDataJSON !== null) {
  data = JSON.parse(previousDataJSON);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('view-data', dataJSON);
});

/* Artist name from data */
/* artObjects[0].principalOrFirstMaker */

/* Art title from data
artObjects[0].title */

/* Art image from data
artObjects[0].webImage.url */
