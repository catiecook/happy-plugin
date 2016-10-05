var express = require('express');
var router = express.Router();
var query = require('../db/queries.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Happy Collection'
  })
});

router.post('/positives', function(req, res, next){
  query.addHappy(req.body.phrase, req.body.source)
  .then(function() {
    res.redirect('/next')
  })
});

router.get('/next', function(req, res, next){
  res.render('next', {
    title: 'Happy Collection'
  })
})

router.get('/thanks', function(req, res, next) {
  res.render('thanks', {
    title: 'Happy Collection'
  })
})

module.exports = router;
