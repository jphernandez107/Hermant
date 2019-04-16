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
  '/user/signin': {
    view: 'pages/user/signin',
    locals: {
      layout: 'layouts/signin_layout'
    }
  },
  'GET /user/signup': {
    //view: 'pages/signup',
    controller: 'user',
    action: 'signup_view',
  },
  'POST /user/signup': {
    controller: 'user',
    action: 'signup'
  },
  '/user/login': {
      controller: 'user',
      action : 'login'
  },
  '/user/signout':{
    controller: 'user',
    action: 'signout',
  },
  'GET /user/resetpass':{
    controller:'user',
    action: 'reset_pass_view',
  },
  'POST /user/resetpass':{
    controller:'user',
    action: 'reset_pass',
  },
  'GET /user/changepass':{
    controller:'user',
    action: 'change_pass_view',
  },
  'POST /user/changepass':{
    controller:'user',
    action: 'change_pass',
  },
  '/user/list':{
    controller:'user',
    action: 'list_view',
  },
  '/user/delete/:idUser':{
    controller:'user',
    action: 'delete',
  },
  'GET /user/edit/:idUser':{
    controller:'user',
    action: 'edit',
  },
  'POST /user/edit/:idUser': {
    controller: 'user',
    action: 'edited'
  },

  '/equipment/list':{
    controller: 'equipment',
    action: 'list_view',
  },
  'GET /equipment/new':{
    controller: 'equipment',
    action: 'new_equipment',
  },
  'POST /equipment/new':{
    controller: 'equipment',
    action: 'create',
  },
  '/equipment/details/:idEquip':{
    controller: 'equipment',
    action: 'details_view',
  },
  '/equipment/delete/:idEquip':{
    controller: 'equipment',
    action: 'delete',
  },


  '/parts/list':{
    controller: 'SparePart',
    action: 'list_view',
  },
  'GET /parts/new':{
    controller: 'SparePart',
    action: 'new_part',
  },
  'POST /parts/new':{
    controller: 'SparePart',
    action: 'create',
  },

  '/site/list':{
    controller: 'ConstructionSite',
    action: 'list_view',
  },
  'GET /site/new':{
    controller: 'ConstructionSite',
    action: 'new_site',
  },
  'POST /site/new':{
    controller: 'ConstructionSite',
    action: 'create',
  },
  '/site/details/:idSite':{
    controller: 'ConstructionSite',
    action: 'details_view',
  },
  '/site/delete/:idSite':{
    controller: 'ConstructionSite',
    action: 'delete',
  },


  'GET /lubsheet/new/:idEquip':{
    controller: 'lubricationSheet',
    action: 'lubsheet_view',
  },
  'POST /lubsheet/new/:idEquip':{
    controller: 'lubricationSheet',
    action: 'lubsheet_new',
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
