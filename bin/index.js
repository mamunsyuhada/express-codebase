const Express = require('express');
const RespondTime = require('response-time');
const Compression = require('compression');

const Config = require('./infra/globalconfig');
const Db = require('./helper/db/index');
const Log = require('./helper/util/logger');
const SendResponse = require('./helper/util/sendrespond');

const AuthRouter = require('./router/auth');
const HealthCheck = require('./router/healthcheck');

const App = Express();

App.disable('x-powered-by');
App.use(Compression());
App.use(RespondTime());
App.use(Express.json());
App.use(Express.urlencoded({ extended: true }));


App.use('/auth', AuthRouter);
App.use('/healthcheck', HealthCheck);

App.use('/', async(_, res) => { return SendResponse.success.ok(res, { message:'Welcome to my codebase' }) });
App.use(async(_, res) => { return SendResponse.error.notFound(res, { message: 'unknown endpoint'}) });

const PORT = Config.app.port || 3030

App.listen(PORT, async() => {
    const ctx = 'index-appListen'
    
    Db.Mongoo.init();
    Log.info(ctx, `server is running on ${PORT}`);
});