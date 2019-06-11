const pressure = require('../routes/pressure');
const error = require('../middleware/error');

module.exports = app => {
	app.use('/api/pressure', pressure);
	app.use(error);
};
