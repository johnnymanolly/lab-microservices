const express    = require('express');
const rabbitMQ = require('./rabbitMQ');

rabbitMQ.init();

const app = express();

app.listen(4000, () => 
{
    console.log(`Up and running!! - heartbeats service`);
});
