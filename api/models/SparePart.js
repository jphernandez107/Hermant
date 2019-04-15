

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


        /*
          Creamos una lista de planillas de lubricacion para cada repuesto
        */
        lubricationSheets:{
          collection: 'lubricationSheet',
          via: 'spareParts',
        },

    }
}
