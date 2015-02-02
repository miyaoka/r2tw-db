'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MeleeWeaponSchema = new Schema({
  armour_penetrating: String,
  armour_piercing: String,
  bonus_v_elephants: Number,
  bonus_v_cavalry: Number,
  bonus_v_infantry: Number,
  key: String,
  damage: Number,
  ap_damage: Number,
  first_strike: Number,
  shield_piercing: String,
  weapon_length: Number,
  melee_weapon_type: String,
  audio_material: String
});

module.exports = mongoose.model('melee_weapons', MeleeWeaponSchema);