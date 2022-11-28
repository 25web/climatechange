var express = require("express");
var router = express.Router();
const jwt = require("../config/jwt");
const chartController = require("../controllers/chartController");

router.get("/v1", chartController.getV1monthly);
router.get("/v6", chartController.getV6);

module.exports = router;
