let mongoose = require('mongoose');

let schema = {
	driver_id:
	{
		type: String,
		required:true,
		unique:true
	},
    name:
    {
		type: String,
		required:true
	},
    surname:
    {
		type: String,
		required:true
	},
	car:
	{
		type: mongoose.SchemaTypes.ObjectId,
		ref: 'Car',
		required:false
	},
    created_at: 
    {
		type: Date,
		required:true
	},
    updated_at: 
    {
		type: Date,
		required:true
	},
};

module.exports = mongoose.model('Driver', schema, 'Drivers')