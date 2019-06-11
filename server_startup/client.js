const express = require('express');
const path = require('path');

module.exports = (app, dirname) => {
	app.use(express.static(path.join(dirname, 'client', 'build')));

	app.get('*', (req, res) => {
		res.sendFile(path.join(dirname, 'client', 'build', 'index.html'));
	});
};
