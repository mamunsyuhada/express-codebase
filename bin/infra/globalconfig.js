require('dotenv').config();

module.exports = {
	app: {
		port: Number(process.env.APP_PORT),
	},
	redis: {
		host: process.env.REDIS_HOST,
		port: Number(process.env.REDIS_PORT),
		pass: process.env.REDIS_PASS,
	},
	mongoo: {
		host: process.env.MONGO_HOST,
		user: process.env.MONGO_USER,
		password: process.env.MONGO_PASSWORD,
		db: process.env.MONGO_DBNAME,
	},
};
