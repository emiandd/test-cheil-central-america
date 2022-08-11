const { Router } = require('express');
const router = Router();
const allHotels = require('./hotels/hotels.js');
const hotelsByCategory = require('./hotels/byCategory.js');
const hotelsByRating = require('./hotels/byRating.js');
const hotelsByPrice = require('./hotels/byPrice.js');



router.use('/hotels', allHotels);
router.use('/hotels/category', hotelsByCategory);
router.use('/hotels/rating', hotelsByRating);
router.use('/hotels/price', hotelsByPrice);



module.exports = router;