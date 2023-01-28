const routes = require("express").Router();

routes.use("/api/user", require("../controller/UserController"));
routes.use("/api/userprofile", require("../controller/UserProfileController"));
routes.use("/api/post/message", require("../controller/MsgController"));
routes.use("/api/country", require("../controller/CountryCityController"));




//Admin
routes.use("/api/admin/login", require("../controller/Admin/LoginController"));
routes.use("/api/admin/profile", require("../controller/Admin/UserController"));
routes.use("/api/admin/profile/photo", require("../controller/Admin/ProfilePhoto/ProfilePhoto"));

module.exports = routes;
