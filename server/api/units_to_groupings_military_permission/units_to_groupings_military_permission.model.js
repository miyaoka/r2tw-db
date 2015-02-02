'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UnitsToGroupingsMilitaryPermissionSchema = new Schema({
  unit: String,
  military_group: String
});

module.exports = mongoose.model('units_to_groupings_military_permissions', UnitsToGroupingsMilitaryPermissionSchema);