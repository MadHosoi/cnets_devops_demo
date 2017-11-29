'use strict';
var url = require('url');

var chat_streamsGETLogic = require('../logics/chat_streamsGET');
var chat_streamsPOSTLogic = require('../logics/chat_streamsPOST');
var chat_streamsDELETELogic = require('../logics/chat_streamsDELETE');
var chat_messagesGETLogic = require('../logics/chat_messagesGET');
var chat_messagesPOSTLogic = require('../logics/chat_messagesPOST');
var chat_filesGETLogic = require('../logics/chat_filesGET');
var chat_fileGETLogic = require('../logics/chat_fileGET');
var chat_filePUTLogic = require('../logics/chat_filePUT');
var chat_filePOSTLogic = require('../logics/chat_filePOST');
var chat_fileDELETELogic = require('../logics/chat_fileDELETE');


module.exports.chat_streamsGET = function chat_streamsGET (req, res, next) {
  chat_streamsGETLogic.chat_streamsGETStart(req, res, {}, function (result) {
    chat_streamsGETLogic.chat_streamsGETEnd(req, res, result);
  });
};

module.exports.chat_streamsPOST = function chat_streamsPOST (req, res, next) {
  chat_streamsPOSTLogic.chat_streamsPOSTStart(req, res, {}, function (result) {
    chat_streamsPOSTLogic.chat_streamsPOSTEnd(req, res, result);
  });
};

module.exports.chat_streamsDELETE = function chat_streamsDELETE (req, res, next) {
  chat_streamsDELETELogic.chat_streamsDELETEStart(req, res, {}, function (result) {
    chat_streamsDELETELogic.chat_streamsDELETEEnd(req, res, result);
  });
};

module.exports.chat_messagesGET = function chat_messagesGET (req, res, next) {
  chat_messagesGETLogic.chat_messagesGETStart(req, res, {}, function (result) {
    chat_messagesGETLogic.chat_messagesGETEnd(req, res, result);
  });
};

module.exports.chat_messagesPOST = function chat_messagesPOST (req, res, next) {
  chat_messagesPOSTLogic.chat_messagesPOSTStart(req, res, {}, function (result) {
    chat_messagesPOSTLogic.chat_messagesPOSTEnd(req, res, result);
  });
};

module.exports.chat_filesGET = function chat_filesGET (req, res, next) {
  chat_filesGETLogic.chat_filesGETStart(req, res, {}, function (result) {
    chat_filesGETLogic.chat_filesGETEnd(req, res, result);
  });
};

module.exports.chat_fileGET = function chat_fileGET (req, res, next) {
  chat_fileGETLogic.chat_fileGETStart(req, res, {}, function (result) {
    chat_fileGETLogic.chat_fileGETEnd(req, res, result);
  });
};

module.exports.chat_filePUT = function chat_filePUT (req, res, next) {
  chat_filePUTLogic.chat_filePUTStart(req, res, {}, function (result) {
    chat_filePUTLogic.chat_filePUTEnd(req, res, result);
  });
};

module.exports.chat_filePOST = function chat_filePOST (req, res, next) {
  chat_filePOSTLogic.chat_filePOSTStart(req, res, {}, function (result) {
    chat_filePOSTLogic.chat_filePOSTEnd(req, res, result);
  });
};

module.exports.chat_fileDELETE = function chat_fileDELETE (req, res, next) {
  chat_fileDELETELogic.chat_fileDELETEStart(req, res, {}, function (result) {
    chat_fileDELETELogic.chat_fileDELETEEnd(req, res, result);
  });
};

