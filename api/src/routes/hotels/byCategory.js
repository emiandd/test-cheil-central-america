const { Router } = require('express');
const router = Router();
const getHotelsByCategory = require('../../controllers/hotels/hotelsByCategory.controller.js');

router.get('/:category', async (req, res) => {

	const { category } = req.params;

	try {
		return res.send(await getHotelsByCategory(category));
	} catch(e) {
		return res.status(400).json({error:e})
	}


})

module.exports = router;