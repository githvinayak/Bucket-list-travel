var mongoose = require('mongoose');
var Schema = mongoose.Schema;
hotelSchema = new Schema( {
	
	unique_id: Number,
	destination: String,
	check_in: String,
	check_out: String,
	room_type: String,
	children: String,
	adult: String,
	name: String,
	phone: Number,
}),
hotelBooking = mongoose.model('hotelBooking', hotelSchema);
module.exports = hotelBooking;