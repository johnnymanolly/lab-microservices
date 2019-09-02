let CarModel = require('../models/CarModel');
let mongoose = require('mongoose');
const rabbitMQ = require('../rabbitMQ');

class carService 
{
    constructor() {}

    createCar(req, res) 
    {
        return new Promise((resolve, reject) => 
        {

            let data = req.body;
            let car = new CarModel(
            {
                plate_no: data.plate_no,
                model: data.model,
                color: data.color,
                updated_at: Date.now(),
                created_at: Date.now()
            });

            car.save().then(doc => 
            {
                console.log("New car created");
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when creating car doc: " + err);
                reject(err);
            })
        });
    }

    listCars() 
    {
        return new Promise((resolve, reject) => 
        {
            CarModel.find().then(cars => 
            {
                resolve(cars);
            })
            .catch(err => 
            {
                console.error("Error occurred when getting car doc: " + err);
                reject(err);
            })
        });
    }

    getCar(plate_no) 
    {
        return new Promise((resolve, reject) => 
        {
            CarModel.find({plate_no: plate_no}).then(doc => 
            {
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when getting car doc: " + err);
                reject(err);
            })
        });
    }

    updateCar(plate_no,data) 
    {
        return new Promise((resolve, reject) => 
        {
            data.updated_at = Date.now();
            CarModel.findOneAndUpdate({plate_no: plate_no}, data, { returnNewDocument: true }).then(doc => 
            {
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when updating car doc: " + err);
                reject(err);
            })
        });
    }

    deleteCar(plate_no) 
    {
        return new Promise((resolve, reject) => 
        {
            CarModel.findOneAndRemove({plate_no: plate_no}).then(doc => 
            {
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when deleting car doc: " + err);
                reject(err);
            })
        });
    }

    assignDriverToCar(data)
    {
        return new Promise((resolve, reject) =>
        {
            //check if driver already assigned
            CarModel.find({plate_no: data.plate_no}).then(doc =>
            {
                console.log(doc);
                if(!doc.driver && doc.driver != data.driver_id)
                {
                    var updateObj = {
                        updated_at: Date.now(),
                        driver:  mongoose.Types.ObjectId(data.driver_id)
                    }

                    CarModel.findOneAndUpdate({plate_no: data.plate_no, updateObj}).then(doc =>
                    {
                        console.log("driver assigned");
                        var assigment = {
                            car: mongoose.Types.ObjectId(data.plate_no),
                            driver: mongoose.Types.ObjectId(data.driver_id)
                        }
                        rabbitMQ.publish("assigment", JSON.stringify(assigment));
                        resolve(doc);
                    })
                    .catch(err =>
                    {
                        console.error("Error occurred when updating car doc: " + err);
                        reject(err);
                    })
                }
            })
            .catch(err =>
            {
                console.error("Error occurred when getting car doc: " + err);
                reject(err);
            })


        });
    }

    unassignDriverToCar(plate_no)
    {
        return new Promise((resolve, reject) =>
        {
            //check if driver already assigned
            CarModel.find({plate_no: data.plate_no}).then(doc =>
            {

                var updateObj = {
                    updated_at: Date.now(),
                    driver:  null
                }

                CarModel.findOneAndUpdate({plate_no: data.plate_no, updateObj}).then(doc =>
                {
                    console.log("driver unassigned");
                    resolve(doc);
                })
                .catch(err =>
                {
                    console.error("Error occurred when updating car doc: " + err);
                    reject(err);
                })

            })
            .catch(err =>
            {
                console.error("Error occurred when getting car doc: " + err);
                reject(err);
            })


        });
    }

}






module.exports = new carService;