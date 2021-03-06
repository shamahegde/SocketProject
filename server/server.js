const path=require('path');
const socketIO=require('socket.io');
const http=require('http');
const port=process.env.port||3000;
http.createServer();


const express=require('express');

const publicName=path.join(__dirname+'/../public');

var app=express();
app.use(express.static(publicName));

var server=http.createServer(app);

server.listen(port,()=>console.log(`Server running on ${port}`));

var io=socketIO(server);
io.on('connection',(socket)=>{
    console.log("client connected!");
    socket.emit('newMessage',{
        from:'shama@shama.com',
        text:'ohh life!',
        createdAt:123
    });
    socket.on('disconnect',()=>{
                console.log("user was disconnected ");
            });
    socket.on('createMessage',(message)=>
    {
        console.log(message);
    });
    socket.on('createEmail',(newEmail)=>{
        console.log("got email!!!");
    })
});