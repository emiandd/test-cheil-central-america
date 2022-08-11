const { Hotel } = require('../../db.js');

const getHotelsByRating = async (rating) => {

	if(rating > 5 || rating < 1) throw 'Rating not valid';
	const allHotels = await Hotel.findAll();
	if(allHotels){
		const hotelsByRating = allHotels.filter( h => h.averageRating === Number(rating));
		if(hotelsByRating.length === 0) throw 'No data found';
		else return hotelsByRating;
	}
}

module.exports = getHotelsByRating;