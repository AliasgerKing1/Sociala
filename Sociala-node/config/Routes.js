const routes = require("express").Router();

routes.use("/api/user", require("../controller/UserController"));
routes.use("/api/userprofile", require("../controller/UserProfileController"));
routes.use("/api/post/message", require("../controller/MsgController"));

module.exports = routes;
