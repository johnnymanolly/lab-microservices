const express = require('express');
const penalty  = require('../controller/PenaltyController');

const router = express.Router();


router.post('/penalty', penalty.createPenalty);
router.get('/penalty/list', penalty.listPenalties);
router.get('/penalty/:id', penalty.getPenalty);
router.put('/penalty/:id', penalty.updatePenalty);
router.delete('/penalty/:id', penalty.deletePenalty);


module.exports = router;