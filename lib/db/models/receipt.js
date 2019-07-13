'use strict';

const Sequelize = require("sequelize");

class Receipt extends Sequelize.Model {
    static init(sequelize, DataTypes) {
        return super.init(
            {
                receipt_id: {
                    type: DataTypes.INTEGER,
                    primaryKey: true,
                    autoIncrement: true,
                    allowNull: false
                },
                user_id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: sequelize.model.User,
                        key: "user_id",
                        as: "user_id"
                    }
                },
                comment: DataTypes.STRING
            },
            {
                modelName: "receipt",
                sequelize
            }
        );
    };


    static associate(models) {
        this.hasMany(models.Product, {
            foreignKey: "receipt_id",
            sourceKey: "receipt_id"
        });
        
        this.belongsTo(models.User, {
            foreignKey: "user_id",
            targetKey: "user_id"
        });
    };
};

module.exports = Receipt;