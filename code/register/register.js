let express = require("express");
let router = express.Router();
let mongo = require("mongodb");
//const { token } = require("../config/token");
let Manoj = mongo.MongoClient;
let register = router.post("/", (req, res) => {
  console.log("postcall");
  Manoj.connect("mongodb://localhost:27017/sms", (err, db) => {
    if (err) throw err;
    else {
      db.collection("user_register")
        .count({ uname: req.body.uname })
        .then((count) => {
          if (count > 0) {
            console.log("User Alreay exist, Plz try with another User Name");
          } else {
            db.collection("user_register").insertOne(
              {
                ufirst: req.body.ufirst,
                ulast: req.body.ulast,
                uname: req.body.uname,
                upwd: req.body.upwd,
              },
              (err, response) => {
                if (err) throw err;
                else {
                  res.send({ register: "success" });
                }
              }
            );
          }
        });
    }
  });
});

module.exports = register;
