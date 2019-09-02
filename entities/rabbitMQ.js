const amqp = require('amqplib/callback_api');
const RABBITMQ_URL = process.env.RABBITMQ_URL;

class RabbitMQ
{

    constructor(){}

    publish(queue, assignment)
    {
        amqp.connect(RABBITMQ_URL, function(error0, connection) {
            if (error0)
            {
                throw error0;
            }
            console.log("RabbitMQ connected");

            connection.createChannel(function(error1, channel)
            {
                if (error1)
                {
                    throw error1;
                }

                channel.assertQueue(queue, {
                    durable: false
                });

                channel.sendToQueue(queue, Buffer.from(assignment));
                console.log(" [x] Sent %s", assignment);
            });

        });
    }

}


module.exports = new RabbitMQ()