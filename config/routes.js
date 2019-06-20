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

  '/': {
    controller: 'EquipmentUseHour',
    action: 'show_calendar',
  },
  '/calendar/events': {
    controller: 'EquipmentUseHour',
    action: 'readJsonFile',
  },

  '/calendar': {
    controller: 'EquipmentUseHour',
    action: 'show_calendar',
  },
  '/user/signin': {
    view: 'pages/user/signin',
    locals: {
      layout: 'layouts/signin_layout'
    }
  },
  'GET /user/signup': {
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

  '/equipmentusehour/list':{
    controller: 'EquipmentUseHour',
    action: 'list_view',
  },
  'POST /equipmentusehour/new/:idEquip':{
    controller: 'EquipmentUseHour',
    action: 'new_use_hour',
  },
  'GET /equipmentusehour/reloadevents':{
    controller: 'EquipmentUseHour',
    action: 'reload_events',
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
  '/parts/delete/:idPart':{
    controller: 'SparePart',
    action: 'delete',
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
  'POST /site/details/add/:idEquip/:idSite':{
    controller: 'equipment',
    action: 'setSite',
  },
  'GET /site/details/delete/:idEquip/:idSite':{
    controller: 'equipment',
    action: 'deleteSite',
  },


  'GET /lubsheet/new/:idEquip':{
    controller: 'lubricationSheet',
    action: 'lubsheet_view',
  },
  'POST /lubsheet/new/:idEquip':{
    controller: 'lubricationSheet',
    action: 'lubsheet_new',
  },
  'GET /lubsheet/details/:idEquip/:idLubSheet':{
    controller: 'lubricationSheet',
    action: 'lubsheet_details',
  },

  'GET /maintenance/new/:idEquip':{
    controller: 'maintenance',
    action: 'maintenance_view',
  },
  'POST /maintenance/new/:idEquip':{
    controller: 'maintenance',
    action: 'maintenance_new',
  },
  'GET /maintenance/details/:idEquip/:idMaintenance':{
    controller: 'maintenance',
    action: 'maintenance_details',
},
'GET /maintenance/delete/:idEquip/:idMaintenance':{
  controller: 'maintenance',
  action: 'maintenance_delete',
},
'GET /repair/new/:idEquip':{
  controller: 'repair',
  action: 'repair_view',
},
'POST /repair/new/:idEquip':{
  controller: 'repair',
  action: 'repair_new',
},
'GET /repair/details/:idEquip/:idRepairs':{
  controller: 'repair',
  action: 'repair_details',
},
'GET /repair/delete/:idEquip/:idRepairs':{
  controller: 'repair',
  action: 'repair_delete',
},
};
