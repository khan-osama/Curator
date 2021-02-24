var $gstart = document.querySelector('#gstart');
var $body = document.querySelector('.start-page');
var $divPage1 = document.querySelector('.row');
var $divPage2 = document.querySelector('.page2-row');
var $divPage3 = document.querySelector('.page3');
var $divPage4 = document.querySelector('.page4');
var $centuryButtons = document.querySelectorAll('.century');
var $nextButton = document.querySelector('.next-button');
var $artButton = document.querySelector('#next');
var $backButton = document.querySelector('#previous');

$gstart.addEventListener('click', changePage);

function changePage(event) {
  $body.className = 'page2-bg';
  $divPage1.className = 'hidden row';
  $divPage2.className = 'page2-row';
  $divPage3.className = 'hidden';
  data.view = 'page2';
}

$centuryButtons.forEach(item => {
  item.addEventListener('click', event => {
    if (item.className === 'century') {
      item.className = 'century-onclick';
      $nextButton.className = 'next-button';
    } else {
      item.className = 'century';
      $nextButton.className = 'hidden';
    }
  });
});

if (data.view === 'page2') {
  $body.className = 'page2-bg';
  $divPage1.className = 'hidden row';
  $divPage2.className = 'page2-row';
}

$nextButton.addEventListener('click', changePage2);

function changePage2(event) {
  $body.className = 'app-bg';
  $gstart.className = 'hidden';
  $divPage2.className = 'hidden page2-row';
  $divPage3.className = 'page3';
  data.view = 'page3';
}

if (data.view === 'page3') {
  $body.className = 'app-bg';
  $gstart.className = 'hidden';
  $divPage2.className = 'hidden page2-row';
  $divPage3.className = 'page3';
}

$backButton.addEventListener('click', changePage);

$artButton.addEventListener('click', changePage3);

function changePage3(event) {
  $body.className = 'app-bg';
  $gstart.className = 'hidden';
  $divPage3.className = 'hidden page3';
  $divPage4.className = 'page4';
  data.view = 'page4';
}

if (data.view === 'page3') {
  $body.className = 'app-bg';
  $gstart.className = 'hidden';
  $divPage3.className = 'hidden page3';
  $divPage4.className = 'page4';
}
