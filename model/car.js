var mongoose = require('mongoose');
var Schema = mongoose.Schema;
cabSchema = new Schema( {
	
	unique_id: Number,
	pickup_location: String,
	drop_location: String,
	pickup_date: String,
	pickup_time: String,
	car_type: String,
	members: String,
	name: String,
	phone: Number,
}),
cabBooking = mongoose.model('cabBooking', cabSchema);
module.exports = cabBooking;