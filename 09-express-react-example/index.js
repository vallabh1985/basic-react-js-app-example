const express = require("express");
const path = require("path");

const app=express();

app.use(express.static(path.join(__dirname,'client/build')));

app.get("/",function(req,res){
   console.log("hiii");
   res.send("hello"); 
})

app.get("/list",(req,res)=>{
    let names=["vallabh","Srini","Kumar"]
    res.json(names);
})

app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,'client/build/index.html')) 
 })

app.listen(5000);