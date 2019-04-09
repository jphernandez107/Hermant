/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {

  // By convention, this is a good place to set up fake data during development.
  //
  // For example:
  // ```
  // // Set up fake development data (or if we already have some, avast)
   if (await User.count() > 0) {
     return;
   }
  //
   await User.createEach([
     { dni: '0', password: '0', name: 'admin', lastname: 'admin', permissions:'admin', },
     { dni: '1', password: '1', name: 'ingeniero', lastname: 'ingeniero', permissions:'engineer',},
     { dni: '2', password: '2', name: 'mantenimiento', lastname: 'mantenimiento', permissions:'maintManager', },
     { dni: '3', password: '3', name: 'obra', lastname: 'obra', permissions:'constManager', },
     { dni: '4', password: '4', name: 'deposito', lastname: 'deposito', permissions:'depositManager', },
     // etc.
   ]);
  // ```

};
