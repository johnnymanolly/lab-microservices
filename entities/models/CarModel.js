let mongoose = require('mongoose');

let schema = {
	plate_no: 
	{
		type: String,
		required:true,
		unique:true
	},
    model:
    {
		type: String,
		required:true
	},
    color: 
    {
		type: String,
		required:true
	},
	driver:
	{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Driver',
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

module.exports = mongoose.model('Car', schema, 'Cars')