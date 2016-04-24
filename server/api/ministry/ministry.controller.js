'use strict';

var _ = require('lodash');
var Ministry = require('./ministry.model');

// Get list of ministrys
exports.index = function(req, res) {
  Ministry.find(function (err, ministrys) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(ministrys);
  });
};

// Get a single ministry
exports.show = function(req, res) {
  Ministry.findById(req.params.id, function (err, ministry) {
    if(err) { return handleError(res, err); }
    if(!ministry) { return res.status(404).send('Not Found'); }
    return res.json(ministry);
  });
};

// Creates a new ministry in the DB.
exports.create = function(req, res) {
  Ministry.create(req.body, function(err, ministry) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(ministry);
  });
};

// Updates an existing ministry in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Ministry.findById(req.params.id, function (err, ministry) {
    if (err) { return handleError(res, err); }
    if(!ministry) { return res.status(404).send('Not Found'); }
    var updated = _.merge(ministry, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(ministry);
    });
  });
};

// Deletes a ministry from the DB.
exports.destroy = function(req, res) {
  Ministry.findById(req.params.id, function (err, ministry) {
    if(err) { return handleError(res, err); }
    if(!ministry) { return res.status(404).send('Not Found'); }
    ministry.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}