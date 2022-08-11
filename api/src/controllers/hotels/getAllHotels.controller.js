const { Hotel } = require('../../db.js');

const getAllHotels = async () => {

	const allHotels = await Hotel.findAll();

	if(allHotels.length > 0) return allHotels;
	else throw 'Data not found';

}

module.exports = getAllHotels;