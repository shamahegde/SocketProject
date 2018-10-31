
            var socket=io();
            socket.on('connect',()=>{
                console.log("connected to server");
            socket.emit('createMessage',{
                from:'andrew.com',
                text:'heyi andiiii'
            });
            });
            socket.on('disconnect',()=>{
                console.log("disconnected ");
            });
            socket.on('newMessage',function(message){
                console.log("new message!",message);
            });
            
