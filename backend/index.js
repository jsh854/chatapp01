const app = require("express")();
const http = require("http").createServer(app);
var io = require("socket.io")(http);
const PORT = process.env.PORT || 5000;
const router = require('./Router');
const {addUser,removeUser,getUser,getUsersInRoom} = require('./user')
//use router as a middle ware
app.use(router);

//when the user first connects to the io instance
// io.on("connection",(socket)=>{
//     socket.on("join",({name,room})=>{
//         console.log(`user ${name} has connected to the room ${room}`);
//         const {error,user} = addUser({id:socket.id,name,room});
//          if(error){
//              console.log('error here',error)
//          } 
// //if there is no error

//         socket.emit('message',{user:'admin',text:`welcome ${user.name}  to the chat room ${user.room}`})
//         socket.broadcast.to(user.room).emit('message',{user:"admin",text:`${user.name} has joined the chat`})
        
//         socket.join(user.room);


//     })
// socket.on('sendMessage',(message)=>{
//  const user = getUser(socket.id);
//  io.to(user.room).emit('message',{user:user.name,text:message});
// console.log(message)
// });



//     console.log("user is connected");
//     socket.on("disconnect",()=>{
//         console.log("user is disconnected");
//     })
// })
io.on("connection",(socket)=>{
    console.log("connection successful")
   
   socket.on("join",({name,room})=>{
       console.log('joined');
       console.log(name,room);
       socket.join(room);
    socket.emit("welcome message",`hello ${name} welcome to the chat ${room}`)
    socket.broadcast.to(room).emit("joined",`user ${name} has joined the chat`)

  socket.on("typing",msg=>{
      console.log(msg)
      socket.broadcast.to(room).emit("message",msg);
  });
socket.on('msg',msg=>{
    io.in(room).emit("msg",msg);
}
)
  socket.on("disconnect",()=>{
      console.log('user just left')
      io.to(room).emit("disconnect",`${name} has left the chat`);
  })
socket.on("stopTyping",msg=>{
    socket.broadcast.to(room).emit("stopped","user stopped typing");
})
});
})


http.listen(PORT,()=>{
    console.log("server started on 5000 port")
})