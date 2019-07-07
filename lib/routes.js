"use strict";

const express = require("express");
const router = express.Router();
const HealthController = require("./modules/health/health-controller");

router.get("/health", HealthController.getHealth());

module.exports = router;