var userQuery = $("#searchbox").val();

var tasteDiveURL = 'https://tastedive.com/api/similar?q=';
var omdbUrl='http://www.omdbapi.com/?apikey=f217c7ff'

  tasteDiveURL = tasteDiveURL + userQuery +'type=movies'+ 'k=443649-RileyRah-2GRRJ49E';

tasteDiveURL = tasteDiveURL + '&q=' + query;
omdbUrl = omdbUrl + 't=' + userQuery; 

var combined = ''