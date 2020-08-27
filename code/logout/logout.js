let obj = require("../config/token");
let auth = require("../config/auth");
let logout = require("express")
  .Router()
  .get("/", [auth], (req, res) => {
    obj.token = "";
    res.send({ logout: "success" });
  });
module.exports = logout;
