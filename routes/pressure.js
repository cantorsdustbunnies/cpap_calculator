const router = require('express').Router();

router.get('/', async (req, res) => {
	res.send('this is the pressure endpoint');
});

module.exports = router;
