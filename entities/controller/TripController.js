let tripService = require('../services/TripService');

class TripController 
{
    constructor() {}

    createTrip(req, res)
    {
        tripService.createTrip(req).then(response => 
        {
            return res.status(200).json({status: "success"});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    listTrips(req, res)
    {
        tripService.listTrips(req).then(trips => 
        {
            return res.status(200).json({status: "success", data: trips});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    getTrip(req, res) 
    {
        tripService.getTrip(req.params.plate_no).then(trip => 
        {
            return res.status(200).json({status: "success", data: trip});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    updateTrip(req,res) 
    {
        tripService.updateTrip(req.params.plate_no, req.body).then(response => 
        {
            return res.status(200).json({status: "success"});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    deleteTrip(req,res) 
    {
        tripService.deleteTrip(req.params.plate_no).then(response => 
        {
            return res.status(200).json({status: "success"});
        })
        .catch(err =>
        {
            throw err;
        })
    }

}

module.exports = new TripController;