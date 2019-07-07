"use strict";

const logging = require("log4js");

module.exports = {
    createLogger: (fileName) => {
        const logger =  logging.getLogger(fileName);
        logger.level = process.env.LOG_LEVEL || "info";

        return logger;
    }
};