const express = require('express');
const trip  = require('../controller/TripController');

const router = express.Router();


router.post('/trip', trip.createTrip);
router.get('/trip/list', trip.listTrips);
router.get('/trip/:id', trip.getTrip);
router.put('/trip/:id', trip.updateTrip);
router.delete('/trip/:id', trip.deleteTrip);


module.exports = router;