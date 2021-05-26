const Schema = require('./schema');
const Domain = require('./domain');

const SendResponse = require('../../helper/util/sendrespond');

const Register = async (req, res) => {
	try {
		const valid = await Schema.RegisterSchema.validate(req.body);
		if (valid.error) {
			const message = valid.error.details[0].message.replace(/"/g, '');
			return SendResponse.error.badRequest(res, { message });
		}
		const payload = valid.value;
		const result = await Domain.Register(payload, res);
		return result;
	} catch (error) {
		const { message } = error;
		return SendResponse.error.internalError(res, { message });
	}
};

module.exports = {
	Register,
};
