const express = require("express");
const path = require("path");

const app=express();

/*
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
*/

//this will load first react files and later it will load from server public folder
app.use(express.static(path.join(__dirname, "..", "build")));

//this will be able to fetch all public files
app.use(express.static("public"));

app.get("/getlist",(req,res)=>{
    let names=["vallabh","John","David"]
    res.json(names);
});

app.get("*",function(req,res){
    res.sendFile(path.join(__dirname, "..", 'build/index.html')) 
})

app.listen(5000);