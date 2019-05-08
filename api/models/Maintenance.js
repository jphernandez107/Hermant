/**
 * Maintenance.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    date:{
      type:'string',
    },
    maintenanceType:{
      type:'number',
    },
    maintenanceFrequency:{
      type:'number',
    },
    observations:{
      type:'string',
    },
    totalHoursEquipment:{
      type:'number',
    },
    partialHoursEquipment:{
      type:'number',
    },
    maintenanceCost:{
      type:'number',
    },
    maintenanceTime:{
      type:'number',
    },
    equipment:{
      model: 'equipment',
    },
    maintenanceRows:{
      collection: 'maintenanceRow', //Modelo
      via: 'maintenance',    // Nombre de la lista del otro modelo
    },

  },

};
