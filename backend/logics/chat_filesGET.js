'use strict';
var config = require('../config');
var Request = require('request');

exports.chat_filesGETStart = function (req, res, results, next) {
  // @see https://k5-doc.jp-east-1.paas.cloud.global.fujitsu.com/doc/en/iaas/document/k5-iaas-api-reference-foundation-service.pdf
  
  // @todo edit backend/config.js to set URL and token
  var options = {
    baseUrl: config.k5.storageEndpoint,
    url: '/v1/' + config.k5.account + '/[Container Name]',
    method: 'GET',
    headers: {
      'X-Auth-Token': config.k5.token,
      'Accept': 'application/json',
    },
    qs: {
      format: 'json'
    }
  };
  
  Request(options, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      next(body);
    } else {
      // @todo handle error
    }
  });

}

exports.chat_filesGETEnd = function (req, res, results) {
  if (typeof results === 'object') {
    res.json(results);
  } else {
    // @todo change the type if this API doesn't return json.
    res.setHeader('Content-Type', 'application/json');
    res.end(results);
  }
}
