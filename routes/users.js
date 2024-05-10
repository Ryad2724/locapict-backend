var express = require('express');
var router = express.Router();

require('../models/connection');

const fetch = require('node-fetch');
const User = require('../models/users');
const Place = require('../models/places');


module.exports = router;