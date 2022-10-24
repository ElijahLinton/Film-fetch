var resultTextEl = document.querySelector('#searchbox');

var tasteDiveURL = 'https://tastedive.com/api/similar?q=';

if (format) {
  tasteDiveURL = 'https://tastedive.com/api/similar' + format +'type=movies'+ 'k=443649-RileyRah-2GRRJ49E';
}

tasteDiveURL = tasteDiveURL + '&q=' + query;

fetch(tasteDiveURL)
  .then(function (response) {
    if (!response.ok) {
      throw response.json();
    }

    return response.json();
  })
  .then(function (locRes) {
    // write query to page so user knows what they are viewing
    resultTextEl.textContent = locRes.search.query;

    console.log(locRes);

    if (!locRes.results.length) {
      console.log('No results found!');
      resultContentEl.innerHTML = '<h3>No results found, search again!</h3>';
    } else {
      resultContentEl.textContent = '';
      for (var i = 0; i < locRes.results.length; i++) {
        printResults(locRes.results[i]);
      }
    }
  })
  .catch(function (error) {
    console.error(error);
  });
