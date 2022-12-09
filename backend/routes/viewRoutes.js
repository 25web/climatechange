var express = require("express");
var router = express.Router();
const jwt = require("../config/jwt");
const viewController = require("../controllers/viewController");

router.get("/:url", viewController.getView);
router.get("/", viewController.getAllViews);
router.post("/create", jwt.verifyToken, viewController.newView);

module.exports = router;
