const data = require('../utils/data.js');
const { Hotel } = require('../db.js');

const preloadData = () => {

	try {
		data.map( h =>  {
			Hotel.findOrCreate({
				where: {
					name: h.name,
					category: h.category,
					price: h.price,
					photos: h.photos,
					ratings: h.ratings,
				}
			}) 
		})

	} catch(e) {
		console.log(e);
	}
}

module.exports = preloadData;