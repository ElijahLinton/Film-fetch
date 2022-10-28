var resultTextEl = document.querySelector('#Searchbar');
var searchButton = document.getElementById('searchMovie')
var tasteDiveURL = 'https://api.watchmode.com/v1/autocomplete-search/?apiKey=9RuErWa5jOWO6YQFVTeRQJf8oFkOhacTsx2S5D1z&search_type=3';
 function fetchMovie(){
var userInput = resultTextEl.value

var url = tasteDiveURL + "&search_value=" + userInput
fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data.results)
  
  }
  
  )


}

$('#searchMovie').on('click',fetchMovie)