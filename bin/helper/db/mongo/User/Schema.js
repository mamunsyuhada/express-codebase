const mongoose = require('mongoose');
const { nanoid } = require('nanoid');

const UserSchema = mongoose.Schema({
	_id: {
		type: String,
		default: `user-${nanoid(50)}`,
		require: true,
	},
	email: {
		type: String,
		required: true,
	},
	fullname: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		required: true,
	},
}, {
	versionKey: false,
	timestamps: true,
});

module.exports = mongoose.model('users', UserSchema);
