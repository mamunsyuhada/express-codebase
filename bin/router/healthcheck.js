const Router = require('express').Router();

const Db = require('../helper/db/index');
const SendResponse = require('../helper/util/sendrespond');

Router.all('/', async (_, res) => {
	try {
		const data = {
			uptime: Math.round(process.uptime()),
			timestamp: Date(),
			dbHealth: Db.HealthCheck(),
		};
		return SendResponse.success.ok(res, {
			data,
			message: 'Success to get healthcheck',
		});
	} catch (error) {
		return SendResponse.error.internalError(res, error.message);
	}
});

module.exports = Router;
