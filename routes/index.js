var express = require('express');
var router = express.Router();

var uid2 = require('uid2')
var SHA256 = require('crypto-js/sha256')
var encBase64 = require('crypto-js/enc-base64')

var articleModel = require('../models/datas')


router.post('/toprint', async function (req, res, next) {
  console.log('the print should be launch')
  var result = true
  res.json({ result })
})


module.exports = router;
