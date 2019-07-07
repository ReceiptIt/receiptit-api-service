"use strict";

const constants = require("../../constants");

class HealthController {
  static getHealth() {
    return (req, res) => {
        const response = {
          healthChecks: "OK"
        };

        res.status(constants.httpCodes.Success).send(response);
    };
  }
}

module.exports = HealthController;