var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('contacts', require('./model'));
});

module.exports = router;
