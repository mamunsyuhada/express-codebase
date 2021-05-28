require('dotenv').config();

module.exports = {
	app: {
		port: Number(process.env.APP_PORT),
		bcrypt: Number(process.env.APP_BCRYPT),
		basicAuth: [
			{
				user: process.env.APP_BASICAUTH_USER, 
				pass: process.env.APP_BASICAUTH_PASSWORD
			}
		]
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
