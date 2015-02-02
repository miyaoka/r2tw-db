'use strict';

var _ = require('lodash');
var UnitsToGroupingsMilitaryPermission = require('./units_to_groupings_military_permission.model');

// Get list of units_to_groupings_military_permissions
exports.index = function(req, res) {
  UnitsToGroupingsMilitaryPermission.find(function (err, units_to_groupings_military_permissions) {
    if(err) { return handleError(res, err); }
    return res.json(200, units_to_groupings_military_permissions);
  });
};

// Get a single units_to_groupings_military_permission
exports.show = function(req, res) {
  UnitsToGroupingsMilitaryPermission.findById(req.params.id, function (err, units_to_groupings_military_permission) {
    if(err) { return handleError(res, err); }
    if(!units_to_groupings_military_permission) { return res.send(404); }
    return res.json(units_to_groupings_military_permission);
  });
};

// Creates a new units_to_groupings_military_permission in the DB.
exports.create = function(req, res) {
  UnitsToGroupingsMilitaryPermission.create(req.body, function(err, units_to_groupings_military_permission) {
    if(err) { return handleError(res, err); }
    return res.json(201, units_to_groupings_military_permission);
  });
};

// Updates an existing units_to_groupings_military_permission in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  UnitsToGroupingsMilitaryPermission.findById(req.params.id, function (err, units_to_groupings_military_permission) {
    if (err) { return handleError(res, err); }
    if(!units_to_groupings_military_permission) { return res.send(404); }
    var updated = _.merge(units_to_groupings_military_permission, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, units_to_groupings_military_permission);
    });
  });
};

// Deletes a units_to_groupings_military_permission from the DB.
exports.destroy = function(req, res) {
  UnitsToGroupingsMilitaryPermission.findById(req.params.id, function (err, units_to_groupings_military_permission) {
    if(err) { return handleError(res, err); }
    if(!units_to_groupings_military_permission) { return res.send(404); }
    units_to_groupings_military_permission.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}