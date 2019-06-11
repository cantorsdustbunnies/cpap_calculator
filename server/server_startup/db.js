const mongoose = require('mongoose');

const db = process.env.MONGO_URI;

module.exports = () => {
	mongoose.connect(db, { useNewUrlParser: true }).then(() => {
		console.log('Now connected to mongodb');
	});
};
