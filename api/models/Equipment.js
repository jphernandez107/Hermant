/**
 * Equipment.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    code:{
        type:'string',
    },
    brand:{
        type:'string',
        required: true
    },
    model:{
        type:'string',
        defaultsTo: '-',
    },
    designation:{
        type:'string',
    },
    totalHours:{
        type:'number',
        defaultsTo: 0,
    },
    partialHours:{
        type:'number',
        defaultsTo: 0,
    },

    serialNumber:{
        type:'string',
    },
    origin:{
        type:'string',
    },
    manufDate:{
        type:'string',
    },
    serviceDate:{
        type:'string',
    },
    power:{
        type:'string',
    },
    weight:{
        type:'number',
    },
    price:{
        type:'number',
    },
    observations:{
        type:'string',
    },

    /*
      Este equipo tiene una unica hoja de lubricacion asociada
    */
    lubricationSheet:{
      model:'lubricationSheet',
    },
    equipmentUseHours:{
      collection: 'equipmentUseHour',
      via: 'equipment',
    },
    maintenances:{
      collection: 'maintenance',
      via: 'equipment'
    }

  },

};
