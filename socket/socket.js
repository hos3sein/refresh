const io = require("../server").io;
const middleware = require("./middleware.js");

// middleware(io);



io.on("connection", (socket) => {
  console.log("client connected"+" " + socket.id);


  
   
  socket.on("disconnect", () => {
    console.log("user disconnected" + " " + socket.id);
  });
});
  
module.exports = io;
