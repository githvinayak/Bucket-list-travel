var express=require("express");
var app=express()
var fs=require("fs");
var bodyParser=require("body-parser");
var port=8000;
app.use(bodyParser.json());
app.get("/",function(req,res){
fs.readFile("./main.html","utf-8",function(err,data){
    if(err){
        console.log(err);
    }else{
        res.send(data);
    }
});
});
/*app.post("/postData",function(req,res){ 
  console.log(req.body)  })*/
  app.post("/postData",function(req,res){ 
    let data=JSON.stringify([req.body])  
  fs.appendFile("./data.txt",data,"utf-8",function(err,data){
    if(err){
      console.log(err);
    }
    else{
        res.send();
        }
      })
    }
  )
  app.listen(port,()=>{
      console.log("hello world\n"+ port);
  });
  /*fs.readFile("./data.txt","utf-8",function(err,data){
    if(err){
      console.log(err);
    }else if(data.filter(data==user)){
      res.send("User already exists.")
    }else{
      res.send("Successfully loged in.")
    }
  })*/
//app.use(express.json()); ssr-server side rendering,csr-server side rendering
