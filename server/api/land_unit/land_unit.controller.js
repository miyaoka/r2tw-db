'use strict';

var _ = require('lodash');
var LandUnit = require('./land_unit.model');

// Get list of land_units
exports.index = function(req, res) {
  LandUnit.find(req.query, function (err, land_units) {
    if(err) { return handleError(res, err); }
    return res.json(200, land_units);
  });
};

// Get a single land_unit
exports.show = function(req, res) {
  LandUnit.findById(req.params.id, function (err, land_unit) {
    if(err) { return handleError(res, err); }
    if(!land_unit) { return res.send(404); }
    return res.json(land_unit);
  });
};

// Creates a new land_unit in the DB.
exports.create = function(req, res) {
  LandUnit.create(req.body, function(err, land_unit) {
    if(err) { return handleError(res, err); }
    return res.json(201, land_unit);
  });
};

// Updates an existing land_unit in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  LandUnit.findById(req.params.id, function (err, land_unit) {
    if (err) { return handleError(res, err); }
    if(!land_unit) { return res.send(404); }
    var updated = _.merge(land_unit, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, land_unit);
    });
  });
};

// Deletes a land_unit from the DB.
exports.destroy = function(req, res) {
  LandUnit.findById(req.params.id, function (err, land_unit) {
    if(err) { return handleError(res, err); }
    if(!land_unit) { return res.send(404); }
    land_unit.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}