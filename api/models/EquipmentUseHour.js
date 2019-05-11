/**
 * EquipmentUseHour.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    date:{
      type:'string',
    },
    hours:{
      type:'number',
    },


    constructionSite:{
      model: 'constructionSite',
    },
    equipment:{
      model: 'equipment',
    },

  },

};
