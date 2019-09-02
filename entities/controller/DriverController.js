let driverService = require('../services/DriverService');

class DriverController 
{
    constructor() {}

    createDriver(req, res)
    {
        driverService.createDriver(req).then(response => 
        {
            return res.status(200).json({status: "success"});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    listDrivers(req, res)
    {
        driverService.listDrivers(req).then(drivers => 
        {
            return res.status(200).json({status: "success", data: drivers});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    getDriver(req, res) 
    {
        driverService.getDriver(req.params.driver_id).then(driver =>
        {
            return res.status(200).json({status: "success", data: driver});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    updateDriver(req,res) 
    {
        driverService.updateDriver(req.params.driver_id, req.body).then(response =>
        {
            return res.status(200).json({status: "success"});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    deleteDriver(req,res) 
    {
        driverService.deleteDriver(req.params.driver_id).then(response =>
        {
            return res.status(200).json({status: "success"});
        })
        .catch(err =>
        {
            throw err;
        })
    }

}

module.exports = new DriverController;