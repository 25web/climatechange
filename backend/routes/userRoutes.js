var express = require("express");
var router = express.Router();
const jwt = require("../config/jwt");
const userController = require("../controllers/userController");

router.get("/", jwt.verifyToken, userController.getAllUsers);
router.post("/register", userController.register);
router.post("/login", userController.login);
router.delete("/", jwt.verifyToken, userController.deleteUser);
router.get("/auth", jwt.verifyToken, userController.checkToken);
router.get("/info", jwt.verifyToken, userController.userInfo);

module.exports = router;
