const User = require('./Schema');
/**
    insert/create user
    @param {object} document
*/

const insert = async (document) => {
	const user = new User(document);
	return await user.save();
};

module.exports = { insert };
