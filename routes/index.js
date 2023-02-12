// ./routes/index.js
const users = require("./users");
const usersAsync = require("./users-async");

module.exports = (app) => {
  app.use("/users", users);
  app.use("/users-async", usersAsync);
};
