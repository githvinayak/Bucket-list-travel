const express = require('express')
const app = express()
const fs = require("fs");
const port = 8000;
var ejs = require('ejs');
const path = require("path");
app.use(express.static("public"))
app.use('/css',express.static(path.join(__dirname, "public/css")));
app.use('/js',express.static(path.join(__dirname, "public/js")));
app.use('/images',express.static(path.join(__dirname, "public/images")));
app.set("views","./views")
app.set("view engine", "ejs");
app.get("/service", (req, res) => {
    res.render("service"); // service refers to service.ejs
   }); 
app.get("/", (req, res) => {
    res.render("index"); // service refers to service.ejs
   }); 
app.get("/login", (req, res) => {
    res.render("login"); // login refers to login.ejs
   });
app.get("/signup", (req, res) => {
    res.render("signup"); // signup refers to signup.ejs
   });
app.get("/contactus", (req, res) => {
    res.render("contactus"); // index refers to contactus.ejs
   });        
app.listen(port,()=>{
    console.info("hello world\n"+ port);
});   
