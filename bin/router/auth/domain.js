const CommandUser = require('../../helper/db/mongo/User/Command');
const QueryUser = require('../../helper/db/mongo/User/Query');

const SendResponse = require('../../helper/util/sendrespond');

const Register = async(payload, res) => {
    const { email } = payload;
    const user = await QueryUser.findOne({ email });
    if(user){
        return SendResponse.error.conflict(res, {
            message: 'user already exist'
        });
    }
    const { _id } = await CommandUser.insert(payload);
    return SendResponse.success.created(res, {
        data:{ _id },
        message: 'congrats, created'
    });
}

module.exports = {
    Register
}