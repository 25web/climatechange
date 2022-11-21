var express = require("express");
var router = express.Router();
const jwt = require("../config/jwt");
const chartController = require("../controllers/chartController");

router.get("/v1", chartController.getV1);

router.get("/v3", chartController.getV3);
module.exports = router;
