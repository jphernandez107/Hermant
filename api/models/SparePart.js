

module.exports = {
    attributes: {

        internalCode:{
            type:'string',
        },

        externalCode:{
            type:'string',
        },

        type:{
            type:'string',
        },

        application:{
            type:'string',
        },

        brand:{
            type:'string',
        },

        model:{
            type:'string',
        },

        stock:{
            type:'number',
        },

        pricePerUnit:{
            type:'number',
        },


        /*
          Creamos una lista de filas de planillas de lubricacion en las que
          aparece este repuesto.
          Cada vez que este repuesto se asocia a un equipo en particular a traves
          de su planilla de lubricacion, se crea una nueva fila de hoja de lubricacion
          con este repuesto.
        */
        lubricationSheetRows:{
          collection: 'lubricationSheetRow',
          via: 'sparePart',
        },

    }
}
