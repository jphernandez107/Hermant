/**
 * Repair.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      date:{
        type:'string',
      },

      repairTime:{
          type: 'number',
      },

      totalHoursEquipment:{
          type:'number'
      },

      totalCost:{
          type: 'number',
      },

      repairRows: {
          collection: 'repairRow',
          via: 'repair'
      },

      equipment :{
          model : 'equipment'
      }


  },

};
