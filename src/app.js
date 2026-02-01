const path = require('path');
const express = require('express');

const app = express();

app.use(express.json());

// Serve static UI from /public
app.use(express.static(path.join(__dirname, '../public')));

// API routes
app.use('/users', require('./routes/usersRoutes'));

// Error handler (keep last)
app.use(require('./middleware/errorHandler'));

module.exports = app;
