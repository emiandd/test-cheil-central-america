const { Hotel } = require('../../db.js');

const sortHotelByPrice = async (value) => {

	const allHotels = await Hotel.findAll();
	if(value === 'ascending') return allHotels.sort( (a, b) => a.price - b.price );
	if(value === 'descending') return allHotels.sort( (a, b) => b.price - a.price );
	else return allHotels;

}

module.exports = sortHotelByPrice;