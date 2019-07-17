'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.addColumn(
			'receipts',
			'image_url',
			Sequelize.STRING
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.removeColumn(
			'receipts',
			'image_url'
		);
	}
};
