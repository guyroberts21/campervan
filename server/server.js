const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

mongoose.connect(process.env.ATLAS_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// create express instance
const app = express();

// middleware
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});
