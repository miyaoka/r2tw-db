'use strict';

var _ = require('lodash');
var LocFaction = require('./loc_faction.model');

// Get list of loc_factions
exports.index = function(req, res) {
  LocFaction.find(function (err, loc_factions) {
    if(err) { return handleError(res, err); }
    return res.json(200, loc_factions);
  });
};

// Get a single loc_faction
exports.show = function(req, res) {
  LocFaction.findById(req.params.id, function (err, loc_faction) {
    if(err) { return handleError(res, err); }
    if(!loc_faction) { return res.send(404); }
    return res.json(loc_faction);
  });
};

// Creates a new loc_faction in the DB.
exports.create = function(req, res) {
  LocFaction.create(req.body, function(err, loc_faction) {
    if(err) { return handleError(res, err); }
    return res.json(201, loc_faction);
  });
};

// Updates an existing loc_faction in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  LocFaction.findById(req.params.id, function (err, loc_faction) {
    if (err) { return handleError(res, err); }
    if(!loc_faction) { return res.send(404); }
    var updated = _.merge(loc_faction, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, loc_faction);
    });
  });
};

// Deletes a loc_faction from the DB.
exports.destroy = function(req, res) {
  LocFaction.findById(req.params.id, function (err, loc_faction) {
    if(err) { return handleError(res, err); }
    if(!loc_faction) { return res.send(404); }
    loc_faction.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}