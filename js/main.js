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

$gstart.addEventListener('click', changeToArtPeriod);

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
  console.log($addIcons);
  $addIcons.forEach(addButton => {
    addButton.addEventListener('click', event => {
      if (addButton.className === 'add-icon') {
        addButton.className = 'remove-icon';
        addButton.setAttribute('src', 'images/minus-sign.svg');
        var selectedParent = addButton.parentElement;
        var selectedGrandParent = selectedParent.parentElement;
        /* data.likedImages.push(selectedGrandParent); */

      } else if (addButton.className === 'remove-icon') {
        addButton.className = 'add-icon';
        addButton.setAttribute('src', 'images/plus.svg');
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
});

$heartEmpty.addEventListener('click', function (event) {
  resetIcons();
  $heartEmpty.className = 'hidden';
  $heartFull.className = 'heart-filled';
  $artList.className = 'hidden';
});

$homePageEmpty.addEventListener('click', function (event) {
  resetIcons();
  $homePageEmpty.className = 'hidden';
  $homePageFull.className = 'home-page-filled';
  $artList.className = 'art-container-list';
});

/* var observer = new MutationObserver(addedPlusIcons);

function addedPlusIcons(event) {
  var $addIcons = document.querySelectorAll('.add-icon');
  console.log($addIcons);
} */
