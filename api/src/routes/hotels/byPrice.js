const { Router } = require('express');
const router = Router();
const sortHotelByPrice = require('../../controllers/hotels/byPrice.controller.js');

router.get('/:sort',  async (req, res) => {

	const { sort } = req.params;

	try {
		return res.json(await sortHotelByPrice(sort));
	} catch(e) {
		return res.status(400).json({error:e})
	}


})



module.exports = router;