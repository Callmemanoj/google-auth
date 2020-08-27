let jwt = require("jwt-simple");

let generateToke = (data, password) => {
  return jwt.encode(data, password);
};
module.exports = generateToke;
