let express = require("express");
let router = express.Router();
let generateToken = require("../config/generateToken");
let mongo = require("mongodb");
let Manoj = mongo.MongoClient;
let obj = require("../config/token");

let login = router.post("/", (req, res) => {
  Manoj.connect("mongodb://localhost:27017/sms", (err, db) => {
    if (err) throw err;
    else {
      db.collection("user_register")
        .find({ uname: req.body.uname } && { upwd: req.body.upwd })
        .toArray((err, array) => {
          if (err) throw err;
          else {
            if (array.length > 0) {
              let token = generateToken(
                {
                  uname: req.body.uname,
                  upwd: req.body.upwd,
                },
                "manoj@gmail.com"
              );
              obj.token = token;
              res.send({ login: "success", token: token });
            }
          }
        });
    }
  });
});

module.exports = login;
