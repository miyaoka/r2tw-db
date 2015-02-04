'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LocFactionSchema = new Schema({
  key: String,
  loc: String,
  unknown: String
});

module.exports = mongoose.model('loc_factions', LocFactionSchema);