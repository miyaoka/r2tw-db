'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MainUnitSchema = new Schema({
  unknown: String,
  campaign_cap: Number,
  caste: String,
  create_time: Number,
  is_naval: String,
  land_unit: String,
  num_men: Number,
  multiplayer_cap: Number,
  multiplayer_cost:Number,
  naval_unit: String,
  num_ships: Number,
  min_men_per_ship: Number,
  max_men_per_ship: Number,
  prestige: Number,
  recruitment_cost: Number,
  unknown16: String,
  unknown17: String,
  unit: String,
  upkeep_cost: Number,
  weight: String,
  campaign_total_cap: Number,
  unknown22: Boolean,
  unknown23: Boolean,
  unknown24: Boolean,
  special_edition_mask: Number,
  unique_index: Number,
  prestige27: Number,
  in_encyclopedia: Boolean,
  region_unit_resource_requirement: String,
  audio_language: String
});

module.exports = mongoose.model('main_units', MainUnitSchema);