const Db = require('./bin/helper/db/index');
const App = require('./bin/app');

Db.Mongoo.init();
App();