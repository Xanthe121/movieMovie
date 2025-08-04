const express = require('express');
const connectDB = require('./config/db');
const movieRoutes = require('./routes/movies');

const app = express();
app.use(express.json());
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);


// Connect MongoDB
connectDB();

// Routes
app.use('/api/movies', movieRoutes);

app.listen(3000, () => console.log('Cinema server running on port 3000'));
