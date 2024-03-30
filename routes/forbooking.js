var express = require('express');
var router = express.Router();
var User = require('../model/car');
var User = require('../model/hotel');
var User = require('../model/tourism');

router.get('/', function (req, res, next) {
	return res.render('index.ejs');
});

router.get('/service', function (req, res, next) {
	res.render("service.ejs");
});

router.post('/tourBooking', function (req, res){
	console.log(req.body);
	var bookingInfo = req.body;


	if(!bookingInfo.destination || !bookingInfo.check_in || !bookingInfo.check_out || !bookingInfo.tour_type || !bookingInfo.children || !bookingInfo.adult || !bookingInfo.name || !bookingInfo.phone){
		res.send();
	} else {
			User.findOne({phone:bookingInfo.phone},function(err,data){
				if(!data){
					var c;
					User.findOne({},function(err,data){

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						}else{
							c=1;
						}

						var newBooking = new User({
							unique_id:c,
							destination:bookingInfo.destination,
							check_in: bookingInfo.check_in,
							check_out: bookingInfo.check_out,
							tour_type: bookingInfo.tour_type,
							children: bookingInfo.children,
							adult: bookingInfo.adult,
							name: bookingInfo.name,
							phone: bookingInfo.phone
						});

						newBooking.save(function(err, booking){
							if(err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({_id: -1}).limit(1);
					res.send({"Success":"Your tour reservation is done."});
				}else{
					res.send({"Success":"already booked"});
				}

			});
	}
});

router.post('/hotelBooking', function (req, res){
	console.log(req.body);
	var bookingInfo = req.body;
	if(!bookingInfo.destination || !bookingInfo.check_in || !bookingInfo.check_out || !bookingInfo.room_type || !bookingInfo.children || !bookingInfo.adult || !bookingInfo.name || !bookingInfo.phone){
		res.send();
	} else {
			User.findOne({phone:bookingInfo.phone},function(err,data){
				if(!data){
					var c;
					User.findOne({},function(err,data){

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						}else{
							c=1;
						}

						var newBooking = new User({
							unique_id:c,
							destination:bookingInfo.destination,
							check_in: bookingInfo.check_in,
							check_out: bookingInfo.check_out,
							room_type: bookingInfo.room_type,
							children: bookingInfo.children,
							adult: bookingInfo.adult,
							name: bookingInfo.name,
							phone: bookingInfo.phone
						});

						newBooking.save(function(err, booking){
							if(err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({_id: -1}).limit(1);
					res.send({"Success":"Your hotel reservation is done."});
				}else{
					res.send({"Success":"already booked"});
				}

			});
	}
});

router.post('/car-booking', function (req, res){
	console.log(req.body);
	var bookingInfo = req.body;
	if(!bookingInfo.pickup_location || !bookingInfo.drop_location || !bookingInfo.pickup_date || !bookingInfo.pickup_time || !bookingInfo.car_type || !bookingInfo.members || !bookingInfo.name || !bookingInfo.phone){
		res.send();
	} else {
			User.findOne({phone:bookingInfo.phone},function(err,data){
				if(!data){
					var c;
					User.findOne({},function(err,data){

						if (data) {
							console.log("if");
							c = data.unique_id + 1;
						}else{
							c=1;
						}

						var newBooking = new User({
							unique_id:c,
							pickup_location:bookingInfo.pickup_location,
							drop_location: bookingInfo.drop_location,
							pickup_date: bookingInfo.pickup_date,
							pickup_time: bookingInfo.pickup_time,
							car_type: bookingInfo.car_type,
							members: bookingInfo.members,
							name: bookingInfo.name,
							phone: bookingInfo.phone
						});

						newBooking.save(function(err, booking){
							if(err)
								console.log(err);
							else
								console.log('Success');
						});

					}).sort({_id: -1}).limit(1);
					res.send({"Success":"Your cab reservation is done."});
				}else{
					res.send({"Success":"already booked"});
				}

			});
	}
});

module.exports = router;