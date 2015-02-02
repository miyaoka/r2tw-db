'use strict';

var _ = require('lodash');
var UnitShieldType = require('./unit_shield_type.model');

// Get list of unit_shield_types
exports.index = function(req, res) {
  UnitShieldType.find(function (err, unit_shield_types) {
    if(err) { return handleError(res, err); }
    return res.json(200, unit_shield_types);
  });
};

// Get a single unit_shield_type
exports.show = function(req, res) {
  UnitShieldType.findById(req.params.id, function (err, unit_shield_type) {
    if(err) { return handleError(res, err); }
    if(!unit_shield_type) { return res.send(404); }
    return res.json(unit_shield_type);
  });
};

// Creates a new unit_shield_type in the DB.
exports.create = function(req, res) {
  UnitShieldType.create(req.body, function(err, unit_shield_type) {
    if(err) { return handleError(res, err); }
    return res.json(201, unit_shield_type);
  });
};

// Updates an existing unit_shield_type in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  UnitShieldType.findById(req.params.id, function (err, unit_shield_type) {
    if (err) { return handleError(res, err); }
    if(!unit_shield_type) { return res.send(404); }
    var updated = _.merge(unit_shield_type, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, unit_shield_type);
    });
  });
};

// Deletes a unit_shield_type from the DB.
exports.destroy = function(req, res) {
  UnitShieldType.findById(req.params.id, function (err, unit_shield_type) {
    if(err) { return handleError(res, err); }
    if(!unit_shield_type) { return res.send(404); }
    unit_shield_type.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}