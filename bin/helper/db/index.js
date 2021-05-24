const Mongoo = require('./mongo/mongodb');

const HealthCheck = () => {
    return {
        mongoodb: Mongoo.healthCheck()
    }
}

module.exports = { 
    Mongoo,
    HealthCheck
}