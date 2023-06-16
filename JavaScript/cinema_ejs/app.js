var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static/"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/movies', function(request, response){
  response.render('movies');
})

app.get('/movies/new', function(request, response){
  response.render('new');
})

app.get('/theaters', function(request, response){
  response.render('theaters');
})

app.listen(8085, function() {
    console.log("listening on port 8085");
})