'use strict';

var _ = require('lodash');
var UnitArmourType = require('./unit_armour_type.model');

// Get list of unit_armour_types
exports.index = function(req, res) {
  UnitArmourType.find(function (err, unit_armour_types) {
    if(err) { return handleError(res, err); }
    return res.json(200, unit_armour_types);
  });
};

// Get a single unit_armour_type
exports.show = function(req, res) {
  UnitArmourType.findById(req.params.id, function (err, unit_armour_type) {
    if(err) { return handleError(res, err); }
    if(!unit_armour_type) { return res.send(404); }
    return res.json(unit_armour_type);
  });
};

// Creates a new unit_armour_type in the DB.
exports.create = function(req, res) {
  UnitArmourType.create(req.body, function(err, unit_armour_type) {
    if(err) { return handleError(res, err); }
    return res.json(201, unit_armour_type);
  });
};

// Updates an existing unit_armour_type in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  UnitArmourType.findById(req.params.id, function (err, unit_armour_type) {
    if (err) { return handleError(res, err); }
    if(!unit_armour_type) { return res.send(404); }
    var updated = _.merge(unit_armour_type, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, unit_armour_type);
    });
  });
};

// Deletes a unit_armour_type from the DB.
exports.destroy = function(req, res) {
  UnitArmourType.findById(req.params.id, function (err, unit_armour_type) {
    if(err) { return handleError(res, err); }
    if(!unit_armour_type) { return res.send(404); }
    unit_armour_type.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}