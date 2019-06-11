const router = require('express').Router();

router.get('/', async (req, res) => {
	res.send('this is the models endpoint');
});

module.exports = router;
