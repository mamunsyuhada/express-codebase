const Express = require('express');
const RespondTime = require('response-time');

const DummiesData = require('../dummiesData');
const Config = require('../infra/globalconfig');
const Redis = require('../db/redis');

const App = Express();
App.use(RespondTime());


App.get('/', async (_, res) => {
    return res.json({
        error: null,
        data: DummiesData,
        message: 'Success to get data from dummies'
    }); 
});

App.get('/fetch', async (req, res) => {
    const { id } = req.query

    const { reply } = await Redis.get(id);
    if(reply){
        return res.json({
            error: null,
            data: JSON.parse(reply),
            message: 'success to get data from redis',
        });
    }

    const findOneById = (datas, index) =>{
        for(item of datas){
            if(item.id===index){
                return item
            }
        }
        return null
    }
    const data = findOneById(DummiesData, parseInt(id));
    if(data===null){
        return res.status(404).json({
            error: 'unknown id',
            data,
            message: 'Sorry your id request is not found'
        });
    }
    
    Redis.set(id, JSON.stringify(data));

    return res.json({
        error: null,
        data,
        message: 'success to get data from dummies',
    });
});

App.get('/fetch-expired', async (req, res) => {
    const { id } = req.query

    const { reply } = await Redis.get(id);
    if(reply){
        return res.json({
            error: null,
            data: JSON.parse(reply),
            message: 'success to get data from redis with expired',
        });
    }

    const findOneById = (datas, index) =>{
        for(item of datas){
            if(item.id===index){
                return item
            }
        }
        return null
    }
    const data = findOneById(DummiesData, parseInt(id));
    if(data===null){
        return res.status(404).json({
            error: 'unknown id',
            data,
            message: 'Sorry your id request is not found'
        });
    }
    
    Redis.setEx(id,JSON.stringify(data), 30);

    return res.json({
        error: null,
        data,
        message: 'success to get data from dummies, and your request was store at RAM with expired',
    });
});

const PORT = Config.app.port || 3030

App.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});