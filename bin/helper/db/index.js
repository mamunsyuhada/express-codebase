const Mongoo = require('./mongo/mongodb');

const HealthCheck = () => ({
	mongoodb: Mongoo.healthCheck(),
});

module.exports = {
	Mongoo,
	HealthCheck,
};
