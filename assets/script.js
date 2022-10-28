var resultTextEl = document.querySelector('#searchbox');
var searchButton = document.getElementById('searchMovie')
var tasteDiveURL = 'https://api.watchmode.com/v1/autocomplete-search/?apiKey=9RuErWa5jOWO6YQFVTeRQJf8oFkOhacTsx2S5D1z&search_value=The%20Avengers&search_type=3';
 function fetchMovie(){

fetch(tasteDiveURL)
  .then(response => response.json())
  .then(data => console.log(data))
}

