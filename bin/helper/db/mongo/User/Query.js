const User = require('./Schema');
/** 
    findOne user
    @param {object} condition
*/
const findOne = async (condition) => {
    return await User.findOne(condition);
};

module.exports = { findOne }