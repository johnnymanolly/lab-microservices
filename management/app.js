const express    = require('express');
const rabbitMQ = require('./rabbitMQ');

rabbitMQ.init();

const app = express();

app.listen(5000, () => 
{
    console.log(`Up and running!! - management service`);
});
