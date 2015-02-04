'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var LocLandUnitSchema = new Schema({
  key: String,
  loc: String,
  unknown: String
});

module.exports = mongoose.model('loc_land_units', LocLandUnitSchema);