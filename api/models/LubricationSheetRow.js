/**
 * LubricationSheetRow.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    application:{
      type:'string',
    },
    amount:{
      type:'number',
    },

    /*
      Esta fila tiene solamente una hoja de lubricacion asociada
    */
    lubricationSheet:{
      model:'lubricationSheet',
    },
    /*
      Esta fila tiene solamente un repuesto asociado
    */
    sparePart:{
      model: 'sparePart', //Modelo   // Nombre de la lista del otro modelo
    },

  },

};
