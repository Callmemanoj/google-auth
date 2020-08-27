let obj = require("./token");

let auth = (req, res, next) => {
  let allHeaders = req.headers;
  let a_token = allHeaders.token;
  if (a_token == obj.token) {
    next();
  } else {
    res.send({ message: "unauthorized user" });
  }
};
module.exports = auth;
