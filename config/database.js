/** @format */

const mongoose = require('mongoose');

const connectDatabase = async (url) => {
	try {
		mongoose.set('strictQuery', false);
		await mongoose.connect(url);
		console.log(`database connected successfully`);
	} catch (error) {
		console.error(error);
	}
};

module.exports = connectDatabase;
