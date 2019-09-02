const amqp = require('amqplib/callback_api');
const management = require('./Management');

const RABBITMQ_URL = "amqp://localhost";

class RabbitMQ
{

    constructor(){}

    init()
    {
        amqp.connect(RABBITMQ_URL, function(error0, connection) 
        {
            if (error0)
            {
                throw error0;
            }
            console.log("RabbitMQ connected");

            connection.createChannel(function(error1, channel) {
            if (error1) 
            {
                throw error1;
            }

            let queue = 'heartbeats';

            channel.assertQueue(queue, {
                durable: false
            });

            console.log(" [*] Waiting for messages in %s.", queue);

            channel.consume(queue, function(msg) 
            {
                console.log(" [x] Received %s", msg.content.toString());
                channel.ack(msg);
                management.applyPenalties(msg.content.toString())
            }, 
            {
                noAck: false
            });
        });

        });
    }

}


module.exports = new RabbitMQ()