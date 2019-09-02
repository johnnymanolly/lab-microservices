let mongoose = require('mongoose');

const MONGODB_URL = process.env.MONGODB_URL;
const DB_NAME = process.env.DB_NAME;

class Database 
{
    constructor() {}

    init() 
    {
        mongoose.connect(`${MONGODB_URL}/${DB_NAME}`,{ useNewUrlParser: true ,useCreateIndex:true,useFindAndModify:false})
            .then(() => 
            {
                console.log('Database connected - entities service')
            })
            .catch(err => 
            {
                throw err;
                console.error('Failed to connect to databse')
            })
    }
}

module.exports = new Database()