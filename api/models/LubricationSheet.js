/**
 * LubricationSheet.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    // Esta vinculado a una maquina

    /*
      Esta hoja de lub puede pertenecer a varios equipos
      (Siempre que sean misma marca y modelo)
    */
    equipments:{
      collection: 'equipment',
      via: 'lubricationSheet',
    },
    /*
      Esta hoja de lub tiene muchas filas asociadas
    */
    lubricationSheetRows:{
      collection: 'lubricationSheetRow', //Modelo
      via: 'lubricationSheet',    // Nombre de la lista del otro modelo
    },


  },

};
