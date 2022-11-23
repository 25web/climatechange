var express = require("express");
var router = express.Router();
const jwt = require("../config/jwt");
const chartController = require("../controllers/chartController");

router.get("/v1", chartController.getV1monthly);
router.get("/v5", chartController.getV5);
module.exports = router;
