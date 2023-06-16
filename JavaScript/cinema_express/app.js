var express = require("express");
console.log("Let's find out what express is", express);

var app = express();
console.log("Let's find out what app is", app);

app.use(express.static(__dirname + "/static/"));

app.listen(7000, function() {
    console.log("listening on port 7000");
  })