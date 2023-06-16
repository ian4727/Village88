var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static( __dirname + "/static" ));
app.use(session({
    secret: 'user',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

/** MYSQL Connection **/
const Mysql         = require('mysql2');
var connection      = Mysql.createConnection({
    "host": "localhost",
    "user": "root",
    "password": "S@oirse1992",
    "database": "shop",
    "port": 3306
});
connection.connect(function(err) {
    if (err) throw err;
});

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

/** Basic Execute Query function **/
function executeQuery(query, callback) {
    connection.query(query, function (err, result) {
        if (err) {
            return callback(err, null);
        }
        callback(null, result);
    });	
}

app.get("/", function(req, res) {
    res.render("index");
});

app.post("/login", function(req,res) {
    let email = req.body['email'];
    let password = req.body['password'];

    let get_user_query = Mysql.format(`
        SELECT users.id, users.first_name, users.email, users.password
        FROM users
        WHERE users.email = ? AND users.password = ? LIMIT 1;`, [email, password]
    );  

    console.log("STEP 1");
    executeQuery(get_user_query, function(err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("STEP 2: ", result);
    console.log("STEP 3");
    }); 
    res.redirect('/');
});

app.listen(8002, function(){
    console.log("Listening on port: 8002");
});
