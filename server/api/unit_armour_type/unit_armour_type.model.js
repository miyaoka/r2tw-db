'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UnitArmourTypeSchema = new Schema({
  armour_value: Number,
  bonus_vs_missiles: Number,
  key: String,
  weak_v_missiles: Number,
  audio_material: String
});

module.exports = mongoose.model('unit_armour_types', UnitArmourTypeSchema);