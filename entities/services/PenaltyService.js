let PenaltyModel = require('../models/PenaltyModel');

class penaltyService 
{
    constructor() {}

    createPenalty(req, res) 
    {
        return new Promise((resolve, reject) => 
        {

            let data = req.body;
            let penalty = new PenaltyModel(
            {
                plate_no: data.plate_no,
                model: data.model,
                color: data.color,
                updated_at: Date.now(),
                created_at: Date.now()
            });

            penalty.save().then(doc => 
            {
                console.log("New penalty created");
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when creating penalty doc: " + err);
                reject(err);
            })
        });
    }

    listPenalties() 
    {
        return new Promise((resolve, reject) => 
        {
            PenaltyModel.find().then(penalties => 
            {
                resolve(penalties);
            })
            .catch(err => 
            {
                console.error("Error occurred when getting penalty doc: " + err);
                reject(err);
            })
        });
    }

    getPenalty(plate_no) 
    {
        return new Promise((resolve, reject) => 
        {
            PenaltyModel.find({plate_no: plate_no}).then(doc => 
            {
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when getting penalty doc: " + err);
                reject(err);
            })
        });
    }

    updatePenalty(plate_no,data) 
    {
        return new Promise((resolve, reject) => 
        {
            data.updated_at = Date.now();
            PenaltyModel.findOneAndUpdate({plate_no: plate_no}, data, { returnNewDocument: true }).then(doc => 
            {
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when updating penalty doc: " + err);
                reject(err);
            })
        });
    }

    deletePenalty(plate_no) 
    {
        return new Promise((resolve, reject) => 
        {
            PenaltyModel.findOneAndRemove({plate_no: plate_no}).then(doc => 
            {
                resolve(doc);
            })
            .catch(err => 
            {
                console.error("Error occurred when deleting penalty doc: " + err);
                reject(err);
            })
        });
    }

}






module.exports = new penaltyService;