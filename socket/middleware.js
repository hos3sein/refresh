const jwt = require("jsonwebtoken");

const middleware = (io) => {
  
  io.use((socket, next) => {

    console.log("socket", socket);

    // .handshake.auth
    // const token = socket.handshake.headers.token.split(" 44")[1];
    const token = socket.handshake.auth.token.split(" ")[1];
    console.log("token", token);

    // console.log("tokentoken", token);
    // console.log("tokentoken222", token2);
    // console.log("tokentoken", socket.handshake.headers);
    // const username = socket.handshake.headers.username;
    // const email = socket.handshake.headers.email;
    // const phone = socket.handshake.headers.phone;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded", decoded);

    if (!token) {
      // if (!username || !token || !email || !phone) {
      console.log("invalid username or token or email or phone");
      return next(new Error("invalid username or token or email or phone"));
    }

    if (decoded) {
      console.log("decoded success");
      // socket.socketId = socket.id;
      // socket.socketIdDb = decoded.id; // TODO felan nemidonam javab mide
      // socket.username = username;
      // socket.email = email;
      // socket.phone = phone;
      // socket.userId = decoded.id;
      socket.id = decoded._id;

      // add(socket);
      next();
    }
  });
};

module.exports = middleware;
