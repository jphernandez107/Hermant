/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'pages/index',
  },
  '/signin': {
    view: 'pages/signin',
    locals: {
      layout: 'layouts/signin_layout'
    }
  },
  '/signup': {
    //view: 'pages/signup',
    controller: 'user',
    action: 'signup_view',
  },
  '/signup/newUser': {
    controller: 'user',
    action: 'signup'
  },
  '/login': {
      controller: 'user',
      action : 'login'
  },
  '/signout':{
    controller: 'user',
    action: 'signout',
  },


  '/equipment/list':{
    controller: 'equipment',
    action: 'list_view',
  },
  '/equipment/new':{
    controller: 'equipment',
    action: 'new_equipment',
  },
  '/equipment/new/create':{
    controller: 'equipment',
    action: 'create',
  },
  '/equipment/update/:id/:d/:b':{
    controller: 'equipment',
    action: 'update',
  },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
