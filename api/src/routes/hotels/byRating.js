const { Router } = require('express');
const router = Router();
const getHotelsByRating = require('../../controllers/hotels/hotelsByRating.controller.js');

router.get('/:rating', async (req, res) => {

	const { rating } = req.params;

	try {
		// statements
		return res.json(await getHotelsByRating(rating));
	} catch(e) {
		// statements
		return res.status(400).json({error:e})
	}


})


module.exports = router;