const { Hotel } = require('../../db.js');

const getHotelsByCategory = async (category) => {

	if(category > 5 || category < 1) throw 'Category not valid';

	const allHotels = await Hotel.findAll();

	if(allHotels){
		const hotelsByCategory = allHotels.filter( h => h.dataValues.category === Number(category));
		if(hotelsByCategory.length === 0) throw 'No hotels with that category';
		else return hotelsByCategory;
	}
}

module.exports = getHotelsByCategory;