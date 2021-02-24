/* exported data */
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
