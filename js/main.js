var $gstart = document.querySelector('#gstart');
var $body = document.querySelector('.start-page');
var $divPage1 = document.querySelector('.row');
var $divPage2 = document.querySelector('.page2-row');
var $divPage3 = document.querySelector('.page3');
var $centuryButtons = document.querySelectorAll('.century');
var $nextButton = document.querySelector('.next-button');

$gstart.addEventListener('click', changePage);

function changePage(event) {
  $body.className = 'page2-bg';
  $divPage1.className = 'hidden row';
  $divPage2.className = 'page2-row';
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
