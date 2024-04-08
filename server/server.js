const express = require('express');
const connectDB = require('./db/connection');
const authRoutes = require('./routes/auth.route');



const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/api/auth', authRoutes);






app.listen(3000, () => {
    connectDB();
    console.log('Server is running on port 3000');
});


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});
