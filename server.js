
require('dotenv').config();

const express = require('express');
const homeFunction = require('./controller/Home');

const app = express();

// Configure EJS
app.set('view engine', 'ejs');

// Home route
app.get('/', homeFunction);

// Health check for ALB
app.get('/health', (req, res) => {
    res.status(200).send('Healthy');
});

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
});
