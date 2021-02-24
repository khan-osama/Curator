var $gstart = document.querySelector('#gstart');
var $body = document.querySelector('.start-page');
var $divPage1 = document.querySelector('.row');
var $divPage2 = document.querySelector('.page2-row');
var $centuryButtons = document.querySelectorAll('.century');

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
    } else {
      item.className = 'century';
    }
  });
});

if (data.view === 'page2') {
  $body.className = 'page2-bg';
  $divPage1.className = 'hidden row';
  $divPage2.className = 'page2-row';
}
