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
       {"createdAt":1556998584257,"updatedAt":1556998584257,"id":1,"internalCode":"KOD345","externalCode":"1239390","type":"filter","application":"oil","brand":"YPF","model":"Y220","stock":40,"pricePerUnit":29,"_id":1},
       {"createdAt":1556998584257,"updatedAt":1556998584257,"id":2,"internalCode":"DOS233","externalCode":"5230002","type":"oil","application":"motor","brand":"SHELL","model":"S520","stock":100,"pricePerUnit":11,"_id":2},
       {"createdAt":1556998584257,"updatedAt":1556998584257,"id":3,"internalCode":"PDD403","externalCode":"1232113","type":"liquid","application":"coolant","brand":"YPF","model":"R120","stock":40,"pricePerUnit":7,"_id":3},
       {"createdAt":1556998584257,"updatedAt":1556998584257,"id":4,"internalCode":"KER203","externalCode":"1250033","type":"filter","application":"oil","brand":"YPF","model":"C403","stock":19,"pricePerUnit":31,"_id":4},
       {"createdAt":1556998584257,"updatedAt":1556998584257,"id":5,"internalCode":"KER203","externalCode":"1250033","type":"filter","application":"air","brand":"YPF","model":"C321","stock":19,"pricePerUnit":75,"_id":5},
       {"createdAt":1556998584257,"updatedAt":1556998584257,"id":6,"internalCode":"KER203","externalCode":"1250033","type":"filter","application":"fuel","brand":"YPF","model":"C429","stock":0,"pricePerUnit":17.5,"_id":6},
       {"createdAt":1556998584257,"updatedAt":1556998584257,"id":7,"internalCode":"KER203","externalCode":"1250033","type":"filter","application":"other","brand":"YPF","model":"N103","stock":19,"pricePerUnit":15,"_id":7},
       {"createdAt":1556998584257,"updatedAt":1556998584257,"id":8,"internalCode":"KER203","externalCode":"1250033","type":"oil","application":"hydraulic","brand":"YPF","model":"H113","stock":19,"pricePerUnit":3.75,"_id":8},
       {"createdAt":1556998584257,"updatedAt":1556998584257,"id":9,"internalCode":"KER203","externalCode":"1250033","type":"oil","application":"transmission","brand":"YPF","model":"T220","stock":19,"pricePerUnit":3.75,"_id":9},
       {"createdAt":1556998584257,"updatedAt":1556998584257,"id":10,"internalCode":"KER203","externalCode":"1250033","type":"oil","application":"other","brand":"YPF","model":"O093","stock":19,"pricePerUnit":2,"_id":10},
       {"createdAt":1556998584257,"updatedAt":1556998584257,"id":11,"internalCode":"KER203","externalCode":"1250033","type":"liquid","application":"break","brand":"YPF","model":"B476","stock":19,"pricePerUnit":5.75,"_id":11},
       {"createdAt":1556998584257,"updatedAt":1556998584257,"id":12,"internalCode":"KER203","externalCode":"1250033","type":"oil","application":"motor","brand":"YPF","model":"LT123","stock":19,"pricePerUnit":12.5,"_id":12},
       {"createdAt":1556998584257,"updatedAt":1556998584257,"id":13,"internalCode":"OLE325","externalCode":"1250033","type":"liquid","application":"other","brand":"YPF","model":"OL493","stock":19,"pricePerUnit":3,"_id":13},

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
       {"createdAt":1556999824469,"updatedAt":1556999824469,"id":2,"_id":2},
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

       {"sparePart":5,"application":"Primario","amount":1,"lubricationSheet":2,"createdAt":1556999824476,"updatedAt":1556999824476,"id":12,"_id":12},
       {"sparePart":4,"application":"Primario","amount":1,"lubricationSheet":2,"createdAt":1556999824488,"updatedAt":1556999824488,"id":13,"_id":13},
       {"sparePart":1,"application":"Secundario","amount":1,"lubricationSheet":2,"createdAt":1556999824496,"updatedAt":1556999824496,"id":14,"_id":14},
       {"sparePart":6,"application":"Primario","amount":1,"lubricationSheet":2,"createdAt":1556999824504,"updatedAt":1556999824504,"id":15,"_id":15},
       {"sparePart":7,"application":"Primario","amount":1,"lubricationSheet":2,"createdAt":1556999824517,"updatedAt":1556999824517,"id":16,"_id":16},
       {"sparePart":2,"application":"normal","amount":15,"lubricationSheet":2,"createdAt":1556999824523,"updatedAt":1556999824523,"id":17,"_id":17},
       {"sparePart":12,"application":"lowTemperature","amount":15,"lubricationSheet":2,"createdAt":1556999824524,"updatedAt":1556999824524,"id":18,"_id":18},
       {"sparePart":8,"application":"normal","amount":10,"lubricationSheet":2,"createdAt":1556999824548,"updatedAt":1556999824548,"id":19,"_id":19},
       {"sparePart":9,"application":"normal","amount":4,"lubricationSheet":2,"createdAt":1556999824566,"updatedAt":1556999824566,"id":20,"_id":20},
       {"sparePart":10,"application":"Primario","amount":2,"lubricationSheet":2,"createdAt":1556999824574,"updatedAt":1556999824574,"id":21,"_id":21},
       {"sparePart":10,"application":"Secundario","amount":3,"lubricationSheet":2,"createdAt":1556999824586,"updatedAt":1556999824586,"id":22,"_id":22},
       {"sparePart":10,"application":"Terciario","amount":1,"lubricationSheet":2,"createdAt":1556999824593,"updatedAt":1556999824593,"id":23,"_id":23},
       {"sparePart":3,"application":"Primario","amount":2,"lubricationSheet":2,"createdAt":1556999824601,"updatedAt":1556999824601,"id":24,"_id":24},
       {"sparePart":11,"application":"Primario","amount":3,"lubricationSheet":2,"createdAt":1556999824609,"updatedAt":1556999824609,"id":25,"_id":25},
       {"sparePart":13,"application":"Primario","amount":4,"lubricationSheet":2,"createdAt":1556999824617,"updatedAt":1556999824617,"id":26,"_id":26},

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

       {"type":1,"frequency":250,"change":true,"lubricationSheetRow":12,"createdAt":1556999824481,"updatedAt":1556999824481,"id":45,"_id":45},
       {"type":2,"frequency":500,"change":false,"lubricationSheetRow":12,"createdAt":1556999824483,"updatedAt":1556999824483,"id":46,"_id":46},
       {"type":3,"frequency":1000,"change":false,"lubricationSheetRow":12,"createdAt":1556999824485,"updatedAt":1556999824485,"id":47,"_id":47},
       {"type":4,"frequency":2000,"change":true,"lubricationSheetRow":12,"createdAt":1556999824486,"updatedAt":1556999824486,"id":48,"_id":48},
       {"type":5,"frequency":4000,"change":true,"lubricationSheetRow":12,"createdAt":1556999824487,"updatedAt":1556999824487,"id":49,"_id":49},
       {"type":1,"frequency":250,"change":false,"lubricationSheetRow":13,"createdAt":1556999824489,"updatedAt":1556999824489,"id":50,"_id":50},
       {"type":2,"frequency":500,"change":false,"lubricationSheetRow":13,"createdAt":1556999824490,"updatedAt":1556999824490,"id":51,"_id":51},
       {"type":3,"frequency":1000,"change":false,"lubricationSheetRow":13,"createdAt":1556999824492,"updatedAt":1556999824492,"id":52,"_id":52},
       {"type":4,"frequency":2000,"change":true,"lubricationSheetRow":13,"createdAt":1556999824493,"updatedAt":1556999824493,"id":53,"_id":53},
       {"type":5,"frequency":4000,"change":false,"lubricationSheetRow":13,"createdAt":1556999824495,"updatedAt":1556999824495,"id":54,"_id":54},
       {"type":1,"frequency":250,"change":false,"lubricationSheetRow":14,"createdAt":1556999824497,"updatedAt":1556999824497,"id":55,"_id":55},
       {"type":2,"frequency":500,"change":true,"lubricationSheetRow":14,"createdAt":1556999824498,"updatedAt":1556999824498,"id":56,"_id":56},
       {"type":3,"frequency":1000,"change":false,"lubricationSheetRow":14,"createdAt":1556999824501,"updatedAt":1556999824501,"id":57,"_id":57},
       {"type":4,"frequency":2000,"change":false,"lubricationSheetRow":14,"createdAt":1556999824502,"updatedAt":1556999824502,"id":58,"_id":58},
       {"type":5,"frequency":4000,"change":true,"lubricationSheetRow":14,"createdAt":1556999824503,"updatedAt":1556999824503,"id":59,"_id":59},
       {"type":1,"frequency":250,"change":false,"lubricationSheetRow":15,"createdAt":1556999824506,"updatedAt":1556999824506,"id":60,"_id":60},
       {"type":2,"frequency":500,"change":true,"lubricationSheetRow":15,"createdAt":1556999824508,"updatedAt":1556999824508,"id":61,"_id":61},
       {"type":3,"frequency":1000,"change":false,"lubricationSheetRow":15,"createdAt":1556999824510,"updatedAt":1556999824510,"id":62,"_id":62},
       {"type":4,"frequency":2000,"change":true,"lubricationSheetRow":15,"createdAt":1556999824513,"updatedAt":1556999824513,"id":63,"_id":63},
       {"type":5,"frequency":4000,"change":true,"lubricationSheetRow":15,"createdAt":1556999824515,"updatedAt":1556999824515,"id":64,"_id":64},
       {"type":1,"frequency":250,"change":true,"lubricationSheetRow":16,"createdAt":1556999824518,"updatedAt":1556999824518,"id":65,"_id":65},
       {"type":2,"frequency":500,"change":false,"lubricationSheetRow":16,"createdAt":1556999824519,"updatedAt":1556999824519,"id":66,"_id":66},
       {"type":3,"frequency":1000,"change":false,"lubricationSheetRow":16,"createdAt":1556999824520,"updatedAt":1556999824520,"id":67,"_id":67},
       {"type":4,"frequency":2000,"change":false,"lubricationSheetRow":16,"createdAt":1556999824521,"updatedAt":1556999824521,"id":68,"_id":68},
       {"type":5,"frequency":4000,"change":true,"lubricationSheetRow":16,"createdAt":1556999824522,"updatedAt":1556999824522,"id":69,"_id":69},
       {"type":1,"frequency":250,"change":true,"lubricationSheetRow":17,"createdAt":1556999824528,"updatedAt":1556999824528,"id":70,"_id":70},
       {"type":1,"frequency":250,"change":true,"lubricationSheetRow":18,"createdAt":1556999824529,"updatedAt":1556999824529,"id":71,"_id":71},
       {"type":2,"frequency":500,"change":false,"lubricationSheetRow":17,"createdAt":1556999824530,"updatedAt":1556999824530,"id":72,"_id":72},
       {"type":2,"frequency":500,"change":false,"lubricationSheetRow":18,"createdAt":1556999824532,"updatedAt":1556999824532,"id":73,"_id":73},
       {"type":3,"frequency":1000,"change":true,"lubricationSheetRow":17,"createdAt":1556999824533,"updatedAt":1556999824533,"id":74,"_id":74},
       {"type":3,"frequency":1000,"change":true,"lubricationSheetRow":18,"createdAt":1556999824534,"updatedAt":1556999824534,"id":75,"_id":75},
       {"type":4,"frequency":2000,"change":false,"lubricationSheetRow":17,"createdAt":1556999824537,"updatedAt":1556999824537,"id":76,"_id":76},
       {"type":4,"frequency":2000,"change":false,"lubricationSheetRow":18,"createdAt":1556999824538,"updatedAt":1556999824538,"id":77,"_id":77},
       {"type":5,"frequency":4000,"change":false,"lubricationSheetRow":17,"createdAt":1556999824540,"updatedAt":1556999824540,"id":78,"_id":78},
       {"type":5,"frequency":4000,"change":false,"lubricationSheetRow":18,"createdAt":1556999824545,"updatedAt":1556999824545,"id":79,"_id":79},
       {"type":1,"frequency":250,"change":true,"lubricationSheetRow":19,"createdAt":1556999824554,"updatedAt":1556999824554,"id":80,"_id":80},
       {"type":2,"frequency":500,"change":false,"lubricationSheetRow":19,"createdAt":1556999824556,"updatedAt":1556999824556,"id":81,"_id":81},
       {"type":3,"frequency":1000,"change":true,"lubricationSheetRow":19,"createdAt":1556999824559,"updatedAt":1556999824559,"id":82,"_id":82},
       {"type":4,"frequency":2000,"change":false,"lubricationSheetRow":19,"createdAt":1556999824562,"updatedAt":1556999824562,"id":83,"_id":83},
       {"type":5,"frequency":4000,"change":false,"lubricationSheetRow":19,"createdAt":1556999824564,"updatedAt":1556999824564,"id":84,"_id":84},
       {"type":1,"frequency":250,"change":true,"lubricationSheetRow":20,"createdAt":1556999824567,"updatedAt":1556999824567,"id":85,"_id":85},
       {"type":2,"frequency":500,"change":true,"lubricationSheetRow":20,"createdAt":1556999824569,"updatedAt":1556999824569,"id":86,"_id":86},
       {"type":3,"frequency":1000,"change":false,"lubricationSheetRow":20,"createdAt":1556999824571,"updatedAt":1556999824571,"id":87,"_id":87},
       {"type":4,"frequency":2000,"change":true,"lubricationSheetRow":20,"createdAt":1556999824572,"updatedAt":1556999824572,"id":88,"_id":88},
       {"type":5,"frequency":4000,"change":false,"lubricationSheetRow":20,"createdAt":1556999824573,"updatedAt":1556999824573,"id":89,"_id":89},
       {"type":1,"frequency":250,"change":true,"lubricationSheetRow":21,"createdAt":1556999824578,"updatedAt":1556999824578,"id":90,"_id":90},
       {"type":2,"frequency":500,"change":false,"lubricationSheetRow":21,"createdAt":1556999824580,"updatedAt":1556999824580,"id":91,"_id":91},
       {"type":3,"frequency":1000,"change":false,"lubricationSheetRow":21,"createdAt":1556999824582,"updatedAt":1556999824582,"id":92,"_id":92},
       {"type":4,"frequency":2000,"change":true,"lubricationSheetRow":21,"createdAt":1556999824583,"updatedAt":1556999824583,"id":93,"_id":93},
       {"type":5,"frequency":4000,"change":false,"lubricationSheetRow":21,"createdAt":1556999824585,"updatedAt":1556999824585,"id":94,"_id":94},
       {"type":1,"frequency":250,"change":true,"lubricationSheetRow":22,"createdAt":1556999824587,"updatedAt":1556999824587,"id":95,"_id":95},
       {"type":2,"frequency":500,"change":false,"lubricationSheetRow":22,"createdAt":1556999824588,"updatedAt":1556999824588,"id":96,"_id":96},
       {"type":3,"frequency":1000,"change":false,"lubricationSheetRow":22,"createdAt":1556999824590,"updatedAt":1556999824590,"id":97,"_id":97},
       {"type":4,"frequency":2000,"change":true,"lubricationSheetRow":22,"createdAt":1556999824591,"updatedAt":1556999824591,"id":98,"_id":98},
       {"type":5,"frequency":4000,"change":false,"lubricationSheetRow":22,"createdAt":1556999824592,"updatedAt":1556999824592,"id":99,"_id":99},
       {"type":1,"frequency":250,"change":true,"lubricationSheetRow":23,"createdAt":1556999824595,"updatedAt":1556999824595,"id":100,"_id":100},
       {"type":2,"frequency":500,"change":false,"lubricationSheetRow":23,"createdAt":1556999824596,"updatedAt":1556999824596,"id":101,"_id":101},
       {"type":3,"frequency":1000,"change":true,"lubricationSheetRow":23,"createdAt":1556999824598,"updatedAt":1556999824598,"id":102,"_id":102},
       {"type":4,"frequency":2000,"change":true,"lubricationSheetRow":23,"createdAt":1556999824599,"updatedAt":1556999824599,"id":103,"_id":103},
       {"type":5,"frequency":4000,"change":true,"lubricationSheetRow":23,"createdAt":1556999824600,"updatedAt":1556999824600,"id":104,"_id":104},
       {"type":1,"frequency":250,"change":false,"lubricationSheetRow":24,"createdAt":1556999824602,"updatedAt":1556999824602,"id":105,"_id":105},
       {"type":2,"frequency":500,"change":false,"lubricationSheetRow":24,"createdAt":1556999824603,"updatedAt":1556999824603,"id":106,"_id":106},
       {"type":3,"frequency":1000,"change":true,"lubricationSheetRow":24,"createdAt":1556999824604,"updatedAt":1556999824604,"id":107,"_id":107},
       {"type":4,"frequency":2000,"change":false,"lubricationSheetRow":24,"createdAt":1556999824606,"updatedAt":1556999824606,"id":108,"_id":108},
       {"type":5,"frequency":4000,"change":true,"lubricationSheetRow":24,"createdAt":1556999824608,"updatedAt":1556999824608,"id":109,"_id":109},
       {"type":1,"frequency":250,"change":false,"lubricationSheetRow":25,"createdAt":1556999824612,"updatedAt":1556999824612,"id":110,"_id":110},
       {"type":2,"frequency":500,"change":false,"lubricationSheetRow":25,"createdAt":1556999824613,"updatedAt":1556999824613,"id":111,"_id":111},
       {"type":3,"frequency":1000,"change":false,"lubricationSheetRow":25,"createdAt":1556999824614,"updatedAt":1556999824614,"id":112,"_id":112},
       {"type":4,"frequency":2000,"change":false,"lubricationSheetRow":25,"createdAt":1556999824615,"updatedAt":1556999824615,"id":113,"_id":113},
       {"type":5,"frequency":4000,"change":true,"lubricationSheetRow":25,"createdAt":1556999824616,"updatedAt":1556999824616,"id":114,"_id":114},
       {"type":1,"frequency":250,"change":false,"lubricationSheetRow":26,"createdAt":1556999824618,"updatedAt":1556999824618,"id":115,"_id":115},
       {"type":2,"frequency":500,"change":true,"lubricationSheetRow":26,"createdAt":1556999824619,"updatedAt":1556999824619,"id":116,"_id":116},
       {"type":3,"frequency":1000,"change":false,"lubricationSheetRow":26,"createdAt":1556999824621,"updatedAt":1556999824621,"id":117,"_id":117},
       {"type":4,"frequency":2000,"change":true,"lubricationSheetRow":26,"createdAt":1556999824622,"updatedAt":1556999824622,"id":118,"_id":118},
       {"type":5,"frequency":4000,"change":false,"lubricationSheetRow":26,"createdAt":1556999824623,"updatedAt":1556999824623,"id":119,"_id":119},
     ]);
   }


   return;


};
