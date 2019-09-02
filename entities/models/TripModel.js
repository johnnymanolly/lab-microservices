let mongoose = require('mongoose');

let schema = {
	trip_id:
	{
		type: String,
		required:true,
		unique:true
	},
    distance:
    {
		type: Number,
		required:true
	},
    start_point:
    {
		longitude:
		{
			type: Number,
			required:true
		},
		latitude:
		{
			type: Number,
			required:true
		}
	},
	end_point:
    {
		longitude:
		{
			type: Number,
			required:true
		},
		latitude:
		{
			type: Number,
			required:true
		}
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

module.exports = mongoose.model('Trip', schema, 'Trips')