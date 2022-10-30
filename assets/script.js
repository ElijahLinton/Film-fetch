var resultTextEl = document.querySelector('#Searchbar');
var searchButton = document.getElementById('searchMovie')
var tasteDiveURL = 'https://api.watchmode.com/v1/autocomplete-search/?apiKey=9RuErWa5jOWO6YQFVTeRQJf8oFkOhacTsx2S5D1z&search_type=3';
 function fetchMovie(){
var userInput = resultTextEl.value

var url = tasteDiveURL + "&search_value=" + userInput
fetch(url)
.then(response => response.json()) 
.then(data => {
  const list = data.results
  list.map((item)=>{
    const name = item.name;
    const movie = `<tr> <h2>${name}</h2> </tr>`
    document.querySelector('.turnedOn').innerHTML += movie
  }) 
})
if(fetchMovie){
  var Television = document.querySelector('.tvScreen')
  Television.classList.remove("tvScreen")
  Television.classList.add("turnedOn")
}

 }





$('#searchMovie').on('click',fetchMovie)
