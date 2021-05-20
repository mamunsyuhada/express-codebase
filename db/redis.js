const RedisClient = require('redis').createClient;

const Config = require('../infra/globalconfig');

const RedisCon = RedisClient({
    port:Config.redis.port,
    host:Config.redis.host,
    password:Config.redis.pass
});

/** 
    get redis chache
    @param {string} redis_key
*/ 

const get = (redis_key) =>{
    const ctx = 'redis-get: '
    return new Promise((resolve) => {
        RedisCon.get(redis_key, (e, reply)=>{
          if(e) {
              console.error(ctx, e);
              resolve({e});
          }
          resolve({reply});
        })
    });
}


/** 
    set redis chache
    @param {string} redis_key
    @param {string} redis_value
*/ 

const set = (redis_key, redis_value) =>{
    RedisCon.set(redis_key, redis_value);
}

module.exports = { get, set };