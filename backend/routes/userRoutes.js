var express = require("express");
var router = express.Router();
const jwt = require("../config/jwt");
const userController = require("../controllers/userController");

router.get('/', jwt.verifyToken, userController.getAllUsers);
router.post('/register', userController.register);

module.exports = router;
