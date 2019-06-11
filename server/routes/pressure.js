const router = require('express').Router();

router.get('/', async (req, res) => {
	res.send('this is the pressures endpoint');
});

module.exports = router;
