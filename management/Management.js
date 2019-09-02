const locationHelper = require('random-location');
const moment = require('moment');
const rabbitMQ = require('./rabbitMQ');

class Management 
{
    constructor() {}

    applyPenalties(data)
    {
        data = JSON.parse(data);

        let speed = data.speed;

        let data = 
        {
            speed: data.speed,
            distance: data.distance,
            tripId: data.tripId,
            driver: data.driver
        }

        var distanceCheck = parseInt(data.distance);

        if(speed>60 && speed<=80)
        {
            data.penaltyPoints = 1 * distanceCheck;
            savePenalties('/penalty',data);
        }
        else if(speed>80 && speed<=100)
        {
            //2 penalty points
            data.penaltyPoints = 2 * distanceCheck;
            savePenalties('/penalty',data);
        }
        else if(speed>100)
        {
            data.penaltyPoints = 5 * distanceCheck; 
            savePenalties('/penalty',data);
        }
    }

    savePenalties(data)
    {
        axios.post("http://localhost:3000/penalty", data).then((response) => {

            console.log("Penalty logged");
        })
    }

}

module.exports = new Management;
