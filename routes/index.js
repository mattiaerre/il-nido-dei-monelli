var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log('page:', req.query.page);
  var page = parseInt(req.query.page);
  res.render('index', { title: 'Express', page: page });
});

module.exports = router;
