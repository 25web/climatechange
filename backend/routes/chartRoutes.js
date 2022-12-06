var express = require("express");
var router = express.Router();
const jwt = require("../config/jwt");
const chartController = require("../controllers/chartController");

router.get("/v1", chartController.getV1);
router.get("/v3", chartController.getV3);
router.get("/v4", chartController.getV4);
router.get("/v5", chartController.getV5);
router.get("/v6", chartController.getV6);
router.get("/v7", chartController.getV7);
router.get("/v8", chartController.getV8);

module.exports = router;
