var express = require('express');
var router = express.Router();
var model = require('./model');

router.get('/login', function (req, res, next) {
  res.render('eits-login', model);
});

router.post('/login', function (req, res, next) {
  var username = req.body.tbUsername;
  var password = req.body.tbPassword;
  if (username !== process.env.EITS_USER && password !== process.env.EITS_PASS) {
    model.message = 'username/password errati,<br/>impossibile accedere all\'applicazione';
    res.render('eits-login', model);
  }
  else {
    res.cookie('keySessionUserBO', 'allowed');
    res.redirect('/eits/gallery');
  }
});

router.get('/gallery', function (req, res, next) {
  if (req.cookies.keySessionUserBO === 'allowed') {
    res.render('eits-gallery', model);
  }
  else {
    res.redirect('/eits/login');
  }
});

module.exports = router;
