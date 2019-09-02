const express = require('express');
const car 	  = require('../controller/CarController');

const router = express.Router();


router.post('/car', car.createCar);
router.get('/car/list', car.listCars);
router.get('/car/:plate_no', car.getCar);
router.put('/car/:plate_no', car.updateCar);
router.delete('/car/:plate_no', car.deleteCar);
router.post('/car/assign', car.assignDriverToCar);
router.post('/car/unassign/:plate_no', car.assignDriverToCar);


module.exports = router;