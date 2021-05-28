const { app } = require('../../infra/globalconfig');

const SendResponse = require('../../helper/util/sendrespond');

module.exports = (req, res, next) => {
	const auth = req.headers.authorization;
	if(auth===undefined){
		return SendResponse.error.badRequest(res, {
			message: 'Give me token'
		});
	}
	const decoded = Buffer.from(auth.split(' ')[1], 'base64').toString('ascii');
	const username = decoded.split(':')[0];
	const password = decoded.split(':')[1];

	if(!app.basicAuth.some(data => data.user===username && data.pass===password)){
		return SendResponse.error.forbidden(res, {
			message: 'Forbidden to access this endpoint, check your token'
		});
	}
	next();
};