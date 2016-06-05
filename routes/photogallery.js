var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  var page = parseInt(req.query.page);
  var model = require('./model');
  model.page = page;
  res.render('photogallery', model);
});

module.exports = router;
