let express = require("express");
var app = express();

const bodyparser = require("body-parser");
const cors = require("cors");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
var port = 8090;
app.listen(port, () => {
  console.log("port listening to:", port);
});
app.use("/register", require("./register/register"));
app.use("/login", require("./login/login"));
app.use("/logout", require("./logout/logout"));

let server = require("http").createServer(app);
let io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("disconnect", function () {
    io.emit("users-changed", { user: socket.username, event: "left" });
  });

  socket.on("set-name", (name) => {
    console.timeLog("SER NAME :", name);
    socket.username = name;
    io.emit("users-changed", { user: name, event: "joined" });
  });

  socket.on("send-message", (message) => {
    io.emit("message", {
      msg: message.text,
      user: socket.username,
      createdAt: new Date(),
    });
  });
});

var port = process.env.PORT || 3001;

server.listen(port, function () {
  console.log("listening in http://localhost:" + port);
});
