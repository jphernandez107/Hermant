/**
 * LubricationSheet.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    // Puede llevar muchos filtros,
    // Puede llevar muchos aceites,
    // Puede llevar muchos liquidos,

    // Esta vinculado a una maquina

    equipments:{
      collection: 'equipment',
      via: 'lubricationSheet',
    },
    spareParts:{
      collection: 'sparePart', //Modelo
      via: 'lubricationSheets',    // Nombre de la lista del otro modelo
    },


  },

};
