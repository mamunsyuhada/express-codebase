const bcrypt = require('bcrypt');

const CommandUser = require('../../helper/db/mongo/User/Command');
const QueryUser = require('../../helper/db/mongo/User/Query');
const Config = require('../../infra/globalconfig');

const SendResponse = require('../../helper/util/sendrespond');

const Register = async (payload, res) => {
	const { email, username, password } = payload;
	const user = await QueryUser.findOne({ email, username });
	if (user) {
		return SendResponse.error.conflict(res, {
			message: 'user already exist',
		});
	}

	payload.password = await bcrypt.hash(password, Config.app.bcrypt);

	const { userId } = await CommandUser.insert(payload);

	return SendResponse.success.created(res, {
		data: { userId },
		message: 'congrats, created',
	});
};

module.exports = {
	Register,
};
