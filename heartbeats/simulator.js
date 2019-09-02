const locationHelper = require('random-location');
const moment = require('moment');
const rabbitMQ = require('./rabbitMQ');

class Simulator 
{
    constructor() {}

    simulateHeartbeats(data)
    {
       data = JSON.parse(data);

       var startPoint = 
        {
            longitude: data.startPoint.longitude,
            latitude: data.startPoint.latitude
        };

        var endPoint = 
        {
            longitude: data.endPoint.longitude,
            latitude: data.endPoint.latitude
        };

        var distance = Math.floor(locationHelper.distance(startPoint, endPoint));

        let seconds = 0;
        while (distance != 0) 
        {
            let distanceTravelled = 0;
            if (distance > 33) 
            {
                distanceTravelled = this.generateNumber();
            } 
            else 
            {
                distanceTravelled = distance;
            }

            distance -= distanceTravelled;

            let speed = Math.floor(distanceTravelled * 3.6);
            seconds++;

            let data = 
            {
                driver: dataFromQueue.driver,
                speed: speed,
                distance: distance,
                time: moment().add(seconds, "seconds").format(),
                tripId : dataFromQueue.tripId
            };

            publish("heartbeats", data);

        }
    }

    generateNumber() 
    {
        let min = Math.ceil(0);
        let max = 33;
        let random = Math.random() * (max - min) + min;
        return random;
    }

    publish(queue, data)
    {
        rabbitMQ.publish(queue, data);
    }



}

module.exports = new Simulator;
