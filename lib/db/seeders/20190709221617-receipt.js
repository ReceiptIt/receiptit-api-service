'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('receipts', [
			{
				receipt_id: 1,
				user_id: 1,
				comment: "test1",
			},
			{
				receipt_id: 2,
				user_id: 2,
				comment: "test2",
			}
		], {});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('receipts', null, {});
	}
};
