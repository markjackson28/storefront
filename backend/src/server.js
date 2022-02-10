'use strict';

const express = require('express');
const morgan = require('morgan');
const app = express();

// Importing modules for use
const mainRoute = require('./routes/mainRoute');
const productRouter = require('./routes/productRoute');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');

// Global Middleware
app.use(logger);
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use(mainRoute);
app.use(productRouter);

// Telling app to use these error handlers
app.use('*', notFoundHandler);
app.use(errorHandler);

// Export server to index.js for use
module.exports = {
  server: app,
  start: port => {
    if (!port) {
      throw new Error('Missing port :(');
    }
    app.listen(port, () => console.log(`Server up on ${port}`));
  },
};
