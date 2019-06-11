const Joi = require('@hapi/joi');
const mongoose = require('mongoose');

const Pressure = mongoose.model(
	'Pressures',
	new mongoose.Schema({
		name: {
			type: String,
			required: true,
			minLength: 3,
			maxLength: 75,
		},
		required_vals: { type: [String], required: true },
		equation: {
			type: String,
			required: true,
		},
	})
);

const validatePressure = pressure => {
	const schema = {
		name: Joi.string()
			.min(3)
			.max(75)
			.required(),
		required_vals: Joi.array()
			.items(Joi.string())
			.required(),
		equation: Joi.string().required(),
	};

	return Joi.validate(pressure, schema);
};

exports.Pressure = Pressure;
exports.validate = validatePressure;
