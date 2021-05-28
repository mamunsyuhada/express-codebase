const mongoose = require('mongoose');
const mongoohealthcheck = require('mongo-healthcheck');

const { mongoo } = require('../../../infra/globalconfig');
const Log = require('../../util/logger');

const init = async () => {
	const ctx = 'mongoodb-init';
	mongoose.connect(`mongodb+srv://${mongoo.user}:${mongoo.password}@${mongoo.host}`, {
		dbName: mongoo.db,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: true,
		useCreateIndex: true,
		authSource: 'admin',
	}).then(() => {
		Log.success(ctx, 'successfully connected');
	}).catch((err) => {
		Log.error(ctx, `Could not connect to the database. Exiting now... ${err}`);
	});

	mongoose.connection.on('connected', () => {
		Log.success(ctx, `connection connected, connected to the database (${mongoo.db})`);
	});

	mongoose.connection.on('error', (err) => {
		Log.error(ctx, `connection error, Could not connect to the database. Exiting now... ${err}`);
	});
};

const healthCheck = () => mongoohealthcheck(mongoose);

module.exports = { init, healthCheck };
