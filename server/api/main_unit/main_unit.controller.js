'use strict';

var _ = require('lodash');
var MainUnit = require('./main_unit.model');

// Get list of main_units
exports.index = function(req, res) {
  MainUnit.find(req.query, function (err, main_units) {
    if(err) { return handleError(res, err); }
    return res.json(200, main_units);
  });
};

// Get a single main_unit
exports.show = function(req, res) {
  MainUnit.findById(req.params.id, function (err, main_unit) {
    if(err) { return handleError(res, err); }
    if(!main_unit) { return res.send(404); }
    return res.json(main_unit);
  });
};

// Creates a new main_unit in the DB.
exports.create = function(req, res) {
  MainUnit.create(req.body, function(err, main_unit) {
    if(err) { return handleError(res, err); }
    return res.json(201, main_unit);
  });
};

// Updates an existing main_unit in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  MainUnit.findById(req.params.id, function (err, main_unit) {
    if (err) { return handleError(res, err); }
    if(!main_unit) { return res.send(404); }
    var updated = _.merge(main_unit, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, main_unit);
    });
  });
};

// Deletes a main_unit from the DB.
exports.destroy = function(req, res) {
  MainUnit.findById(req.params.id, function (err, main_unit) {
    if(err) { return handleError(res, err); }
    if(!main_unit) { return res.send(404); }
    main_unit.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}