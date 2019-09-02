let TripModel = require('../models/TripModel');

class tripService 
{
    constructor() {}

    createTrip(req, res) 
    {
        return new Promise((resolve, reject) => 
        {

            let data = req.body;
            let trip = new TripModel(
            {
                plate_no: data.plate_no,
                model: data.model,
                color: data.color,
                updated_at: Date.now(),
                created_at: Date.now()
            });

            trip.save().then(doc => 
            {
                console.log("New trip created");
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when creating trip doc: " + err);
                reject(err);
            })
        });
    }

    listTrips() 
    {
        return new Promise((resolve, reject) => 
        {
            TripModel.find().then(trips => 
            {
                resolve(trips);
            })
            .catch(err => 
            {
                console.error("Error occurred when getting trip doc: " + err);
                reject(err);
            })
        });
    }

    getTrip(plate_no) 
    {
        return new Promise((resolve, reject) => 
        {
            TripModel.find({plate_no: plate_no}).then(doc => 
            {
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when getting trip doc: " + err);
                reject(err);
            })
        });
    }

    updateTrip(plate_no,data) 
    {
        return new Promise((resolve, reject) => 
        {
            data.updated_at = Date.now();
            TripModel.findOneAndUpdate({plate_no: plate_no}, data, { returnNewDocument: true }).then(doc => 
            {
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when updating trip doc: " + err);
                reject(err);
            })
        });
    }

    deleteTrip(plate_no) 
    {
        return new Promise((resolve, reject) => 
        {
            TripModel.findOneAndRemove({plate_no: plate_no}).then(doc => 
            {
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when deleting trip doc: " + err);
                reject(err);
            })
        });
    }

}






module.exports = new tripService;