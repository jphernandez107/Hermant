/**
 * ConstructionSite.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    code:{
        type: 'string',
    },
    name:{
        type:'string',
    },
    district:{  //localidad
        type: 'string',
    },
    province:{
        type: 'string',
    },
    initDate:{
        type: 'string',
    },
    finishDate:{
        type: 'string',
    },
    maxTemp:{
        type: 'number',
    },
    minTemp:{
        type: 'number',
    },
    altitude:{
        type: 'number',
    },
    distance:{  // Al taller
      type: 'number',
    },
    observations:{
        type: 'string',
    },

  },

};
