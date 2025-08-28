const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');
const transactions = require('./routes/transactions');
dotenv.config({path: './config/config.env'});
const PORT = process.env.PORT || 5000;

const app = express();
//body parser middleware
app.use(express.json());
app.use('api/v1/transactions', transactions);

await.mongoose.connect('mongodb://localhost:27017/myApp');
const mySchema = new mongoose.Schema({
    name: String,
    amount
});
const data = mongoose.model('data', mySchema);

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mdoe on port ${PORT}`.yellow.bold));