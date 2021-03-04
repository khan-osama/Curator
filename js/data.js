/* exported data */
var xhr = new XMLHttpRequest();
var $nextButton = document.querySelector('.next-button');

$nextButton.addEventListener('click', fetchData);

var xhrTwo = new XMLHttpRequest();

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
