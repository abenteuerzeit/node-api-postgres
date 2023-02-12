const Router = require("express-promise-router");
const db = require("../db/queries");

const asyncRouter = new Router();

asyncRouter.get("/", db.getUsersAsync);
asyncRouter.get("/:id", db.getUserByIdAsync);
asyncRouter.post("/", db.createUserAsync);
asyncRouter.put("/:id", db.updateUserAsync);
asyncRouter.delete("/:id", db.deleteUserAsync);

module.exports = asyncRouter;
