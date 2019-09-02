let mongoose = require('mongoose');

let schema = {
	driver_id:
	{
		type: String,
		required:true
	},
	trip_id:
    {
		type: Number,
		required:true
	},
	speed:
	{
		type: Number,
		required:true
	},
	penaltyPoints:
	{
		type: Number,
		required:true
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

module.exports = mongoose.model('Penalty', schema, 'Penalties')