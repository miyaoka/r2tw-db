'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UnitShieldTypeSchema = new Schema({
  key: String,
  shield_defence_value: Number,
  shield_armour_value: Number,
  audio_material: String,
  unknown: String
});

module.exports = mongoose.model('unit_shield_types', UnitShieldTypeSchema);