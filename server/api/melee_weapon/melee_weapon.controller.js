'use strict';

var _ = require('lodash');
var MeleeWeapon = require('./melee_weapon.model');

// Get list of melee_weapons
exports.index = function(req, res) {
  MeleeWeapon.find(function (err, melee_weapons) {
    if(err) { return handleError(res, err); }
    return res.json(200, melee_weapons);
  });
};

// Get a single melee_weapon
exports.show = function(req, res) {
  MeleeWeapon.findById(req.params.id, function (err, melee_weapon) {
    if(err) { return handleError(res, err); }
    if(!melee_weapon) { return res.send(404); }
    return res.json(melee_weapon);
  });
};

// Creates a new melee_weapon in the DB.
exports.create = function(req, res) {
  MeleeWeapon.create(req.body, function(err, melee_weapon) {
    if(err) { return handleError(res, err); }
    return res.json(201, melee_weapon);
  });
};

// Updates an existing melee_weapon in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  MeleeWeapon.findById(req.params.id, function (err, melee_weapon) {
    if (err) { return handleError(res, err); }
    if(!melee_weapon) { return res.send(404); }
    var updated = _.merge(melee_weapon, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, melee_weapon);
    });
  });
};

// Deletes a melee_weapon from the DB.
exports.destroy = function(req, res) {
  MeleeWeapon.findById(req.params.id, function (err, melee_weapon) {
    if(err) { return handleError(res, err); }
    if(!melee_weapon) { return res.send(404); }
    melee_weapon.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}