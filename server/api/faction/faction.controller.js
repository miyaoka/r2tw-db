'use strict';

var _ = require('lodash');
var Faction = require('./faction.model');

// Get list of factions
exports.index = function(req, res) {
  Faction.find(req.query, function (err, factions) {
    if(err) { return handleError(res, err); }
    return res.json(200, factions);
  });
};

// Get a single faction
exports.show = function(req, res) {
  Faction.findById(req.params.id, function (err, faction) {
    if(err) { return handleError(res, err); }
    if(!faction) { return res.send(404); }
    return res.json(faction);
  });
};

// Creates a new faction in the DB.
exports.create = function(req, res) {
  Faction.create(req.body, function(err, faction) {
    if(err) { return handleError(res, err); }
    return res.json(201, faction);
  });
};

// Updates an existing faction in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Faction.findById(req.params.id, function (err, faction) {
    if (err) { return handleError(res, err); }
    if(!faction) { return res.send(404); }
    var updated = _.merge(faction, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, faction);
    });
  });
};

// Deletes a faction from the DB.
exports.destroy = function(req, res) {
  Faction.findById(req.params.id, function (err, faction) {
    if(err) { return handleError(res, err); }
    if(!faction) { return res.send(404); }
    faction.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}