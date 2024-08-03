const path = require("path");
const express = require("express");
const socketio = require("socket.io");
// const { createAdapter } = require("@socket.io/redis-adapter");
// const { createClient } = require("redis");
const app = express();

const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const cors = require("cors");
const errorHandler = require("./middleware/error");
const connectDB = require("./config/db");

// Load env vars
// const conifgPath="./config/config.env"
const conifgPath="./config/configTest.env"

dotenv.config({
  path: conifgPath,
  // debug: true,
});

// Connect to database...
connectDB();

// Route files
const refresh = require("./routes");

// Body parser
app.use(express.json({ limit: "25mb" }));

// Cookie parser
app.use(cookieParser());
// app.use(checkLimitationSpot);

if (process.env.NODE_ENV === "production") {
  app.use(morgan("dev"));
}

// File uploading
app.use(
  fileUpload({
    createParentPath: true,
    abortOnLimit: true,
    fileSize: 90000000,
  })
);
// Sanitize data
app.use(mongoSanitize());
// Set security headers
app.use(helmet());
// Prevent XSS attacks
app.use(xss());
// Prevent http param pollution
app.use(hpp());
app.use(cors());
// Set static folder
var public = path.join(__dirname, "public");
app.use(express.static(public));

// Mount routers
app.use("/api/v1/refresh", refresh);
app.use(errorHandler);

const PORT = process.env.PORT || 8001;

const options = {
  cors: {
    origin: "*",
    methods: ["get", "post"],
}
};

const expressServer = app.listen(
  PORT,
  console.log(`Server running on port ${PORT}`.yellow.bold)
);



const io = socketio(expressServer,options)

// io.on("connection", (socket) => {
 
//   console.log("you are god of this stack");
  
//   socket.emit("ali", {
//     data: {
//       message: "welcome to the server",
//     },
//   });

//   socket.on("disconnect", () => {
//     console.log("user disconnected" + " " + socket.id + " " + socket.username);
//   });

// });
// const pubClient = createClient(6379);

// const subClient = pubClient.duplicate();
// io.adapter(createAdapter(pubClient, subClient));

// // io.listen(3000);

global.io = io;

// // Handle unhandled promise rejections
// process.on("unhandledRejection", (err, promise) => {
//   console.log(`Error: ${err.message}`.red);
//   // Close expressServer & exit process
//   // expressServer.close(() => process.exit(1));
// });

app.post("/", (req, res) => {
  console.log(
    "location seda shod",
    "-----------" + new Date(),
    "Y/M/D hⓂ️s" + "---------------"
  );
  res.send("Hello World!");
});

module.exports = {
  app,
  io,
};
