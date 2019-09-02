let DriverModel = require('../models/DriverModel');

class driverService 
{
    constructor() {}

    createDriver(req, res) 
    {
        return new Promise((resolve, reject) => 
        {

            let data = req.body;
            let driver = new DriverModel(
            {
                driver_id: data.driver_id,
                name: data.name,
                surname: data.surname,
                updated_at: Date.now(),
                created_at: Date.now()
            });

            driver.save().then(doc => 
            {
                console.log("New driver created");
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when creating driver doc: " + err);
                reject(err);
            })
        });
    }

    listDrivers() 
    {
        return new Promise((resolve, reject) => 
        {
            DriverModel.find().then(drivers => 
            {
                resolve(drivers);
            })
            .catch(err => 
            {
                console.error("Error occurred when getting driver doc: " + err);
                reject(err);
            })
        });
    }

    getDriver(plate_no) 
    {
        return new Promise((resolve, reject) => 
        {
            DriverModel.find({plate_no: plate_no}).then(doc => 
            {
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when getting driver doc: " + err);
                reject(err);
            })
        });
    }

    updateDriver(driver_id,data)
    {
        return new Promise((resolve, reject) => 
        {
            data.updated_at = Date.now();
            DriverModel.findOneAndUpdate({driver_id: driver_id}, data, { returnNewDocument: true }).then(doc =>
            {
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when updating driver doc: " + err);
                reject(err);
            })
        });
    }

    deleteDriver(driver_id)
    {
        return new Promise((resolve, reject) => 
        {
            DriverModel.findOneAndRemove({driver_id: driver_id}).then(doc =>
            {
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when deleting driver doc: " + err);
                reject(err);
            })
        });
    }

}






module.exports = new driverService;