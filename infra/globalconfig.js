require('dotenv').config();

module.exports = {
    app:{
        port: Number(process.env.APP_PORT)
    },
    redis:{
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        pass: process.env.REDIS_PASS,
    }
}