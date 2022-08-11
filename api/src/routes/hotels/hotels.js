const { Router } = require('express');
const router = Router();
const getAllHotels = require('../../controllers/hotels/getAllHotels.controller.js');

router.get('/', async (req, res) => {

	try {
		return res.json(await getAllHotels());
	} catch(e) {
		return res.status(400).json({error:e});
	}


})


module.exports = router;