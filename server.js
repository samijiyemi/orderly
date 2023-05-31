/** @format */
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Get mongodb driver connection
const connectDatabase = require('./config/database');

// Start server connection
app.listen(PORT, () => {
	// Perform a database connection when the server started
	connectDatabase(process.env.MONGO_URI);
	console.log(`Server is runing on port ${PORT}`);
});
