const Express = require('express');
const DummyData = require('./dummyData');
const PORT = 2020;

const App = Express();
App.get('/fetch', (_, res) => {
    console.log('Success fetch from databse');
    res.status(200).send({
        success: true,
        message: 'success fetch data',
        data: DummyData
    });
});

App.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});