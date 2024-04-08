const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connection successful');
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;