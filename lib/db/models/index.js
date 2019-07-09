'use strict';

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("../config/config.json")[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

const userModel = require("./user");
const receiptModel = require("./receipt");
const reportModel = require("./report");
const productModel = require("./product");

const models = {
    User: userModel.init(sequelize, Sequelize),
    Receipt: receiptModel.init(sequelize, Sequelize),
    Report: reportModel.init(sequelize, Sequelize),
    Product: productModel.init(sequelize, Sequelize)
};

// Run `.associate` if it exists to create relationships
Object.values(models)
    .filter(model => model.associate)
    .forEach(model => model.associate(models));

const db = {
    ...models,
    sequelize
};

module.exports = db;
