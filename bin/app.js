const Express = require('express');
const RespondTime = require('response-time');
const Compression = require('compression');

const Config = require('./infra/globalconfig');

const Log = require('./helper/util/logger');
const SendResponse = require('./helper/util/sendrespond');

const AuthRouter = require('./router/auth');
const HealthCheck = require('./router/healthcheck');

const Project = require('../package.json');

module.exports = () => {
	const App = Express();
	
	App.disable('x-powered-by');
	App.use(Compression());
	App.use(RespondTime());
	App.use(Express.json());
	App.use(Express.urlencoded({ extended: true }));

	App.use('/auth', AuthRouter);
	App.use('/healthcheck', HealthCheck);

	App.use(async(_, res) => SendResponse.error.notFound(res, { message: 'unknown endpoint' }));

	const PORT = Config.app.port || 3030;

	App.listen(PORT, async () => {
		Log.info(`${Project.name} v${Project.version}`,`server is running on ${PORT}`);
	});
};
