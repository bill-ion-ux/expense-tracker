const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const transactions = require('./routes/transactions');
dotenv.config({path: './config/config.env'});
const PORT = process.env.PORT || 5001;
const connectDB = require('./config/mongo');
const app = express();
//body parser middleware
app.use(express.json());

app.use('/api/v1/transactions', transactions);
connectDB();




app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));



