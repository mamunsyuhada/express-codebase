const Express = require('express');

const DummyData = require('../dummyData');
const Config = require('../infra/globalconfig');
const Redis = require('../db/redis');

const App = Express();

App.get('/fetch', async (_, res) => {
    const redis_key = 'fetch_1'
    const { reply } = await Redis.get(redis_key);
    
    if(reply){
        return res.json({
            success: true,
            message: 'success to get data from redis',
            data: JSON.parse(reply)
        });
    }

    const dataFromDb = {
        success: true,
        data: DummyData,
    };
    Redis.set(redis_key, JSON.stringify(dataFromDb));

    return res.json(200).send({
        success: true,
        message: 'success to get data from redis',
        data: DummyData
    });
});

const PORT = Config.app.port || 3030
App.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});