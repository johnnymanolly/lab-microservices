let carService = require('../services/CarService');

class CarController 
{
    constructor() {}

    createCar(req, res)
    {
        carService.createCar(req).then(response => 
        {
            return res.status(200).json({status: "success"});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    listCars(req, res)
    {
        carService.listCars(req).then(cars => 
        {
            return res.status(200).json({status: "success", data: cars});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    getCar(req, res) 
    {
        carService.getCar(req.params.plate_no).then(car => 
        {
            return res.status(200).json({status: "success", data: car});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    updateCar(req,res) 
    {
        carService.updateCar(req.params.plate_no, req.body).then(response => 
        {
            return res.status(200).json({status: "success"});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    deleteCar(req,res) 
    {
        carService.deleteCar(req.params.plate_no).then(response => 
        {
            return res.status(200).json({status: "success"});
        })
        .catch(err =>
        {
            throw err;
        })
    }

    assignDriverToCar(req,res)
    {
        carService.assignDriverToCar(req.body).then(response =>
        {
            return res.status(200).json({status: "success"});
        })
            .catch(err =>
            {
                throw err;
            })
    }

    unassignDriverToCar(req,res)
    {
        carService.unassignDriverToCar(req.params.plate_no).then(response =>
        {
            return res.status(200).json({status: "success"});
        })
            .catch(err =>
            {
                throw err;
            })
    }

}

module.exports = new CarController;