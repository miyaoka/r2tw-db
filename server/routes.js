/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/unit_shield_types', require('./api/unit_shield_type'));
  app.use('/api/unit_armour_types', require('./api/unit_armour_type'));
  app.use('/api/melee_weapons', require('./api/melee_weapon'));
  app.use('/api/units_to_groupings_military_permissions', require('./api/units_to_groupings_military_permission'));
  app.use('/api/factions', require('./api/faction'));
  app.use('/api/land_units', require('./api/land_unit'));
  app.use('/api/main_units', require('./api/main_unit'));
  app.use('/api/things', require('./api/thing'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
