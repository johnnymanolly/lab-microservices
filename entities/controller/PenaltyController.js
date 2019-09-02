let penaltyService = require('../services/PenaltyService');

class PenaltyController 
{
    constructor() {}

    createPenalty(req, res)
    {
        penaltyService.createPenalty(req).then(response => 
        {
            return res.status(200).json({status: "success"});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    listPenalties(req, res)
    {
        penaltyService.listPenaltys(req).then(penalties =>
        {
            return res.status(200).json({status: "success", data: penalties});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    getPenalty(req, res) 
    {
        penaltyService.getPenalty(req.params.plate_no).then(penalty => 
        {
            return res.status(200).json({status: "success", data: penalty});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    updatePenalty(req,res) 
    {
        penaltyService.updatePenalty(req.params.plate_no, req.body).then(response => 
        {
            return res.status(200).json({status: "success"});
        })
        .catch(err => 
        {
            throw err;
        })
    }

    deletePenalty(req,res) 
    {
        penaltyService.deletePenalty(req.params.plate_no).then(response => 
        {
            return res.status(200).json({status: "success"});
        })
        .catch(err =>
        {
            throw err;
        })
    }

}

module.exports = new PenaltyController;