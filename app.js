const express = require('express');
const app = express();
const itemsRouter = require('./routes/items');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());

// Root Route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API Routes
app.use('/items', itemsRouter);

// 404 Not Found Handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error Handler Middleware
app.use(errorHandler);

module.exports = app;
