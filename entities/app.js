require('custom-env').env()

const express    = require('express');
const bodyParser = require('body-parser');
const db         = require('./database');



const carRoutes     = require('./routes/car.routes');
const driverRoutes     = require('./routes/driver.routes');
const tripRoutes     = require('./routes/trip.routes');
const penaltyRoutes     = require('./routes/penalty.routes');


const hostname   = process.env.HOST;
const port       = process.env.PORT;

const app = express();
app.use(bodyParser.json({ limit: '50MB' }));

app.use('/', carRoutes);
app.use('/', driverRoutes);
app.use('/', tripRoutes);
app.use('/', penaltyRoutes);

db.init();


app.listen(port, hostname, () => 
{
    console.log(`Up and running!! - entities service - Server running at http://${hostname}:${port}/`);
});

