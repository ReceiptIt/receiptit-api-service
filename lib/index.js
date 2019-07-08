"use strict";

const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const db = require("./models");

const Logger = require("./plugins/logger");
const logger = Logger.createLogger(__filename);

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors());
app.use(routes);

db.sequelize.sync()
    .then(() => {
        logger.info("Database is initialized successfully.")
        app.listen(port, () => {
            logger.info(`Receipt api service running on port ${port} ...`);
        });
    })
    .catch(err => {
        logger.fatal(`Failed to initialize database. Error message: ${err.message} , stack: ${err.stack}. \n Exiting now!`);
        process.exit(1);
    });