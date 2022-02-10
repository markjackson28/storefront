'use strict';

const express = require('express');

const router = express.Router();

router.get('/', getMainRoute);

// Route handler
function getMainRoute(req, res) {
  res.status(200).send('Hello Product Server :D');
}

module.exports = router;
