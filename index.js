var express = require('express');
var env = require('dotenv').config()
var ejs = require('ejs');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
const port = process.env.port || 8080;
app.use(express.static("public"))
app.set("views","./views")
app.set("view engine", "ejs");

app.use('/css',express.static(path.join(__dirname, "public/css")));
app.use('/js',express.static(path.join(__dirname, "public/js")));
app.use('/images',express.static(path.join(__dirname, "public/images")));


mongoose.connect('mongodb://localhost:27017/LoginUser', {
useNewUrlParser: true,
useUnifiedTopology: true
}, (err) => {
if (!err) {
    console.log('MongoDB Connection Succeeded.');
} else {
    console.log('Error in DB connection : ' + err);
}
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
});

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get("/tour", (req, res) => {
    res.render("tour"); // tour refers to tour.ejs
});
app.get("/service", (req, res) => {
    res.render("service"); // service refers to service.ejs
});
app.get("/contactus", (req, res) => {
    res.render("contactus"); // index refers to contactus.ejs
});
app.get("/hotel", (req, res) => {
  res.render("hotel"); // index refers to contactus.ejs
});  

app.use(session({
    secret: 'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
    mongooseConnection: db
    })
}));


var server = require('./routes/server');
var forbooking = require('./routes/forbooking');
app.use("/", server,forbooking);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

// error handler
// define as the last app.use callback
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log('Server is listening on:'+PORT);
});
