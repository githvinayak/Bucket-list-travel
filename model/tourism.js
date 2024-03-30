var mongoose = require('mongoose');
var Schema = mongoose.Schema;
tourSchema = new Schema( {
	
	unique_id: Number,
	destination: String,
	check_in: String,
	check_out: String,
	tour_type: String,
	children: String,
	adult: String,
	name: String,
	phone: Number,
}),
tourBooking = mongoose.model('tourBooking', tourSchema);
module.exports = tourBooking;