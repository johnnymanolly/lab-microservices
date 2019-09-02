const express = require('express');
const driver 	  = require('../controller/DriverController');

const router = express.Router();


router.post('/driver', driver.createDriver);
router.get('/driver/list', driver.listDrivers);
router.get('/driver/:driver_id', driver.getDriver);
router.put('/driver/:driver_id', driver.updateDriver);
router.delete('/driver/:driver_id', driver.deleteDriver);


module.exports = router;