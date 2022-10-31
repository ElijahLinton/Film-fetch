var resultTextEl = document.querySelector('#Searchbar');
var searchButton = document.getElementById('searchMovie')
var tasteDiveURL = 'https://api.watchmode.com/v1/autocomplete-search/?apiKey=9RuErWa5jOWO6YQFVTeRQJf8oFkOhacTsx2S5D1z&search_type=3';


searchButton.addEventListener('click',function fetchMovie(){
var userInput = resultTextEl.value

var url = tasteDiveURL + "&search_value=" + userInput
fetch(url)
.then(response => response.json()) 
.then(data => {
  const list = data.results
  list.map((item)=>{
    const name = item.name;
    const poster = item.image_url
    const date = item.year
    const popular = item.relevance
    const movie = `<tr> <img src="${poster}"> <h2>${name}</h2> <p>release date: ${date}</p> <p> relevance:${popular}</p></tr>`
    document.querySelector('.turnedOn').innerHTML += movie
  }) 
})
if(userInput === ""){
  alert("invalid: please make sure to type a movie.")
    location.reload();
} 
if(fetchMovie){
  var Television = document.querySelector('.tvScreen')
  Television.classList.remove("tvScreen")
  Television.classList.add("turnedOn")
}


 },{once:true})

