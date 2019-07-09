'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('receipts',
			{
				receipt_id: {
					type: Sequelize.INTEGER,
					primaryKey: true,
					autoIncrement: true,
					allowNull: false
				},
				user_id: {
					type: Sequelize.INTEGER,
					allowNull: false,
					references: {
						model: "users",
						key: "user_id",
						as: "user_id"
					}
				},
				comment: Sequelize.STRING
			}
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('receipts');
	}
};
