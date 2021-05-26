const statuscode = {
	error: {
		BAD_REQUEST: 400,
		NOT_FOUND: 404,
		INTERNAL_ERROR: 500,
		CONFLICT: 409,
		EXPECTATION_FAILED: 417,
		FORBIDDEN: 403,
		UNAUTHORIZED: 401,
		SERVICE_UNAVAILABLE: 503,
		GATEWAY_TIMEOUT: 504,
		NOT_ACCEPTABLE: 406,
	},
	success: {
		OK: 200,
		CREATED: 201,
	},
};

const ok = async (res, obj) => {
	const { data, message } = obj;
	return res.status(statuscode.success.OK).json({
		err: false,
		data,
		message,
	});
};

const created = async (res, obj) => {
	const { data, message } = obj;
	return res.status(statuscode.success.CREATED).json({
		err: false,
		data,
		message,
	});
};

const badRequest = async (res, obj) => {
	const { data, message } = obj;
	return res.status(statuscode.error.BAD_REQUEST).json({
		err: true,
		data,
		message,
	});
};

const notFound = async (res, obj) => {
	const { data, message } = obj;
	return res.status(statuscode.error.NOT_FOUND).json({
		err: true,
		message,
		data,
	});
};

const internalError = async (res, obj) => {
	const { data, message } = obj;
	return res.status(statuscode.error.INTERNAL_ERROR).json({
		err: true,
		data,
		message,
	});
};

const conflict = async (res, obj) => {
	const { data, message } = obj;
	return res.status(statuscode.error.CONFLICT).json({
		err: true,
		data,
		message,
	});
};

module.exports = {
	success: {
		ok,
		created,
	},
	error: {
		badRequest,
		notFound,
		internalError,
		conflict,
	},
};
