var $gstart = document.querySelector('#gstart');
var $body = document.querySelector('.start-page');
var $divPage1 = document.querySelector('.row');
var $divPage2 = document.querySelector('.art-periods-row');
var $divPage3 = document.querySelector('.confirmation-page');
var $divPage4 = document.querySelector('.add-art-page');
var $centuryButtons = document.querySelectorAll('.century');
var $nextButton = document.querySelector('.next-button');
var $artButton = document.querySelector('#next');
var $backButton = document.querySelector('#previous');
var $artList = document.querySelector('.art-container-list');
var $artAddDivRow = document.querySelector('.art-adding-page-row');
var $artViewPage = document.querySelector('.view-art-page');
var $displayColumn = document.querySelector('.display-column');
var $savedArtList = document.querySelector('.saved-art-container-list');
var $savedArtAddDivRow = document.querySelector('.saved-art-adding-page-row');
var $savedArtViewPage = document.querySelector('.saved-art-page');
var $searchArtistPage = document.querySelector('.search-artist-page');
var $searchBar = document.querySelector('.search-bar');
var $noResults = document.querySelector('.no-results');
var $searchPageRow = document.querySelector('.searched-art-page-row');
var $searchPageList = document.querySelector('.searched-art-container-list');

$nextButton.addEventListener('click', fetchData);
$gstart.addEventListener('click', changeToArtPeriod);

// Create DOM tree
function createArtPieces(event) {

  var newDivColumnHalf = document.createElement('div');
  var newLi = document.createElement('li');
  var newArtImg = document.createElement('img');
  var newArtArtist = document.createElement('h2');
  var newArtTitleYear = document.createElement('p');
  var newItalics = document.createElement('i');
  var addArtIcon = document.createElement('img');
  var newArtDescription = document.createElement('p');

  newDivColumnHalf.className = 'column-half';
  newArtArtist.className = 'artist-name-header';
  newArtTitleYear.className = 'art-name-year';
  newArtDescription.className = 'art-description';

  newArtImg.setAttribute('id', event.objectNumber);
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
  newLi.appendChild(newArtDescription);

  var firstChild = newArtTitleYear.firstChild;
  newArtTitleYear.insertBefore(newItalics, firstChild);

  $artList.appendChild($artAddDivRow);
}

function createSavedArtPieces(event) {

  var newDivColumnHalf = document.createElement('div');
  var newLi = document.createElement('li');
  var newArtImg = document.createElement('img');
  var newArtArtist = document.createElement('h2');
  var newArtTitleYear = document.createElement('p');
  var newItalics = document.createElement('i');
  var addArtIcon = document.createElement('img');
  var newArtDescription = document.createElement('p');

  newDivColumnHalf.className = 'column-half';
  newArtArtist.className = 'artist-name-header';
  newArtTitleYear.className = 'art-name-year';
  newArtDescription.className = 'art-description';

  newArtImg.setAttribute('id', event.artId);
  newArtImg.setAttribute('src', event.imageURL);
  addArtIcon.setAttribute('src', 'images/minus-sign.svg');
  addArtIcon.className = 'remove-icon';

  newArtArtist.textContent = event.artistName;
  newItalics.textContent = event.artTitle;

  $savedArtAddDivRow.appendChild(newDivColumnHalf);
  newDivColumnHalf.appendChild(newLi);
  newArtArtist.appendChild(addArtIcon);
  newLi.appendChild(newArtImg);
  newLi.appendChild(newArtArtist);
  newLi.appendChild(newArtTitleYear);
  newLi.appendChild(newArtDescription);

  var firstChild = newArtTitleYear.firstChild;
  newArtTitleYear.insertBefore(newItalics, firstChild);

  return $savedArtAddDivRow;
}

function changeToArtPeriod(event) {
  $body.className = 'art-period-bg';
  $divPage1.className = 'hidden row';
  $divPage2.className = 'art-periods-row';
  $divPage3.className = 'hidden';
  data.view = 'art-periods-row';
}

$centuryButtons.forEach(item => {
  item.addEventListener('click', event => {
    if (item.className === 'century') {
      item.className = 'century-onclick';
      var centurySelectedData = document.querySelector('.century-onclick');
      data.centuryPicked = centurySelectedData.innerHTML;
      $nextButton.className = 'next-button';
    } else {
      item.className = 'century';
      $nextButton.className = 'hidden';
    }
  });
});
if (data.view === 'art-periods-row') {
  $body.className = 'art-period-bg';
  $divPage1.className = 'hidden row';
  $divPage2.className = 'art-periods-row';
}

$nextButton.addEventListener('click', changeToConfirmationPage);

function changeToConfirmationPage(event) {
  $body.className = 'app-bg';
  $gstart.className = 'hidden';
  $divPage2.className = 'hidden art-periods-row';
  $divPage3.className = 'confirmation-page';
  data.view = 'confirmation-page';
}

if (data.view === 'confirmation-page') {
  $body.className = 'app-bg';
  $gstart.className = 'hidden';
  $divPage2.className = 'hidden art-periods-row';
  $divPage3.className = 'confirmation-page';
}

$backButton.addEventListener('click', changeToArtPeriod);

$artButton.addEventListener('click', changeToAddArtPage);

function changeToAddArtPage(event) {
  $body.className = 'app-bg';
  $gstart.className = 'hidden';
  $divPage3.className = 'hidden confirmation-page';
  $divPage4.className = 'page4';
  data.view = 'add-art-page';
  var $addIcons = document.querySelectorAll('.add-icon');
  var $artPictures = document.querySelectorAll('li > img');
  $artPictures.forEach(function viewPage(event) {
    event.addEventListener('click', function hideList(click) {
      $artList.className = 'hidden';
      $artViewPage.className = 'view-art-page';
      var clonedNode = event.parentNode.cloneNode(true);
      clonedNode.setAttribute('id', 'viewedArt');
      $displayColumn.appendChild(clonedNode);
      artDetails(event.id);
    });
  });

  $addIcons.forEach(function likeDislike(addButton) {
    addButton.addEventListener('click', function changePlusIcon(event) {
      if (addButton.className === 'add-icon') {
        addButton.className = 'remove-icon';
        addButton.setAttribute('src', 'images/minus-sign.svg');
        var selectedParent = addButton.parentElement;

        var artistNameGrab = addButton.parentElement.textContent;
        var imageURLGrab = selectedParent.parentElement.firstChild.src;
        var artIdGrab = selectedParent.parentElement.firstChild.id;
        var artTitleGrab = selectedParent.parentElement.childNodes[2].textContent;

        var likedArtObject = {
          imageURL: imageURLGrab,
          artId: artIdGrab,
          artistName: artistNameGrab,
          artTitle: artTitleGrab
        };
        data.likedArt.unshift(likedArtObject);
      } else if (addButton.className === 'remove-icon') {
        addButton.className = 'add-icon';
        addButton.setAttribute('src', 'images/plus.svg');
        data.likedArt.shift();
      }
    });
  });
}

if (data.view === 'add-art-page') {
  $body.className = 'app-bg';
  $gstart.className = 'hidden';
  $divPage1.className = 'hidden';
  $divPage3.className = 'hidden confirmation-page';
  $divPage4.className = 'add-art-page';
}

// navigation pane
var $homePageEmpty = document.querySelector('.home-page-empty');
var $homePageFull = document.querySelector('.home-page-filled');
var $searchEmpty = document.querySelector('.search-empty');
var $searchFull = document.querySelector('.search-filled');
var $heartEmpty = document.querySelector('.heart-empty');
var $heartFull = document.querySelector('.heart-filled');

function resetIcons(reset) {
  $homePageFull.className = 'hidden';
  $searchFull.className = 'hidden';
  $heartFull.className = 'hidden';
  $homePageEmpty.className = 'home-page-empty';
  $searchEmpty.className = 'search-empty';
  $heartEmpty.className = 'heart-empty';
}

$searchEmpty.addEventListener('click', function (event) {
  resetIcons();
  $searchEmpty.className = 'hidden';
  $searchFull.className = 'search-filled';
  $artList.className = 'hidden';
  $artViewPage.className = 'hidden';
  $searchArtistPage.className = 'search-artist-page';
  var lastArtNode = document.getElementById('viewedArt');
  if (lastArtNode !== null) {
    lastArtNode.remove();
  }
  var savedArtNodes = document.querySelectorAll('div.saved-art-page > main > ul > div > div');
  var searchedArtNodes = document.querySelectorAll('div.search-artist-page > main > ul > div > div');
  if (savedArtNodes !== null) {
    savedArtNodes.forEach(function (nodes) {
      nodes.remove();
    });
  }
  if (searchedArtNodes !== null) {
    searchedArtNodes.forEach(function (nodes) {
      nodes.remove();
    });
  }
});

$heartEmpty.addEventListener('click', function (event) {
  resetIcons();
  $heartEmpty.className = 'hidden';
  $heartFull.className = 'heart-filled';
  $artList.className = 'hidden';
  $artViewPage.className = 'hidden';
  $savedArtViewPage.className = 'saved-art-page';
  $searchBar.className = 'search-bar';
  $searchArtistPage.className = 'hidden';

  var lastArtNode = document.getElementById('viewedArt');
  if (lastArtNode !== null) {
    lastArtNode.remove();
  }

  var savedArtNodes = document.querySelectorAll('div.saved-art-page > main > ul > div > div');
  var searchedArtNodes = document.querySelectorAll('div.search-artist-page > main > ul > div > div');

  if (savedArtNodes !== null) {
    savedArtNodes.forEach(function (nodes) {
      nodes.remove();
    });
  }
  if (searchedArtNodes !== null) {
    searchedArtNodes.forEach(function (nodes) {
      nodes.remove();
    });
  }
  for (var i = 0; i < data.likedArt.length; i++) {
    $savedArtList.appendChild(createSavedArtPieces(data.likedArt[i]));
  }

  var $removeIcons = document.querySelectorAll('.remove-icon');
  var $savedArtPictures = document.querySelectorAll('div.saved-art-page > main > ul > div > div > li > img');
  $savedArtPictures.forEach(function viewPage(event) {
    event.addEventListener('click', function hideList(click) {
      $artList.className = 'hidden';
      $savedArtViewPage.className = 'hidden';
      $artViewPage.className = 'view-art-page';
      var clonedNode = event.parentNode.cloneNode(true);
      clonedNode.setAttribute('id', 'viewedArt');
      $displayColumn.appendChild(clonedNode);
      artDetails(event.id);
    });
  });
  $removeIcons.forEach(function Dislike(removeButton) {
    removeButton.addEventListener('click', function changeMinusIcon(event) {
      if (removeButton.className === 'remove-icon') {
        removeButton.className = 'add-icon';
        removeButton.setAttribute('src', 'images/plus.svg');
      }
    });
  });
});

$homePageEmpty.addEventListener('click', function (event) {
  resetIcons();
  $homePageEmpty.className = 'hidden';
  $homePageFull.className = 'home-page-filled';
  $artList.className = 'art-container-list';
  $searchBar.className = 'search-bar';

  var lastArtNode = document.getElementById('viewedArt');
  if (lastArtNode !== null) {
    lastArtNode.remove();
  }
});

// Search page functionality
document.addEventListener('keyup', function (event) {
  if (event.code === 'Enter') {
    $searchBar.className = 'hidden';
    $noResults.className = 'hidden';
    var userInputSearch = $searchBar.value;
    artistSearchAPI(userInputSearch);
  }
});

// Data fetching
function artDetails(objectNum) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.rijksmuseum.nl/api/en/collection/' + objectNum + '?key=Rgcbm689');
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    var boldHeader = document.createElement('b');
    var descriptionSpan = document.createElement('span');

    var artDescription = xhr.response.artObject.plaqueDescriptionEnglish;
    var descriptionNode = document.querySelector('#viewedArt > p.art-description');

    boldHeader.textContent = 'Description: ';
    descriptionSpan.textContent = artDescription;

    descriptionNode.appendChild(boldHeader);
    descriptionNode.appendChild(descriptionSpan);
  });

  xhr.send();
}

function fetchData(data) {
  var xhr = new XMLHttpRequest();
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
    for (var i = 0; i < xhr.response.artObjects.length; i++) {
      createArtPieces(xhr.response.artObjects[i]);
    }
  });

  xhr.send();
}

window.addEventListener('DOMContentLoaded', function () {
  var xhr = new XMLHttpRequest();
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
    for (var i = 0; i < xhr.response.artObjects.length; i++) {
      createArtPieces(xhr.response.artObjects[i]);
    }
  });

  xhr.send();
});

function createSearchedArtPieces(event) {

  var newDivColumnHalf = document.createElement('div');
  var newLi = document.createElement('li');
  var newArtImg = document.createElement('img');
  var newArtArtist = document.createElement('h2');
  var newArtTitleYear = document.createElement('p');
  var newItalics = document.createElement('i');
  var addArtIcon = document.createElement('img');
  var newArtDescription = document.createElement('p');

  newDivColumnHalf.className = 'column-half';
  newArtArtist.className = 'artist-name-header';
  newArtTitleYear.className = 'art-name-year';
  newArtDescription.className = 'art-description';

  newArtImg.setAttribute('id', event.objectNumber);
  newArtImg.setAttribute('src', event.webImage.url);
  addArtIcon.setAttribute('src', 'images/plus.svg');
  addArtIcon.className = 'add-icon';

  newArtArtist.textContent = event.principalOrFirstMaker;
  newItalics.textContent = event.title;

  newArtArtist.textContent = event.principalOrFirstMaker;
  newItalics.textContent = event.title;
  var artYearString = event.longTitle.match(/\d/g);
  var artYearStringJoin = artYearString.join('');
  artYearStringJoin = artYearStringJoin.substring(0, 4);
  newArtTitleYear.textContent = ', ' + artYearStringJoin;

  $searchPageRow.appendChild(newDivColumnHalf);
  newDivColumnHalf.appendChild(newLi);
  newArtArtist.appendChild(addArtIcon);
  newLi.appendChild(newArtImg);
  newLi.appendChild(newArtArtist);
  newLi.appendChild(newArtTitleYear);
  newLi.appendChild(newArtDescription);

  var firstChild = newArtTitleYear.firstChild;
  newArtTitleYear.insertBefore(newItalics, firstChild);

  return $searchPageRow;
}

function artistSearchAPI(involedMaker) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.rijksmuseum.nl/api/nl/collection?key=Rgcbm689&ps=30&involvedMaker=' + involedMaker);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    for (var i = 0; i < xhr.response.artObjects.length; i++) {
      $searchPageList.appendChild(createSearchedArtPieces(xhr.response.artObjects[i]));
    }
    if (xhr.response.count === 0) {
      $noResults.className = 'no-results';
      $searchBar.className = 'search-bar';
    }
  });

  xhr.send();
}
