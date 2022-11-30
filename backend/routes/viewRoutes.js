var express = require("express");
var router = express.Router();
const jwt = require("../config/jwt");
const viewController = require("../controllers/viewController");

router.get("/:url", viewController.getView);
router.post("/create", jwt.verifyToken, viewController.newView);

module.exports = router;
