/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function() {
  var complete = 0;

   if (await User.count() > 0) {
   }else{
     await User.createEach([
       { dni: '0', password: '0', name: 'admin', lastname: 'admin', permissions:'admin', },
       { dni: '1', password: '1', name: 'ingeniero', lastname: 'ingeniero', permissions:'engineer',},
       { dni: '2', password: '2', name: 'mantenimiento', lastname: 'mantenimiento', permissions:'maintManager', },
       { dni: '3', password: '3', name: 'obra', lastname: 'obra', permissions:'constManager', },
       { dni: '4', password: '4', name: 'deposito', lastname: 'deposito', permissions:'depositManager', },
     ]);
   }
   if (await Equipment.count() > 0) {
   }else{
     await Equipment.createEach([
       { code: 'FDR386', brand: 'Komatsu', model: 'AR-304', designation: 'Excavadora', serialNumber:'019238201', origin:'Brasil', manufDate:'2019', serviceDate:'2019', power:'200', price:'2000000', observations:'Equipo por default' },
       { code: 'SDD034', brand: 'Samsung', model: 'GT-502', designation: 'Topadora', serialNumber:'019123334', origin:'Mexico', manufDate:'2019', serviceDate:'2019', power:'220', price:'3000000', observations:'Equipo por default' },
       { code: 'TTR440', brand: 'Caterpillar', model: 'KR-123', designation: 'Cargadora', serialNumber:'12339033', origin:'Brasil', manufDate:'2019', serviceDate:'2019', power:'120', price:'1500000', observations:'Equipo por default' },
       { code: 'FDR230', brand: 'Komatsu', model: 'AR-603', designation: 'Retroexcavadora', serialNumber:'019223949', origin:'Brasil', manufDate:'2019', serviceDate:'2019', power:'190', price:'2000000', observations:'Equipo por default' },

     ]);
   }
   if (await SparePart.count() > 0) {
   }else{
     await SparePart.createEach([
       { internalCode: 'KOD345', externalCode: '1239390', type: 'filter', application: 'oil', brand:'YPF', model:'Y220', stock:'40', },
       { internalCode: 'DOS233', externalCode: '5230002', type: 'oil', application: 'motor', brand:'SHELL', model:'S520', stock:'100', },
       { internalCode: 'PDD403', externalCode: '1232113', type: 'liquid', application: 'coolant', brand:'YPF', model:'R120', stock:'40', },
       { internalCode: 'KER203', externalCode: '1250033', type: 'filter', application: 'oil', brand:'YPF', model:'C403', stock:'19', },
       { internalCode: 'KER203', externalCode: '1250033', type: 'filter', application: 'air', brand:'YPF', model:'C321', stock:'19', },
       { internalCode: 'KER203', externalCode: '1250033', type: 'filter', application: 'fuel', brand:'YPF', model:'C429', stock:'19', },
       { internalCode: 'KER203', externalCode: '1250033', type: 'filter', application: 'other', brand:'YPF', model:'N103', stock:'19', },
       { internalCode: 'KER203', externalCode: '1250033', type: 'oil', application: 'hydraulic', brand:'YPF', model:'H113', stock:'19', },
       { internalCode: 'KER203', externalCode: '1250033', type: 'oil', application: 'transmission', brand:'YPF', model:'T220', stock:'19', },
       { internalCode: 'KER203', externalCode: '1250033', type: 'oil', application: 'other', brand:'YPF', model:'O093', stock:'19', },
       { internalCode: 'KER203', externalCode: '1250033', type: 'liquid', application: 'break', brand:'YPF', model:'B476', stock:'19', },
       { internalCode: 'KER203', externalCode: '1250033', type: 'oil', application: 'motor', brand:'YPF', model:'LT123', stock:'19', },

     ]);
   }
   if (await ConstructionSite.count() > 0) {
   }else{
     await ConstructionSite.createEach([
       { code: 'T01', name: 'Taller', province: 'Jujuy', district: 'S.S. de Jujuy', distance:'0', initDate:'-', finishDate:'-', maxTemp:'28', minTemp:'6', altitude:'1250', },
       { code: 'C01', name: 'Cantera Rio Grande', province: 'Jujuy', district: 'S.S. de Jujuy', distance:'7', initDate:'2019', finishDate:'2022', maxTemp:'28', minTemp:'6', altitude:'1250', },
       { code: 'A03', name: 'Mina Aguilar', province: 'Jujuy', district: 'Humahuaca', distance:'234', initDate:'2017', finishDate:'2020', maxTemp:'25', minTemp:'-10', altitude:'3980', },
       { code: 'S02', name: 'Dique Susques', province: 'Jujuy', district: 'Susques', distance:'203', initDate:'2019', finishDate:'2021', maxTemp:'22', minTemp:'-8', altitude:'3900', },
     ]);
   }
   if (await LubricationSheet.count() > 0){
   }else{
     await LubricationSheet.createEach([
       {"createdAt":1555705092194,"updatedAt":1555705092194,"id":1,"_id":1},
     ]);
     await LubricationSheet.addToCollection(1, 'equipments').members([1]);
   }
   if (await LubricationSheetRow.count() > 0){
   }else{
     await LubricationSheetRow.createEach([
       {"createdAt":1555705092213,"updatedAt":1555705092213,"id":1,"application":"Primario","amount":1,"lubricationSheet":1,"sparePart":5,"_id":1},
       {"createdAt":1555705092226,"updatedAt":1555705092226,"id":2,"application":"Primario","amount":1,"lubricationSheet":1,"sparePart":1,"_id":2},
       {"createdAt":1555705092235,"updatedAt":1555705092235,"id":3,"application":"Secundario","amount":1,"lubricationSheet":1,"sparePart":4,"_id":3},
       {"createdAt":1555705092244,"updatedAt":1555705092244,"id":4,"application":"Primario","amount":1,"lubricationSheet":1,"sparePart":6,"_id":4},
       {"createdAt":1555705092257,"updatedAt":1555705092257,"id":5,"application":"Primario","amount":1,"lubricationSheet":1,"sparePart":7,"_id":5},
       {"createdAt":1555705092267,"updatedAt":1555705092267,"id":6,"application":"","amount":15,"lubricationSheet":1,"sparePart":2,"_id":6},
       {"createdAt":1555705092280,"updatedAt":1555705092280,"id":7,"application":"","amount":3,"lubricationSheet":1,"sparePart":8,"_id":7},
       {"createdAt":1555705092293,"updatedAt":1555705092293,"id":8,"application":"","amount":2,"lubricationSheet":1,"sparePart":9,"_id":8},
       {"createdAt":1555705092310,"updatedAt":1555705092310,"id":9,"application":"Primario","amount":3,"lubricationSheet":1,"sparePart":10,"_id":9},
       {"createdAt":1555705092319,"updatedAt":1555705092319,"id":10,"application":"Refrigerante","amount":3,"lubricationSheet":1,"sparePart":3,"_id":10},
       {"createdAt":1555705092331,"updatedAt":1555705092331,"id":11,"application":"Freno","amount":2,"lubricationSheet":1,"sparePart":11,"_id":11},
     ]);
   }
   if (await MaintenanceFrequency.count() > 0){
   }else{
     await MaintenanceFrequency.createEach([
       {"createdAt":1555705092216,"updatedAt":1555705092216,"id":1,"frequency":"250","change":true,"lubricationSheetRow":1,"_id":1},
       {"createdAt":1555705092219,"updatedAt":1555705092219,"id":2,"frequency":"500","change":false,"lubricationSheetRow":1,"_id":2},
       {"createdAt":1555705092222,"updatedAt":1555705092222,"id":3,"frequency":"1000","change":true,"lubricationSheetRow":1,"_id":3},
       {"createdAt":1555705092224,"updatedAt":1555705092224,"id":4,"frequency":"2000","change":false,"lubricationSheetRow":1,"_id":4},
       {"createdAt":1555705092227,"updatedAt":1555705092227,"id":5,"frequency":"250","change":true,"lubricationSheetRow":2,"_id":5},
       {"createdAt":1555705092229,"updatedAt":1555705092229,"id":6,"frequency":"500","change":true,"lubricationSheetRow":2,"_id":6},
       {"createdAt":1555705092230,"updatedAt":1555705092230,"id":7,"frequency":"1000","change":false,"lubricationSheetRow":2,"_id":7},
       {"createdAt":1555705092232,"updatedAt":1555705092232,"id":8,"frequency":"2000","change":false,"lubricationSheetRow":2,"_id":8},
       {"createdAt":1555705092237,"updatedAt":1555705092237,"id":9,"frequency":"250","change":false,"lubricationSheetRow":3,"_id":9},
       {"createdAt":1555705092238,"updatedAt":1555705092238,"id":10,"frequency":"500","change":false,"lubricationSheetRow":3,"_id":10},
       {"createdAt":1555705092240,"updatedAt":1555705092240,"id":11,"frequency":"1000","change":true,"lubricationSheetRow":3,"_id":11},
       {"createdAt":1555705092242,"updatedAt":1555705092242,"id":12,"frequency":"2000","change":true,"lubricationSheetRow":3,"_id":12},
       {"createdAt":1555705092248,"updatedAt":1555705092248,"id":13,"frequency":"250","change":true,"lubricationSheetRow":4,"_id":13},
       {"createdAt":1555705092250,"updatedAt":1555705092250,"id":14,"frequency":"500","change":false,"lubricationSheetRow":4,"_id":14},
       {"createdAt":1555705092252,"updatedAt":1555705092252,"id":15,"frequency":"1000","change":true,"lubricationSheetRow":4,"_id":15},
       {"createdAt":1555705092255,"updatedAt":1555705092255,"id":16,"frequency":"2000","change":false,"lubricationSheetRow":4,"_id":16},
       {"createdAt":1555705092259,"updatedAt":1555705092259,"id":17,"frequency":"250","change":true,"lubricationSheetRow":5,"_id":17},
       {"createdAt":1555705092261,"updatedAt":1555705092261,"id":18,"frequency":"500","change":true,"lubricationSheetRow":5,"_id":18},
       {"createdAt":1555705092263,"updatedAt":1555705092263,"id":19,"frequency":"1000","change":false,"lubricationSheetRow":5,"_id":19},
       {"createdAt":1555705092265,"updatedAt":1555705092265,"id":20,"frequency":"2000","change":false,"lubricationSheetRow":5,"_id":20},
       {"createdAt":1555705092270,"updatedAt":1555705092270,"id":21,"frequency":"250","change":true,"lubricationSheetRow":6,"_id":21},
       {"createdAt":1555705092272,"updatedAt":1555705092272,"id":22,"frequency":"500","change":false,"lubricationSheetRow":6,"_id":22},
       {"createdAt":1555705092275,"updatedAt":1555705092275,"id":23,"frequency":"1000","change":true,"lubricationSheetRow":6,"_id":23},
       {"createdAt":1555705092279,"updatedAt":1555705092279,"id":24,"frequency":"2000","change":false,"lubricationSheetRow":6,"_id":24},
       {"createdAt":1555705092282,"updatedAt":1555705092282,"id":25,"frequency":"250","change":true,"lubricationSheetRow":7,"_id":25},
       {"createdAt":1555705092284,"updatedAt":1555705092284,"id":26,"frequency":"500","change":false,"lubricationSheetRow":7,"_id":26},
       {"createdAt":1555705092286,"updatedAt":1555705092286,"id":27,"frequency":"1000","change":true,"lubricationSheetRow":7,"_id":27},
       {"createdAt":1555705092288,"updatedAt":1555705092288,"id":28,"frequency":"2000","change":false,"lubricationSheetRow":7,"_id":28},
       {"createdAt":1555705092295,"updatedAt":1555705092295,"id":29,"frequency":"250","change":true,"lubricationSheetRow":8,"_id":29},
       {"createdAt":1555705092297,"updatedAt":1555705092297,"id":30,"frequency":"500","change":false,"lubricationSheetRow":8,"_id":30},
       {"createdAt":1555705092307,"updatedAt":1555705092307,"id":31,"frequency":"1000","change":true,"lubricationSheetRow":8,"_id":31},
       {"createdAt":1555705092309,"updatedAt":1555705092309,"id":32,"frequency":"2000","change":false,"lubricationSheetRow":8,"_id":32},
       {"createdAt":1555705092312,"updatedAt":1555705092312,"id":33,"frequency":"250","change":false,"lubricationSheetRow":9,"_id":33},
       {"createdAt":1555705092314,"updatedAt":1555705092314,"id":34,"frequency":"500","change":false,"lubricationSheetRow":9,"_id":34},
       {"createdAt":1555705092316,"updatedAt":1555705092316,"id":35,"frequency":"1000","change":false,"lubricationSheetRow":9,"_id":35},
       {"createdAt":1555705092317,"updatedAt":1555705092317,"id":36,"frequency":"2000","change":true,"lubricationSheetRow":9,"_id":36},
       {"createdAt":1555705092321,"updatedAt":1555705092321,"id":37,"frequency":"250","change":true,"lubricationSheetRow":10,"_id":37},
       {"createdAt":1555705092324,"updatedAt":1555705092324,"id":38,"frequency":"500","change":false,"lubricationSheetRow":10,"_id":38},
       {"createdAt":1555705092326,"updatedAt":1555705092326,"id":39,"frequency":"1000","change":true,"lubricationSheetRow":10,"_id":39},
       {"createdAt":1555705092328,"updatedAt":1555705092328,"id":40,"frequency":"2000","change":false,"lubricationSheetRow":10,"_id":40},
       {"createdAt":1555705092333,"updatedAt":1555705092333,"id":41,"frequency":"250","change":false,"lubricationSheetRow":11,"_id":41},
       {"createdAt":1555705092334,"updatedAt":1555705092334,"id":42,"frequency":"500","change":true,"lubricationSheetRow":11,"_id":42},
       {"createdAt":1555705092337,"updatedAt":1555705092337,"id":43,"frequency":"1000","change":false,"lubricationSheetRow":11,"_id":43},
       {"createdAt":1555705092340,"updatedAt":1555705092340,"id":44,"frequency":"2000","change":true,"lubricationSheetRow":11,"_id":44},
     ]);
   }


   return;


};
