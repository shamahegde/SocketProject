const path=require('path');

const port=process.env.port||3000;
http.createServer();


const express=require('express');

const publicName=path.join(__dirname+'/../public');

var app=express();
app.use(express.static(publicName));

app.listen(port,()=>console.log("Server is running on 3000"));