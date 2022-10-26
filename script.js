var userQuery = $("#searchbox").val();
var searchBtn = $('#searchMovie');


//set urls and  keys 
var tasteDiveURL = "https://tastedive.com/api/similar?q=";
var omdbUrl = "http://www.omdbapi.com/?apikey=f217c7ff";

tasteDiveURL = tasteDiveURL + userQuery + "&type=movies" + "&k=443649-RileyRah-2GRRJ49E"+'&verbose=1&yUrl=0&yid=0';
omdbUrl = omdbUrl + "t=" + userQuery;

var combined = tasteDiveURL + omdbUrl;

fetch(combined, { mode: "cors" }).then(function (response) {
  // Check the console first to see the response.status
  console.log(combined.status);

  // get data
  combined.json().then(function (data) {
    displayData(data);
  });
});


//pull data from the sites 
function displayData(data) {
  console.log(data.results);
  for (i = 0; i < data.results.length; i++) {
    console.log(data.results[i].title);
  }
  
//append the results to the screen


  var tvScreen = $("#tvScreen");
  tvScreen.append(
    displayData
  );
}

function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector('#search-input').value;
  var formatInputVal = document.querySelector('#format-input').value;

  if (!searchInputVal) {
    console.error('You need a search input value!');
    return;
  }

  var queryString = './search-results.html?q=' + searchInputVal + '&format=' + formatInputVal;

  location.assign(queryString);
}

searchFormEl.addEventListener('submit', handleSearchFormSubmit);


