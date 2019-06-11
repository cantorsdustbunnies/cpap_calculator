const express = require('express');
const cpapModels = require('../routes/cpapModels');
const error = require('../middleware/error');

module.exports = app => {
	app.use('/api/models', cpapModels);
	app.use(error);
};
