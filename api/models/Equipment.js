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

    // Codigo de Filtros y aceites

    codFAire1:{
        type:'string',
    },
    codFAire2:{
        type:'string',
    },
    codFComb1:{
        type:'string',
    },
    codFComb2:{
        type:'string',
    },
    codFComb3:{
        type:'string',
    },
    codFComb4:{
        type:'string',
    },
    codFAceiteMotor:{
        type:'string',
    },
    codFAceiteHid1:{
        type:'string',
    },
    codFAceiteHid2:{
        type:'string',
    },

    codAceiteMotor:{
        type:'string',
    },
    codAceiteHid:{
        type:'string',
    },
    codAceiteDif:{
        type:'string',
    },
    codAceiteTrans:{
        type:'string',
    },
    codAceiteMandoFinal:{
        type:'string',
    },

    cantAceiteMotor:{
        type:'number',
    },
    cantAceiteHid:{
        type:'number',
    },
    cantAceiteDif:{
        type:'number',
    },
    cantAceiteTrans:{
        type:'number',
    },
    cantAceiteMandoFinal:{
        type:'number',
    },

    codLiqRefrigerante:{
        type:'string',
    },
    codLiqFreno:{
        type:'string',
    },

    cantLiqRefrigerante:{
        type:'number',
    },
    cantLiqFreno:{
        type:'number',
    },

    indiceMantenibilidad:{    // Costo de mantenimiento en relacion con la produccion -- Gasto en mant + rep / horas totales de la maquina
        type:'number',
    },
    indiceReparabilidad:{   // time Rep de fallos / time entre fallas
        type:'number'
    },


    /*mantenimientos:{
        collection:'mantenimiento',
        via:'maquina',
    },

    obra:{
        model:'obra',
    },*/

  },

};
