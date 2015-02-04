'use strict';

var _ = require('lodash');
var LocLandUnit = require('./loc_land_unit.model');

// Get list of loc_land_units
exports.index = function(req, res) {
  LocLandUnit.find(function (err, loc_land_units) {
    if(err) { return handleError(res, err); }
    return res.json(200, loc_land_units);
  });
};

// Get a single loc_land_unit
exports.show = function(req, res) {
  LocLandUnit.findById(req.params.id, function (err, loc_land_unit) {
    if(err) { return handleError(res, err); }
    if(!loc_land_unit) { return res.send(404); }
    return res.json(loc_land_unit);
  });
};

// Creates a new loc_land_unit in the DB.
exports.create = function(req, res) {
  LocLandUnit.create(req.body, function(err, loc_land_unit) {
    if(err) { return handleError(res, err); }
    return res.json(201, loc_land_unit);
  });
};

// Updates an existing loc_land_unit in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  LocLandUnit.findById(req.params.id, function (err, loc_land_unit) {
    if (err) { return handleError(res, err); }
    if(!loc_land_unit) { return res.send(404); }
    var updated = _.merge(loc_land_unit, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, loc_land_unit);
    });
  });
};

// Deletes a loc_land_unit from the DB.
exports.destroy = function(req, res) {
  LocLandUnit.findById(req.params.id, function (err, loc_land_unit) {
    if(err) { return handleError(res, err); }
    if(!loc_land_unit) { return res.send(404); }
    loc_land_unit.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}