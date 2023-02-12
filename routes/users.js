const Router = require("express-promise-router");
const db = require("../db/queries");

const usersRouter = new Router();

usersRouter.get("/", db.getUsers);
usersRouter.get("/:id", db.getUserById);
usersRouter.post("/", db.createUser);
usersRouter.put("/:id", db.updateUser);
usersRouter.delete("/:id", db.deleteUser);

module.exports = usersRouter;
