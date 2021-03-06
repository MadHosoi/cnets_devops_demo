'use strict';
var config = require('../config');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;

exports.chat_streamsDELETEStart = function (req, res, results, next) {

  var url = config.mongoURI();
  MongoClient.connect(url, { native_parser:true }, function(err, db) {
    db.collection('chat_stream').deleteOne(req.body, function(err, result) {
      db.close();
      // return body instead of result for _id
      next(req.body || {});
    });
  });

}

exports.chat_streamsDELETEEnd = function (req, res, results) {
  if (typeof results === 'object') {
    res.json(results);
  } else {
    // @todo change the type if this API doesn't return json.
    res.setHeader('Content-Type', 'application/json');
    res.end(results);
  }
}
