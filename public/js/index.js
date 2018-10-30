
            var socket=io();
            socket.on('connect',()=>{
                console.log("connected to server");
            socket.emit('createEmail',{
                to:'andrew.com',
                text:'heyi andiiii'
            });
            });
            socket.on('disconnect',()=>{
                console.log("disconnected ");
            });
            socket.on('newEmail',function(email){
                console.log("new email!",email);
            });
            
