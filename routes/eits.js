var express = require('express');
var router = express.Router();

router.get('/login', function (req, res, next) {
  res.render('eits-login', require('./model'));
});

module.exports = router;
