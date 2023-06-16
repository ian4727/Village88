var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static/"));

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.get('/awards', function(request, response){
  response.render('awards');
})

var users_arr = [
    {award:'Laging Laman ng Pantry Award', date:'01/01/2001', awarded_by:'Karen', qualifications:'Speed, Quantity, Quality'},
    {award:'May Sarili nang Cubicle sa CR Award', date:'01/02/2001', awarded_by:'Karen', qualifications:'Variety, Frequentness, Duration'},
    {award:'Hindi Kaya ng Flush lang Award', date:'01/03/2001', awarded_by:'Karen', qualifications:'Smell, Volume, Appearance'}      
]; 

app.get('/details1', function(request, response){
    response.render('details1', {users_arr: users_arr});
})

app.get('/details2', function(request, response){
    response.render('details2', {users_arr: users_arr});
})

app.get('/details3', function(request, response){
    response.render('details3', {users_arr: users_arr});
})




app.listen(8086, function() {
    console.log("listening on port 8086");
})