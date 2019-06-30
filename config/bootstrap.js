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

   // if (await User.count() > 0) {
   // }else{
   //   await User.createEach([
   //     { dni: '0', password: '0', name: 'admin', lastname: 'admin', permissions:'admin', },
   //     { dni: '1', password: '1', name: 'ingeniero', lastname: 'ingeniero', permissions:'engineer',},
   //     { dni: '2', password: '2', name: 'mantenimiento', lastname: 'mantenimiento', permissions:'maintManager', },
   //     { dni: '3', password: '3', name: 'obra', lastname: 'obra', permissions:'constManager', },
   //     { dni: '4', password: '4', name: 'deposito', lastname: 'deposito', permissions:'depositManager', },
   //   ]);
   // }
   // if (await Equipment.count() > 0) {
   // }else{
   //   await Equipment.createEach([
   //     {"createdAt":1556998584252,"updatedAt":1557594688485,"id":1,"code":"FDR386","brand":"Komatsu","model":"AR-304","designation":"Excavadora","totalHours":40,"partialHours":40,"serialNumber":"019238201","origin":"Brasil","manufDate":"2019","serviceDate":"2019","power":"200","weight":0,"price":2000000,"observations":"Equipo por default","constructionSite":1,"lubricationSheet":1,"_id":1},
   //     {"createdAt":1556998584252,"updatedAt":1557594690413,"id":2,"code":"SDD034","brand":"Samsung","model":"GT-502","designation":"Topadora","totalHours":93,"partialHours":93,"serialNumber":"019123334","origin":"Mexico","manufDate":"2019","serviceDate":"2019","power":"220","weight":0,"price":3000000,"observations":"Equipo por default","constructionSite":1,"lubricationSheet":2,"_id":2},
   //     {"createdAt":1556998584252,"updatedAt":1557594692186,"id":3,"code":"TTR440","brand":"Caterpillar","model":"KR-123","designation":"Cargadora","totalHours":9,"partialHours":9,"serialNumber":"12339033","origin":"Brasil","manufDate":"2019","serviceDate":"2019","power":"120","weight":0,"price":1500000,"observations":"Equipo por default","constructionSite":1,"lubricationSheet":3,"_id":3},
   //     {"createdAt":1556998584252,"updatedAt":1557594693696,"id":4,"code":"FDR230","brand":"Komatsu","model":"AR-603","designation":"Retroexcavadora","totalHours":24,"partialHours":24,"serialNumber":"019223949","origin":"Brasil","manufDate":"2019","serviceDate":"2019","power":"190","weight":0,"price":2000000,"observations":"Equipo por default","constructionSite":1,"lubricationSheet":4,"_id":4},
   //
   //   ]);
   // }
   // if (await SparePart.count() > 0) {
   // }else{
   //   await SparePart.createEach([
   //     {"createdAt":1556998584257,"updatedAt":1556998584257,"id":1,"internalCode":"KOD345","externalCode":"1239390","type":"filter","application":"oil","brand":"YPF","model":"Y220","stock":40,"pricePerUnit":29,"_id":1},
   //     {"createdAt":1556998584257,"updatedAt":1556998584257,"id":2,"internalCode":"DOS233","externalCode":"5230002","type":"oil","application":"motor","brand":"SHELL","model":"S520","stock":100,"pricePerUnit":11,"_id":2},
   //     {"createdAt":1556998584257,"updatedAt":1556998584257,"id":3,"internalCode":"PDD403","externalCode":"1232113","type":"liquid","application":"coolant","brand":"YPF","model":"R120","stock":40,"pricePerUnit":7,"_id":3},
   //     {"createdAt":1556998584257,"updatedAt":1556998584257,"id":4,"internalCode":"KER203","externalCode":"1250033","type":"filter","application":"oil","brand":"YPF","model":"C403","stock":19,"pricePerUnit":31,"_id":4},
   //     {"createdAt":1556998584257,"updatedAt":1556998584257,"id":5,"internalCode":"KER203","externalCode":"1250033","type":"filter","application":"air","brand":"YPF","model":"C321","stock":19,"pricePerUnit":75,"_id":5},
   //     {"createdAt":1556998584257,"updatedAt":1556998584257,"id":6,"internalCode":"KER203","externalCode":"1250033","type":"filter","application":"fuel","brand":"YPF","model":"C429","stock":0,"pricePerUnit":17.5,"_id":6},
   //     {"createdAt":1556998584257,"updatedAt":1556998584257,"id":7,"internalCode":"KER203","externalCode":"1250033","type":"filter","application":"other","brand":"YPF","model":"N103","stock":19,"pricePerUnit":15,"_id":7},
   //     {"createdAt":1556998584257,"updatedAt":1556998584257,"id":8,"internalCode":"KER203","externalCode":"1250033","type":"oil","application":"hydraulic","brand":"YPF","model":"H113","stock":19,"pricePerUnit":3.75,"_id":8},
   //     {"createdAt":1556998584257,"updatedAt":1556998584257,"id":9,"internalCode":"KER203","externalCode":"1250033","type":"oil","application":"transmission","brand":"YPF","model":"T220","stock":19,"pricePerUnit":3.75,"_id":9},
   //     {"createdAt":1556998584257,"updatedAt":1556998584257,"id":10,"internalCode":"KER203","externalCode":"1250033","type":"oil","application":"other","brand":"YPF","model":"O093","stock":19,"pricePerUnit":2,"_id":10},
   //     {"createdAt":1556998584257,"updatedAt":1556998584257,"id":11,"internalCode":"KER203","externalCode":"1250033","type":"liquid","application":"break","brand":"YPF","model":"B476","stock":19,"pricePerUnit":5.75,"_id":11},
   //     {"createdAt":1556998584257,"updatedAt":1556998584257,"id":12,"internalCode":"KER203","externalCode":"1250033","type":"oil","application":"motor","brand":"YPF","model":"LT123","stock":19,"pricePerUnit":12.5,"_id":12},
   //     {"createdAt":1556998584257,"updatedAt":1556998584257,"id":13,"internalCode":"OLE325","externalCode":"1250033","type":"liquid","application":"other","brand":"YPF","model":"OL493","stock":19,"pricePerUnit":3,"_id":13},
   //
   //   ]);
   // }
   // if (await ConstructionSite.count() > 0) {
   // }else{
   //   await ConstructionSite.createEach([
   //     { code: 'T01', name: 'Taller', province: 'Jujuy', district: 'S.S. de Jujuy', distance:'0', initDate:'-', finishDate:'-', maxTemp:'28', minTemp:'6', altitude:'1250', },
   //     { code: 'C01', name: 'Cantera Rio Grande', province: 'Jujuy', district: 'S.S. de Jujuy', distance:'7', initDate:'2019', finishDate:'2022', maxTemp:'28', minTemp:'6', altitude:'1250', },
   //     { code: 'A03', name: 'Mina Aguilar', province: 'Jujuy', district: 'Humahuaca', distance:'234', initDate:'2017', finishDate:'2020', maxTemp:'25', minTemp:'-10', altitude:'3980', },
   //     { code: 'S02', name: 'Dique Susques', province: 'Jujuy', district: 'Susques', distance:'203', initDate:'2019', finishDate:'2021', maxTemp:'22', minTemp:'-8', altitude:'3900', },
   //   ]);
   // }
   // if (await LubricationSheet.count() > 0){
   // }else{
   //   await LubricationSheet.createEach([
   //     {"createdAt":1555705092194,"updatedAt":1555705092194,"id":1,"_id":1},
   //     {"createdAt":1556999824469,"updatedAt":1556999824469,"id":2,"_id":2},
   //     {"createdAt":1557417532846,"updatedAt":1557417532846,"id":3,"_id":3},
   //     {"createdAt":1557582427383,"updatedAt":1557582427383,"id":4,"_id":4},
   //   ]);
   //   for(var i=1; i<LubricationSheet.count(); i++){
   //     //await LubricationSheet.addToCollection(i, 'equipments').members([i]);
   //   }
   //
   // }
   // if (await LubricationSheetRow.count() > 0){
   // }else{
   //   await LubricationSheetRow.createEach([
   //     {"createdAt":1555705092213,"updatedAt":1555705092213,"id":1,"application":"Primario","amount":1,"lubricationSheet":1,"sparePart":5,"_id":1},
   //     {"createdAt":1555705092226,"updatedAt":1555705092226,"id":2,"application":"Primario","amount":1,"lubricationSheet":1,"sparePart":1,"_id":2},
   //     {"createdAt":1555705092235,"updatedAt":1555705092235,"id":3,"application":"Secundario","amount":1,"lubricationSheet":1,"sparePart":4,"_id":3},
   //     {"createdAt":1555705092244,"updatedAt":1555705092244,"id":4,"application":"Primario","amount":1,"lubricationSheet":1,"sparePart":6,"_id":4},
   //     {"createdAt":1555705092257,"updatedAt":1555705092257,"id":5,"application":"Primario","amount":1,"lubricationSheet":1,"sparePart":7,"_id":5},
   //     {"createdAt":1555705092267,"updatedAt":1555705092267,"id":6,"application":"","amount":15,"lubricationSheet":1,"sparePart":2,"_id":6},
   //     {"createdAt":1555705092280,"updatedAt":1555705092280,"id":7,"application":"","amount":3,"lubricationSheet":1,"sparePart":8,"_id":7},
   //     {"createdAt":1555705092293,"updatedAt":1555705092293,"id":8,"application":"","amount":2,"lubricationSheet":1,"sparePart":9,"_id":8},
   //     {"createdAt":1555705092310,"updatedAt":1555705092310,"id":9,"application":"Primario","amount":3,"lubricationSheet":1,"sparePart":10,"_id":9},
   //     {"createdAt":1555705092319,"updatedAt":1555705092319,"id":10,"application":"Refrigerante","amount":3,"lubricationSheet":1,"sparePart":3,"_id":10},
   //     {"createdAt":1555705092331,"updatedAt":1555705092331,"id":11,"application":"Freno","amount":2,"lubricationSheet":1,"sparePart":11,"_id":11},
   //     {"createdAt":1556999824476,"updatedAt":1556999824476,"id":12,"application":"Primario","amount":1,"lubricationSheet":2,"sparePart":5,"_id":12},
   //     {"createdAt":1556999824488,"updatedAt":1556999824488,"id":13,"application":"Primario","amount":1,"lubricationSheet":2,"sparePart":4,"_id":13},
   //     {"createdAt":1556999824496,"updatedAt":1556999824496,"id":14,"application":"Secundario","amount":1,"lubricationSheet":2,"sparePart":1,"_id":14},
   //     {"createdAt":1556999824504,"updatedAt":1556999824504,"id":15,"application":"Primario","amount":1,"lubricationSheet":2,"sparePart":6,"_id":15},
   //     {"createdAt":1556999824517,"updatedAt":1556999824517,"id":16,"application":"Primario","amount":1,"lubricationSheet":2,"sparePart":7,"_id":16},
   //     {"createdAt":1556999824523,"updatedAt":1556999824523,"id":17,"application":"normal","amount":15,"lubricationSheet":2,"sparePart":2,"_id":17},
   //     {"createdAt":1556999824524,"updatedAt":1556999824524,"id":18,"application":"lowTemperature","amount":15,"lubricationSheet":2,"sparePart":12,"_id":18},
   //     {"createdAt":1556999824548,"updatedAt":1556999824548,"id":19,"application":"normal","amount":10,"lubricationSheet":2,"sparePart":8,"_id":19},
   //     {"createdAt":1556999824566,"updatedAt":1556999824566,"id":20,"application":"normal","amount":4,"lubricationSheet":2,"sparePart":9,"_id":20},
   //     {"createdAt":1556999824574,"updatedAt":1556999824574,"id":21,"application":"Primario","amount":2,"lubricationSheet":2,"sparePart":10,"_id":21},
   //     {"createdAt":1556999824586,"updatedAt":1556999824586,"id":22,"application":"Secundario","amount":3,"lubricationSheet":2,"sparePart":10,"_id":22},
   //     {"createdAt":1556999824593,"updatedAt":1556999824593,"id":23,"application":"Terciario","amount":1,"lubricationSheet":2,"sparePart":10,"_id":23},
   //     {"createdAt":1556999824601,"updatedAt":1556999824601,"id":24,"application":"Primario","amount":2,"lubricationSheet":2,"sparePart":3,"_id":24},
   //     {"createdAt":1556999824609,"updatedAt":1556999824609,"id":25,"application":"Primario","amount":3,"lubricationSheet":2,"sparePart":11,"_id":25},
   //     {"createdAt":1556999824617,"updatedAt":1556999824617,"id":26,"application":"Primario","amount":4,"lubricationSheet":2,"sparePart":13,"_id":26},
   //     {"createdAt":1557417532852,"updatedAt":1557417532852,"id":27,"application":"Primario","amount":1,"lubricationSheet":3,"sparePart":5,"_id":27},
   //     {"createdAt":1557417532866,"updatedAt":1557417532866,"id":28,"application":"Primario","amount":1,"lubricationSheet":3,"sparePart":1,"_id":28},
   //     {"createdAt":1557417532879,"updatedAt":1557417532879,"id":29,"application":"Primario","amount":1,"lubricationSheet":3,"sparePart":6,"_id":29},
   //     {"createdAt":1557417532894,"updatedAt":1557417532894,"id":30,"application":"normal","amount":12,"lubricationSheet":3,"sparePart":2,"_id":30},
   //     {"createdAt":1557417532895,"updatedAt":1557417532895,"id":31,"application":"lowTemperature","amount":12,"lubricationSheet":3,"sparePart":12,"_id":31},
   //     {"createdAt":1557417532915,"updatedAt":1557417532915,"id":32,"application":"normal","amount":3,"lubricationSheet":3,"sparePart":8,"_id":32},
   //     {"createdAt":1557417532928,"updatedAt":1557417532928,"id":33,"application":"normal","amount":3,"lubricationSheet":3,"sparePart":9,"_id":33},
   //     {"createdAt":1557417532948,"updatedAt":1557417532948,"id":34,"application":"Primario","amount":2,"lubricationSheet":3,"sparePart":3,"_id":34},
   //     {"createdAt":1557417532962,"updatedAt":1557417532962,"id":35,"application":"Primario","amount":3,"lubricationSheet":3,"sparePart":11,"_id":35},
   //     {"createdAt":1557582427393,"updatedAt":1557582427393,"id":36,"application":"Primario","amount":1,"lubricationSheet":4,"sparePart":5,"_id":36},
   //     {"createdAt":1557582427406,"updatedAt":1557582427406,"id":37,"application":"Primario","amount":1,"lubricationSheet":4,"sparePart":1,"_id":37},
   //     {"createdAt":1557582427416,"updatedAt":1557582427416,"id":38,"application":"Secundario","amount":1,"lubricationSheet":4,"sparePart":4,"_id":38},
   //     {"createdAt":1557582427425,"updatedAt":1557582427425,"id":39,"application":"Primario","amount":1,"lubricationSheet":4,"sparePart":6,"_id":39},
   //     {"createdAt":1557582427436,"updatedAt":1557582427436,"id":40,"application":"normal","amount":15,"lubricationSheet":4,"sparePart":2,"_id":40},
   //     {"createdAt":1557582427437,"updatedAt":1557582427437,"id":41,"application":"lowTemperature","amount":15,"lubricationSheet":4,"sparePart":12,"_id":41},
   //     {"createdAt":1557582427455,"updatedAt":1557582427455,"id":42,"application":"normal","amount":4,"lubricationSheet":4,"sparePart":8,"_id":42},
   //     {"createdAt":1557582427470,"updatedAt":1557582427470,"id":43,"application":"Primario","amount":6,"lubricationSheet":4,"sparePart":3,"_id":43},
   //     {"createdAt":1557582427482,"updatedAt":1557582427482,"id":44,"application":"Primario","amount":5,"lubricationSheet":4,"sparePart":11,"_id":44},
   //
   //   ]);
   // }
   // if (await MaintenanceFrequency.count() > 0){
   // }else{
   //   await MaintenanceFrequency.createEach([
   //     {"createdAt":1555705092216,"updatedAt":1555705092216,"id":1,"type":1,"frequency":250,"change":true,"lubricationSheetRow":1,"_id":1},
   //     {"createdAt":1555705092219,"updatedAt":1555705092219,"id":2,"type":2,"frequency":500,"change":false,"lubricationSheetRow":1,"_id":2},
   //     {"createdAt":1555705092222,"updatedAt":1555705092222,"id":3,"type":3,"frequency":1000,"change":true,"lubricationSheetRow":1,"_id":3},
   //     {"createdAt":1555705092224,"updatedAt":1555705092224,"id":4,"type":4,"frequency":2000,"change":false,"lubricationSheetRow":1,"_id":4},
   //     {"createdAt":1555705092227,"updatedAt":1555705092227,"id":5,"type":1,"frequency":250,"change":true,"lubricationSheetRow":2,"_id":5},
   //     {"createdAt":1555705092229,"updatedAt":1555705092229,"id":6,"type":2,"frequency":500,"change":true,"lubricationSheetRow":2,"_id":6},
   //     {"createdAt":1555705092230,"updatedAt":1555705092230,"id":7,"type":3,"frequency":1000,"change":false,"lubricationSheetRow":2,"_id":7},
   //     {"createdAt":1555705092232,"updatedAt":1555705092232,"id":8,"type":4,"frequency":2000,"change":false,"lubricationSheetRow":2,"_id":8},
   //     {"createdAt":1555705092237,"updatedAt":1555705092237,"id":9,"type":1,"frequency":250,"change":false,"lubricationSheetRow":3,"_id":9},
   //     {"createdAt":1555705092238,"updatedAt":1555705092238,"id":10,"type":2,"frequency":500,"change":false,"lubricationSheetRow":3,"_id":10},
   //     {"createdAt":1555705092240,"updatedAt":1555705092240,"id":11,"type":3,"frequency":1000,"change":true,"lubricationSheetRow":3,"_id":11},
   //     {"createdAt":1555705092242,"updatedAt":1555705092242,"id":12,"type":4,"frequency":2000,"change":true,"lubricationSheetRow":3,"_id":12},
   //     {"createdAt":1555705092248,"updatedAt":1555705092248,"id":13,"type":1,"frequency":250,"change":true,"lubricationSheetRow":4,"_id":13},
   //     {"createdAt":1555705092250,"updatedAt":1555705092250,"id":14,"type":2,"frequency":500,"change":false,"lubricationSheetRow":4,"_id":14},
   //     {"createdAt":1555705092252,"updatedAt":1555705092252,"id":15,"type":3,"frequency":1000,"change":true,"lubricationSheetRow":4,"_id":15},
   //     {"createdAt":1555705092255,"updatedAt":1555705092255,"id":16,"type":4,"frequency":2000,"change":false,"lubricationSheetRow":4,"_id":16},
   //     {"createdAt":1555705092259,"updatedAt":1555705092259,"id":17,"type":1,"frequency":250,"change":true,"lubricationSheetRow":5,"_id":17},
   //     {"createdAt":1555705092261,"updatedAt":1555705092261,"id":18,"type":2,"frequency":500,"change":true,"lubricationSheetRow":5,"_id":18},
   //     {"createdAt":1555705092263,"updatedAt":1555705092263,"id":19,"type":3,"frequency":1000,"change":false,"lubricationSheetRow":5,"_id":19},
   //     {"createdAt":1555705092265,"updatedAt":1555705092265,"id":20,"type":4,"frequency":2000,"change":false,"lubricationSheetRow":5,"_id":20},
   //     {"createdAt":1555705092270,"updatedAt":1555705092270,"id":21,"type":1,"frequency":250,"change":true,"lubricationSheetRow":6,"_id":21},
   //     {"createdAt":1555705092272,"updatedAt":1555705092272,"id":22,"type":2,"frequency":500,"change":false,"lubricationSheetRow":6,"_id":22},
   //     {"createdAt":1555705092275,"updatedAt":1555705092275,"id":23,"type":3,"frequency":1000,"change":true,"lubricationSheetRow":6,"_id":23},
   //     {"createdAt":1555705092279,"updatedAt":1555705092279,"id":24,"type":4,"frequency":2000,"change":false,"lubricationSheetRow":6,"_id":24},
   //     {"createdAt":1555705092282,"updatedAt":1555705092282,"id":25,"type":1,"frequency":250,"change":true,"lubricationSheetRow":7,"_id":25},
   //     {"createdAt":1555705092284,"updatedAt":1555705092284,"id":26,"type":2,"frequency":500,"change":false,"lubricationSheetRow":7,"_id":26},
   //     {"createdAt":1555705092286,"updatedAt":1555705092286,"id":27,"type":3,"frequency":1000,"change":true,"lubricationSheetRow":7,"_id":27},
   //     {"createdAt":1555705092288,"updatedAt":1555705092288,"id":28,"type":4,"frequency":2000,"change":false,"lubricationSheetRow":7,"_id":28},
   //     {"createdAt":1555705092295,"updatedAt":1555705092295,"id":29,"type":1,"frequency":250,"change":true,"lubricationSheetRow":8,"_id":29},
   //     {"createdAt":1555705092297,"updatedAt":1555705092297,"id":30,"type":2,"frequency":500,"change":false,"lubricationSheetRow":8,"_id":30},
   //     {"createdAt":1555705092307,"updatedAt":1555705092307,"id":31,"type":3,"frequency":1000,"change":true,"lubricationSheetRow":8,"_id":31},
   //     {"createdAt":1555705092309,"updatedAt":1555705092309,"id":32,"type":4,"frequency":2000,"change":false,"lubricationSheetRow":8,"_id":32},
   //     {"createdAt":1555705092312,"updatedAt":1555705092312,"id":33,"type":1,"frequency":250,"change":false,"lubricationSheetRow":9,"_id":33},
   //     {"createdAt":1555705092314,"updatedAt":1555705092314,"id":34,"type":2,"frequency":500,"change":false,"lubricationSheetRow":9,"_id":34},
   //     {"createdAt":1555705092316,"updatedAt":1555705092316,"id":35,"type":3,"frequency":1000,"change":false,"lubricationSheetRow":9,"_id":35},
   //     {"createdAt":1555705092317,"updatedAt":1555705092317,"id":36,"type":4,"frequency":2000,"change":true,"lubricationSheetRow":9,"_id":36},
   //     {"createdAt":1555705092321,"updatedAt":1555705092321,"id":37,"type":1,"frequency":250,"change":true,"lubricationSheetRow":10,"_id":37},
   //     {"createdAt":1555705092324,"updatedAt":1555705092324,"id":38,"type":2,"frequency":500,"change":false,"lubricationSheetRow":10,"_id":38},
   //     {"createdAt":1555705092326,"updatedAt":1555705092326,"id":39,"type":3,"frequency":1000,"change":true,"lubricationSheetRow":10,"_id":39},
   //     {"createdAt":1555705092328,"updatedAt":1555705092328,"id":40,"type":4,"frequency":2000,"change":false,"lubricationSheetRow":10,"_id":40},
   //     {"createdAt":1555705092333,"updatedAt":1555705092333,"id":41,"type":1,"frequency":250,"change":false,"lubricationSheetRow":11,"_id":41},
   //     {"createdAt":1555705092334,"updatedAt":1555705092334,"id":42,"type":2,"frequency":500,"change":true,"lubricationSheetRow":11,"_id":42},
   //     {"createdAt":1555705092337,"updatedAt":1555705092337,"id":43,"type":3,"frequency":1000,"change":false,"lubricationSheetRow":11,"_id":43},
   //     {"createdAt":1555705092340,"updatedAt":1555705092340,"id":44,"type":4,"frequency":2000,"change":true,"lubricationSheetRow":11,"_id":44},
   //     {"createdAt":1556999824481,"updatedAt":1556999824481,"id":45,"type":1,"frequency":250,"change":true,"lubricationSheetRow":12,"_id":45},
   //     {"createdAt":1556999824483,"updatedAt":1556999824483,"id":46,"type":2,"frequency":500,"change":false,"lubricationSheetRow":12,"_id":46},
   //     {"createdAt":1556999824485,"updatedAt":1556999824485,"id":47,"type":3,"frequency":1000,"change":false,"lubricationSheetRow":12,"_id":47},
   //     {"createdAt":1556999824486,"updatedAt":1556999824486,"id":48,"type":4,"frequency":2000,"change":true,"lubricationSheetRow":12,"_id":48},
   //     {"createdAt":1556999824487,"updatedAt":1556999824487,"id":49,"type":5,"frequency":4000,"change":true,"lubricationSheetRow":12,"_id":49},
   //     {"createdAt":1556999824489,"updatedAt":1556999824489,"id":50,"type":1,"frequency":250,"change":false,"lubricationSheetRow":13,"_id":50},
   //     {"createdAt":1556999824490,"updatedAt":1556999824490,"id":51,"type":2,"frequency":500,"change":false,"lubricationSheetRow":13,"_id":51},
   //     {"createdAt":1556999824492,"updatedAt":1556999824492,"id":52,"type":3,"frequency":1000,"change":false,"lubricationSheetRow":13,"_id":52},
   //     {"createdAt":1556999824493,"updatedAt":1556999824493,"id":53,"type":4,"frequency":2000,"change":true,"lubricationSheetRow":13,"_id":53},
   //     {"createdAt":1556999824495,"updatedAt":1556999824495,"id":54,"type":5,"frequency":4000,"change":false,"lubricationSheetRow":13,"_id":54},
   //     {"createdAt":1556999824497,"updatedAt":1556999824497,"id":55,"type":1,"frequency":250,"change":false,"lubricationSheetRow":14,"_id":55},
   //     {"createdAt":1556999824498,"updatedAt":1556999824498,"id":56,"type":2,"frequency":500,"change":true,"lubricationSheetRow":14,"_id":56},
   //     {"createdAt":1556999824501,"updatedAt":1556999824501,"id":57,"type":3,"frequency":1000,"change":false,"lubricationSheetRow":14,"_id":57},
   //     {"createdAt":1556999824502,"updatedAt":1556999824502,"id":58,"type":4,"frequency":2000,"change":false,"lubricationSheetRow":14,"_id":58},
   //     {"createdAt":1556999824503,"updatedAt":1556999824503,"id":59,"type":5,"frequency":4000,"change":true,"lubricationSheetRow":14,"_id":59},
   //     {"createdAt":1556999824506,"updatedAt":1556999824506,"id":60,"type":1,"frequency":250,"change":false,"lubricationSheetRow":15,"_id":60},
   //     {"createdAt":1556999824508,"updatedAt":1556999824508,"id":61,"type":2,"frequency":500,"change":true,"lubricationSheetRow":15,"_id":61},
   //     {"createdAt":1556999824510,"updatedAt":1556999824510,"id":62,"type":3,"frequency":1000,"change":false,"lubricationSheetRow":15,"_id":62},
   //     {"createdAt":1556999824513,"updatedAt":1556999824513,"id":63,"type":4,"frequency":2000,"change":true,"lubricationSheetRow":15,"_id":63},
   //     {"createdAt":1556999824515,"updatedAt":1556999824515,"id":64,"type":5,"frequency":4000,"change":true,"lubricationSheetRow":15,"_id":64},
   //     {"createdAt":1556999824518,"updatedAt":1556999824518,"id":65,"type":1,"frequency":250,"change":true,"lubricationSheetRow":16,"_id":65},
   //     {"createdAt":1556999824519,"updatedAt":1556999824519,"id":66,"type":2,"frequency":500,"change":false,"lubricationSheetRow":16,"_id":66},
   //     {"createdAt":1556999824520,"updatedAt":1556999824520,"id":67,"type":3,"frequency":1000,"change":false,"lubricationSheetRow":16,"_id":67},
   //     {"createdAt":1556999824521,"updatedAt":1556999824521,"id":68,"type":4,"frequency":2000,"change":false,"lubricationSheetRow":16,"_id":68},
   //     {"createdAt":1556999824522,"updatedAt":1556999824522,"id":69,"type":5,"frequency":4000,"change":true,"lubricationSheetRow":16,"_id":69},
   //     {"createdAt":1556999824528,"updatedAt":1556999824528,"id":70,"type":1,"frequency":250,"change":true,"lubricationSheetRow":17,"_id":70},
   //     {"createdAt":1556999824529,"updatedAt":1556999824529,"id":71,"type":1,"frequency":250,"change":true,"lubricationSheetRow":18,"_id":71},
   //     {"createdAt":1556999824530,"updatedAt":1556999824530,"id":72,"type":2,"frequency":500,"change":false,"lubricationSheetRow":17,"_id":72},
   //     {"createdAt":1556999824532,"updatedAt":1556999824532,"id":73,"type":2,"frequency":500,"change":false,"lubricationSheetRow":18,"_id":73},
   //     {"createdAt":1556999824533,"updatedAt":1556999824533,"id":74,"type":3,"frequency":1000,"change":true,"lubricationSheetRow":17,"_id":74},
   //     {"createdAt":1556999824534,"updatedAt":1556999824534,"id":75,"type":3,"frequency":1000,"change":true,"lubricationSheetRow":18,"_id":75},
   //     {"createdAt":1556999824537,"updatedAt":1556999824537,"id":76,"type":4,"frequency":2000,"change":false,"lubricationSheetRow":17,"_id":76},
   //     {"createdAt":1556999824538,"updatedAt":1556999824538,"id":77,"type":4,"frequency":2000,"change":false,"lubricationSheetRow":18,"_id":77},
   //     {"createdAt":1556999824540,"updatedAt":1556999824540,"id":78,"type":5,"frequency":4000,"change":false,"lubricationSheetRow":17,"_id":78},
   //     {"createdAt":1556999824545,"updatedAt":1556999824545,"id":79,"type":5,"frequency":4000,"change":false,"lubricationSheetRow":18,"_id":79},
   //     {"createdAt":1556999824554,"updatedAt":1556999824554,"id":80,"type":1,"frequency":250,"change":true,"lubricationSheetRow":19,"_id":80},
   //     {"createdAt":1556999824556,"updatedAt":1556999824556,"id":81,"type":2,"frequency":500,"change":false,"lubricationSheetRow":19,"_id":81},
   //     {"createdAt":1556999824559,"updatedAt":1556999824559,"id":82,"type":3,"frequency":1000,"change":true,"lubricationSheetRow":19,"_id":82},
   //     {"createdAt":1556999824562,"updatedAt":1556999824562,"id":83,"type":4,"frequency":2000,"change":false,"lubricationSheetRow":19,"_id":83},
   //     {"createdAt":1556999824564,"updatedAt":1556999824564,"id":84,"type":5,"frequency":4000,"change":false,"lubricationSheetRow":19,"_id":84},
   //     {"createdAt":1556999824567,"updatedAt":1556999824567,"id":85,"type":1,"frequency":250,"change":true,"lubricationSheetRow":20,"_id":85},
   //     {"createdAt":1556999824569,"updatedAt":1556999824569,"id":86,"type":2,"frequency":500,"change":true,"lubricationSheetRow":20,"_id":86},
   //     {"createdAt":1556999824571,"updatedAt":1556999824571,"id":87,"type":3,"frequency":1000,"change":false,"lubricationSheetRow":20,"_id":87},
   //     {"createdAt":1556999824572,"updatedAt":1556999824572,"id":88,"type":4,"frequency":2000,"change":true,"lubricationSheetRow":20,"_id":88},
   //     {"createdAt":1556999824573,"updatedAt":1556999824573,"id":89,"type":5,"frequency":4000,"change":false,"lubricationSheetRow":20,"_id":89},
   //     {"createdAt":1556999824578,"updatedAt":1556999824578,"id":90,"type":1,"frequency":250,"change":true,"lubricationSheetRow":21,"_id":90},
   //     {"createdAt":1556999824580,"updatedAt":1556999824580,"id":91,"type":2,"frequency":500,"change":false,"lubricationSheetRow":21,"_id":91},
   //     {"createdAt":1556999824582,"updatedAt":1556999824582,"id":92,"type":3,"frequency":1000,"change":false,"lubricationSheetRow":21,"_id":92},
   //     {"createdAt":1556999824583,"updatedAt":1556999824583,"id":93,"type":4,"frequency":2000,"change":true,"lubricationSheetRow":21,"_id":93},
   //     {"createdAt":1556999824585,"updatedAt":1556999824585,"id":94,"type":5,"frequency":4000,"change":false,"lubricationSheetRow":21,"_id":94},
   //     {"createdAt":1556999824587,"updatedAt":1556999824587,"id":95,"type":1,"frequency":250,"change":true,"lubricationSheetRow":22,"_id":95},
   //     {"createdAt":1556999824588,"updatedAt":1556999824588,"id":96,"type":2,"frequency":500,"change":false,"lubricationSheetRow":22,"_id":96},
   //     {"createdAt":1556999824590,"updatedAt":1556999824590,"id":97,"type":3,"frequency":1000,"change":false,"lubricationSheetRow":22,"_id":97},
   //     {"createdAt":1556999824591,"updatedAt":1556999824591,"id":98,"type":4,"frequency":2000,"change":true,"lubricationSheetRow":22,"_id":98},
   //     {"createdAt":1556999824592,"updatedAt":1556999824592,"id":99,"type":5,"frequency":4000,"change":false,"lubricationSheetRow":22,"_id":99},
   //     {"createdAt":1556999824595,"updatedAt":1556999824595,"id":100,"type":1,"frequency":250,"change":true,"lubricationSheetRow":23,"_id":100},
   //     {"createdAt":1556999824596,"updatedAt":1556999824596,"id":101,"type":2,"frequency":500,"change":false,"lubricationSheetRow":23,"_id":101},
   //     {"createdAt":1556999824598,"updatedAt":1556999824598,"id":102,"type":3,"frequency":1000,"change":true,"lubricationSheetRow":23,"_id":102},
   //     {"createdAt":1556999824599,"updatedAt":1556999824599,"id":103,"type":4,"frequency":2000,"change":true,"lubricationSheetRow":23,"_id":103},
   //     {"createdAt":1556999824600,"updatedAt":1556999824600,"id":104,"type":5,"frequency":4000,"change":true,"lubricationSheetRow":23,"_id":104},
   //     {"createdAt":1556999824602,"updatedAt":1556999824602,"id":105,"type":1,"frequency":250,"change":false,"lubricationSheetRow":24,"_id":105},
   //     {"createdAt":1556999824603,"updatedAt":1556999824603,"id":106,"type":2,"frequency":500,"change":false,"lubricationSheetRow":24,"_id":106},
   //     {"createdAt":1556999824604,"updatedAt":1556999824604,"id":107,"type":3,"frequency":1000,"change":true,"lubricationSheetRow":24,"_id":107},
   //     {"createdAt":1556999824606,"updatedAt":1556999824606,"id":108,"type":4,"frequency":2000,"change":false,"lubricationSheetRow":24,"_id":108},
   //     {"createdAt":1556999824608,"updatedAt":1556999824608,"id":109,"type":5,"frequency":4000,"change":true,"lubricationSheetRow":24,"_id":109},
   //     {"createdAt":1556999824612,"updatedAt":1556999824612,"id":110,"type":1,"frequency":250,"change":false,"lubricationSheetRow":25,"_id":110},
   //     {"createdAt":1556999824613,"updatedAt":1556999824613,"id":111,"type":2,"frequency":500,"change":false,"lubricationSheetRow":25,"_id":111},
   //     {"createdAt":1556999824614,"updatedAt":1556999824614,"id":112,"type":3,"frequency":1000,"change":false,"lubricationSheetRow":25,"_id":112},
   //     {"createdAt":1556999824615,"updatedAt":1556999824615,"id":113,"type":4,"frequency":2000,"change":false,"lubricationSheetRow":25,"_id":113},
   //     {"createdAt":1556999824616,"updatedAt":1556999824616,"id":114,"type":5,"frequency":4000,"change":true,"lubricationSheetRow":25,"_id":114},
   //     {"createdAt":1556999824618,"updatedAt":1556999824618,"id":115,"type":1,"frequency":250,"change":false,"lubricationSheetRow":26,"_id":115},
   //     {"createdAt":1556999824619,"updatedAt":1556999824619,"id":116,"type":2,"frequency":500,"change":true,"lubricationSheetRow":26,"_id":116},
   //     {"createdAt":1556999824621,"updatedAt":1556999824621,"id":117,"type":3,"frequency":1000,"change":false,"lubricationSheetRow":26,"_id":117},
   //     {"createdAt":1556999824622,"updatedAt":1556999824622,"id":118,"type":4,"frequency":2000,"change":true,"lubricationSheetRow":26,"_id":118},
   //     {"createdAt":1556999824623,"updatedAt":1556999824623,"id":119,"type":5,"frequency":4000,"change":false,"lubricationSheetRow":26,"_id":119},
   //     {"createdAt":1557417532855,"updatedAt":1557417532855,"id":120,"type":1,"frequency":200,"change":false,"lubricationSheetRow":27,"_id":120},
   //     {"createdAt":1557417532858,"updatedAt":1557417532858,"id":121,"type":2,"frequency":500,"change":false,"lubricationSheetRow":27,"_id":121},
   //     {"createdAt":1557417532862,"updatedAt":1557417532862,"id":122,"type":3,"frequency":850,"change":true,"lubricationSheetRow":27,"_id":122},
   //     {"createdAt":1557417532864,"updatedAt":1557417532864,"id":123,"type":4,"frequency":1250,"change":false,"lubricationSheetRow":27,"_id":123},
   //     {"createdAt":1557417532865,"updatedAt":1557417532865,"id":124,"type":5,"frequency":2000,"change":true,"lubricationSheetRow":27,"_id":124},
   //     {"createdAt":1557417532868,"updatedAt":1557417532868,"id":125,"type":1,"frequency":200,"change":false,"lubricationSheetRow":28,"_id":125},
   //     {"createdAt":1557417532870,"updatedAt":1557417532870,"id":126,"type":2,"frequency":500,"change":true,"lubricationSheetRow":28,"_id":126},
   //     {"createdAt":1557417532873,"updatedAt":1557417532873,"id":127,"type":3,"frequency":850,"change":false,"lubricationSheetRow":28,"_id":127},
   //     {"createdAt":1557417532875,"updatedAt":1557417532875,"id":128,"type":4,"frequency":1250,"change":false,"lubricationSheetRow":28,"_id":128},
   //     {"createdAt":1557417532877,"updatedAt":1557417532877,"id":129,"type":5,"frequency":2000,"change":false,"lubricationSheetRow":28,"_id":129},
   //     {"createdAt":1557417532881,"updatedAt":1557417532881,"id":130,"type":1,"frequency":200,"change":true,"lubricationSheetRow":29,"_id":130},
   //     {"createdAt":1557417532883,"updatedAt":1557417532883,"id":131,"type":2,"frequency":500,"change":false,"lubricationSheetRow":29,"_id":131},
   //     {"createdAt":1557417532885,"updatedAt":1557417532885,"id":132,"type":3,"frequency":850,"change":false,"lubricationSheetRow":29,"_id":132},
   //     {"createdAt":1557417532890,"updatedAt":1557417532890,"id":133,"type":4,"frequency":1250,"change":false,"lubricationSheetRow":29,"_id":133},
   //     {"createdAt":1557417532892,"updatedAt":1557417532892,"id":134,"type":5,"frequency":2000,"change":true,"lubricationSheetRow":29,"_id":134},
   //     {"createdAt":1557417532897,"updatedAt":1557417532897,"id":135,"type":1,"frequency":200,"change":false,"lubricationSheetRow":30,"_id":135},
   //     {"createdAt":1557417532899,"updatedAt":1557417532899,"id":136,"type":1,"frequency":200,"change":false,"lubricationSheetRow":31,"_id":136},
   //     {"createdAt":1557417532900,"updatedAt":1557417532900,"id":137,"type":2,"frequency":500,"change":false,"lubricationSheetRow":30,"_id":137},
   //     {"createdAt":1557417532902,"updatedAt":1557417532902,"id":138,"type":2,"frequency":500,"change":false,"lubricationSheetRow":31,"_id":138},
   //     {"createdAt":1557417532904,"updatedAt":1557417532904,"id":139,"type":3,"frequency":850,"change":true,"lubricationSheetRow":30,"_id":139},
   //     {"createdAt":1557417532906,"updatedAt":1557417532906,"id":140,"type":3,"frequency":850,"change":true,"lubricationSheetRow":31,"_id":140},
   //     {"createdAt":1557417532908,"updatedAt":1557417532908,"id":141,"type":4,"frequency":1250,"change":false,"lubricationSheetRow":30,"_id":141},
   //     {"createdAt":1557417532909,"updatedAt":1557417532909,"id":142,"type":4,"frequency":1250,"change":false,"lubricationSheetRow":31,"_id":142},
   //     {"createdAt":1557417532912,"updatedAt":1557417532912,"id":143,"type":5,"frequency":2000,"change":true,"lubricationSheetRow":30,"_id":143},
   //     {"createdAt":1557417532913,"updatedAt":1557417532913,"id":144,"type":5,"frequency":2000,"change":true,"lubricationSheetRow":31,"_id":144},
   //     {"createdAt":1557417532917,"updatedAt":1557417532917,"id":145,"type":1,"frequency":200,"change":false,"lubricationSheetRow":32,"_id":145},
   //     {"createdAt":1557417532918,"updatedAt":1557417532918,"id":146,"type":2,"frequency":500,"change":false,"lubricationSheetRow":32,"_id":146},
   //     {"createdAt":1557417532920,"updatedAt":1557417532920,"id":147,"type":3,"frequency":850,"change":false,"lubricationSheetRow":32,"_id":147},
   //     {"createdAt":1557417532922,"updatedAt":1557417532922,"id":148,"type":4,"frequency":1250,"change":true,"lubricationSheetRow":32,"_id":148},
   //     {"createdAt":1557417532926,"updatedAt":1557417532926,"id":149,"type":5,"frequency":2000,"change":false,"lubricationSheetRow":32,"_id":149},
   //     {"createdAt":1557417532931,"updatedAt":1557417532931,"id":150,"type":1,"frequency":200,"change":false,"lubricationSheetRow":33,"_id":150},
   //     {"createdAt":1557417532933,"updatedAt":1557417532933,"id":151,"type":2,"frequency":500,"change":true,"lubricationSheetRow":33,"_id":151},
   //     {"createdAt":1557417532934,"updatedAt":1557417532934,"id":152,"type":3,"frequency":850,"change":false,"lubricationSheetRow":33,"_id":152},
   //     {"createdAt":1557417532938,"updatedAt":1557417532938,"id":153,"type":4,"frequency":1250,"change":false,"lubricationSheetRow":33,"_id":153},
   //     {"createdAt":1557417532943,"updatedAt":1557417532943,"id":154,"type":5,"frequency":2000,"change":true,"lubricationSheetRow":33,"_id":154},
   //     {"createdAt":1557417532950,"updatedAt":1557417532950,"id":155,"type":1,"frequency":200,"change":false,"lubricationSheetRow":34,"_id":155},
   //     {"createdAt":1557417532952,"updatedAt":1557417532952,"id":156,"type":2,"frequency":500,"change":false,"lubricationSheetRow":34,"_id":156},
   //     {"createdAt":1557417532955,"updatedAt":1557417532955,"id":157,"type":3,"frequency":850,"change":true,"lubricationSheetRow":34,"_id":157},
   //     {"createdAt":1557417532959,"updatedAt":1557417532959,"id":158,"type":4,"frequency":1250,"change":false,"lubricationSheetRow":34,"_id":158},
   //     {"createdAt":1557417532960,"updatedAt":1557417532960,"id":159,"type":5,"frequency":2000,"change":true,"lubricationSheetRow":34,"_id":159},
   //     {"createdAt":1557417532964,"updatedAt":1557417532964,"id":160,"type":1,"frequency":200,"change":true,"lubricationSheetRow":35,"_id":160},
   //     {"createdAt":1557417532966,"updatedAt":1557417532966,"id":161,"type":2,"frequency":500,"change":false,"lubricationSheetRow":35,"_id":161},
   //     {"createdAt":1557417532968,"updatedAt":1557417532968,"id":162,"type":3,"frequency":850,"change":false,"lubricationSheetRow":35,"_id":162},
   //     {"createdAt":1557417532972,"updatedAt":1557417532972,"id":163,"type":4,"frequency":1250,"change":true,"lubricationSheetRow":35,"_id":163},
   //     {"createdAt":1557417532973,"updatedAt":1557417532973,"id":164,"type":5,"frequency":2000,"change":false,"lubricationSheetRow":35,"_id":164},
   //     {"createdAt":1557582427399,"updatedAt":1557582427399,"id":165,"type":1,"frequency":100,"change":false,"lubricationSheetRow":36,"_id":165},
   //     {"createdAt":1557582427401,"updatedAt":1557582427401,"id":166,"type":2,"frequency":250,"change":true,"lubricationSheetRow":36,"_id":166},
   //     {"createdAt":1557582427403,"updatedAt":1557582427403,"id":167,"type":3,"frequency":405,"change":false,"lubricationSheetRow":36,"_id":167},
   //     {"createdAt":1557582427404,"updatedAt":1557582427404,"id":168,"type":4,"frequency":500,"change":false,"lubricationSheetRow":36,"_id":168},
   //     {"createdAt":1557582427405,"updatedAt":1557582427405,"id":169,"type":5,"frequency":850,"change":true,"lubricationSheetRow":36,"_id":169},
   //     {"createdAt":1557582427407,"updatedAt":1557582427407,"id":170,"type":1,"frequency":100,"change":true,"lubricationSheetRow":37,"_id":170},
   //     {"createdAt":1557582427408,"updatedAt":1557582427408,"id":171,"type":2,"frequency":250,"change":false,"lubricationSheetRow":37,"_id":171},
   //     {"createdAt":1557582427411,"updatedAt":1557582427411,"id":172,"type":3,"frequency":405,"change":false,"lubricationSheetRow":37,"_id":172},
   //     {"createdAt":1557582427414,"updatedAt":1557582427414,"id":173,"type":4,"frequency":500,"change":true,"lubricationSheetRow":37,"_id":173},
   //     {"createdAt":1557582427415,"updatedAt":1557582427415,"id":174,"type":5,"frequency":850,"change":false,"lubricationSheetRow":37,"_id":174},
   //     {"createdAt":1557582427418,"updatedAt":1557582427418,"id":175,"type":1,"frequency":100,"change":false,"lubricationSheetRow":38,"_id":175},
   //     {"createdAt":1557582427419,"updatedAt":1557582427419,"id":176,"type":2,"frequency":250,"change":false,"lubricationSheetRow":38,"_id":176},
   //     {"createdAt":1557582427420,"updatedAt":1557582427420,"id":177,"type":3,"frequency":405,"change":true,"lubricationSheetRow":38,"_id":177},
   //     {"createdAt":1557582427422,"updatedAt":1557582427422,"id":178,"type":4,"frequency":500,"change":false,"lubricationSheetRow":38,"_id":178},
   //     {"createdAt":1557582427423,"updatedAt":1557582427423,"id":179,"type":5,"frequency":850,"change":true,"lubricationSheetRow":38,"_id":179},
   //     {"createdAt":1557582427427,"updatedAt":1557582427427,"id":180,"type":1,"frequency":100,"change":true,"lubricationSheetRow":39,"_id":180},
   //     {"createdAt":1557582427429,"updatedAt":1557582427429,"id":181,"type":2,"frequency":250,"change":false,"lubricationSheetRow":39,"_id":181},
   //     {"createdAt":1557582427432,"updatedAt":1557582427432,"id":182,"type":3,"frequency":405,"change":false,"lubricationSheetRow":39,"_id":182},
   //     {"createdAt":1557582427434,"updatedAt":1557582427434,"id":183,"type":4,"frequency":500,"change":false,"lubricationSheetRow":39,"_id":183},
   //     {"createdAt":1557582427435,"updatedAt":1557582427435,"id":184,"type":5,"frequency":850,"change":true,"lubricationSheetRow":39,"_id":184},
   //     {"createdAt":1557582427438,"updatedAt":1557582427438,"id":185,"type":1,"frequency":100,"change":false,"lubricationSheetRow":40,"_id":185},
   //     {"createdAt":1557582427440,"updatedAt":1557582427440,"id":186,"type":1,"frequency":100,"change":false,"lubricationSheetRow":41,"_id":186},
   //     {"createdAt":1557582427441,"updatedAt":1557582427441,"id":187,"type":2,"frequency":250,"change":true,"lubricationSheetRow":40,"_id":187},
   //     {"createdAt":1557582427443,"updatedAt":1557582427443,"id":188,"type":2,"frequency":250,"change":true,"lubricationSheetRow":41,"_id":188},
   //     {"createdAt":1557582427445,"updatedAt":1557582427445,"id":189,"type":3,"frequency":405,"change":false,"lubricationSheetRow":40,"_id":189},
   //     {"createdAt":1557582427447,"updatedAt":1557582427447,"id":190,"type":3,"frequency":405,"change":false,"lubricationSheetRow":41,"_id":190},
   //     {"createdAt":1557582427449,"updatedAt":1557582427449,"id":191,"type":4,"frequency":500,"change":false,"lubricationSheetRow":40,"_id":191},
   //     {"createdAt":1557582427450,"updatedAt":1557582427450,"id":192,"type":4,"frequency":500,"change":false,"lubricationSheetRow":41,"_id":192},
   //     {"createdAt":1557582427452,"updatedAt":1557582427452,"id":193,"type":5,"frequency":850,"change":true,"lubricationSheetRow":40,"_id":193},
   //     {"createdAt":1557582427454,"updatedAt":1557582427454,"id":194,"type":5,"frequency":850,"change":true,"lubricationSheetRow":41,"_id":194},
   //     {"createdAt":1557582427459,"updatedAt":1557582427459,"id":195,"type":1,"frequency":100,"change":false,"lubricationSheetRow":42,"_id":195},
   //     {"createdAt":1557582427461,"updatedAt":1557582427461,"id":196,"type":2,"frequency":250,"change":true,"lubricationSheetRow":42,"_id":196},
   //     {"createdAt":1557582427464,"updatedAt":1557582427464,"id":197,"type":3,"frequency":405,"change":false,"lubricationSheetRow":42,"_id":197},
   //     {"createdAt":1557582427466,"updatedAt":1557582427466,"id":198,"type":4,"frequency":500,"change":true,"lubricationSheetRow":42,"_id":198},
   //     {"createdAt":1557582427468,"updatedAt":1557582427468,"id":199,"type":5,"frequency":850,"change":false,"lubricationSheetRow":42,"_id":199},
   //     {"createdAt":1557582427472,"updatedAt":1557582427472,"id":200,"type":1,"frequency":100,"change":false,"lubricationSheetRow":43,"_id":200},
   //     {"createdAt":1557582427474,"updatedAt":1557582427474,"id":201,"type":2,"frequency":250,"change":true,"lubricationSheetRow":43,"_id":201},
   //     {"createdAt":1557582427476,"updatedAt":1557582427476,"id":202,"type":3,"frequency":405,"change":false,"lubricationSheetRow":43,"_id":202},
   //     {"createdAt":1557582427477,"updatedAt":1557582427477,"id":203,"type":4,"frequency":500,"change":true,"lubricationSheetRow":43,"_id":203},
   //     {"createdAt":1557582427480,"updatedAt":1557582427480,"id":204,"type":5,"frequency":850,"change":true,"lubricationSheetRow":43,"_id":204},
   //     {"createdAt":1557582427543,"updatedAt":1557582427543,"id":205,"type":1,"frequency":100,"change":false,"lubricationSheetRow":44,"_id":205},
   //     {"createdAt":1557582427545,"updatedAt":1557582427545,"id":206,"type":2,"frequency":250,"change":true,"lubricationSheetRow":44,"_id":206},
   //     {"createdAt":1557582427547,"updatedAt":1557582427547,"id":207,"type":3,"frequency":405,"change":false,"lubricationSheetRow":44,"_id":207},
   //     {"createdAt":1557582427548,"updatedAt":1557582427548,"id":208,"type":4,"frequency":500,"change":true,"lubricationSheetRow":44,"_id":208},
   //     {"createdAt":1557582427549,"updatedAt":1557582427549,"id":209,"type":5,"frequency":850,"change":false,"lubricationSheetRow":44,"_id":209},
   //
   //   ]);
   // }
   //
   // if (await MaintenanceRow.count() > 0){
   // }else{
   //   await MaintenanceRow.createEach([
   //     {"createdAt":1557082747023,"updatedAt":1557082747023,"id":22,"application":"Primario","amount":1,"partialCost":75,"sparePart":5,"maintenance":9,"_id":22},
   //     {"createdAt":1557082747027,"updatedAt":1557082747027,"id":23,"application":"Secundario","amount":1,"partialCost":29,"sparePart":1,"maintenance":9,"_id":23},
   //     {"createdAt":1557082747030,"updatedAt":1557082747030,"id":24,"application":"Primario","amount":1,"partialCost":15,"sparePart":7,"maintenance":9,"_id":24},
   //     {"createdAt":1557082747033,"updatedAt":1557082747033,"id":25,"application":"Terciario","amount":1,"partialCost":2,"sparePart":10,"maintenance":9,"_id":25},
   //     {"createdAt":1557082747035,"updatedAt":1557082747035,"id":26,"application":"Primario","amount":2,"partialCost":14,"sparePart":3,"maintenance":9,"_id":26},
   //     {"createdAt":1557082747039,"updatedAt":1557082747039,"id":27,"application":"Primario","amount":3,"partialCost":17.25,"sparePart":11,"maintenance":9,"_id":27},
   //     {"createdAt":1557234510116,"updatedAt":1557234510116,"id":28,"application":"normal","amount":15,"partialCost":165,"sparePart":2,"maintenance":10,"_id":28},
   //     {"createdAt":1557234510123,"updatedAt":1557234510123,"id":29,"application":"normal","amount":10,"partialCost":37.5,"sparePart":8,"maintenance":10,"_id":29},
   //     {"createdAt":1557234510130,"updatedAt":1557234510130,"id":30,"application":"Terciario","amount":1,"partialCost":2,"sparePart":10,"maintenance":10,"_id":30},
   //     {"createdAt":1557234510138,"updatedAt":1557234510138,"id":31,"application":"Primario","amount":2,"partialCost":14,"sparePart":3,"maintenance":10,"_id":31},
   //   ])
   // }
   // if (await Maintenance.count() > 0){
   // }else{
   //   await Maintenance.createEach([
   //     {"createdAt":1557082747019,"updatedAt":1557082747041,"id":9,"date":"05/05/2019","maintenanceType":5,"maintenanceFrequency":4000,"observations":"","totalHoursEquipment":0,"partialHoursEquipment":0,"maintenanceCost":152.25,"maintenanceTime":0,"equipment":3,"_id":9},
   //     {"createdAt":1557234510102,"updatedAt":1557234510143,"id":10,"date":"07/05/2019","maintenanceType":3,"maintenanceFrequency":1000,"observations":"","totalHoursEquipment":9,"partialHoursEquipment":9,"maintenanceCost":218.5,"maintenanceTime":0.5,"equipment":3,"_id":10},
   //   ])
   // }
   //
   // if(await EquipmentUseHour.count() > 0){
   // }else{
   //   await EquipmentUseHour.createEach([
   //     {"createdAt":1557148864903,"updatedAt":1557148864903,"id":1,"date":"06/05/2019","hours":1,"constructionSite":null,"equipment":3,"_id":1},
   //     {"createdAt":1557148868914,"updatedAt":1557148868914,"id":2,"date":"06/05/2019","hours":8,"constructionSite":null,"equipment":3,"_id":2},
   //     {"createdAt":1557148968835,"updatedAt":1557148968835,"id":4,"date":"03/05/2019","hours":8,"constructionSite":null,"equipment":1,"_id":4},
   //     {"createdAt":1557148972911,"updatedAt":1557148972911,"id":5,"date":"02/05/2019","hours":8,"constructionSite":null,"equipment":1,"_id":5},
   //     {"createdAt":1557148978009,"updatedAt":1557148978009,"id":6,"date":"01/05/2019","hours":8,"constructionSite":null,"equipment":1,"_id":6},
   //     {"createdAt":1557148984608,"updatedAt":1557148984608,"id":7,"date":"30/04/2019","hours":7,"constructionSite":null,"equipment":1,"_id":7},
   //     {"createdAt":1557148993763,"updatedAt":1557148993763,"id":8,"date":"06/05/2019","hours":8,"constructionSite":null,"equipment":1,"_id":8},
   //     {"createdAt":1557149002859,"updatedAt":1557149002859,"id":9,"date":"30/04/2019","hours":1,"constructionSite":null,"equipment":1,"_id":9},
   //     {"createdAt":1557417220839,"updatedAt":1557417220839,"id":10,"date":"09/05/2019","hours":8,"constructionSite":null,"equipment":4,"_id":10},
   //     {"createdAt":1557417292829,"updatedAt":1557417292829,"id":11,"date":"08/05/2019","hours":8,"constructionSite":null,"equipment":4,"_id":11},
   //     {"createdAt":1557417418092,"updatedAt":1557417418092,"id":12,"date":"09/05/2019","hours":12,"constructionSite":null,"equipment":2,"_id":12},
   //     {"createdAt":1557417555523,"updatedAt":1557417555523,"id":13,"date":"08/05/2019","hours":12,"constructionSite":null,"equipment":2,"_id":13},
   //     {"createdAt":1557419345045,"updatedAt":1557419345045,"id":14,"date":"09/05/2019","hours":8,"constructionSite":null,"equipment":4,"_id":14},
   //     {"createdAt":1557419387362,"updatedAt":1557419387362,"id":15,"date":"03/05/2019","hours":12,"constructionSite":null,"equipment":2,"_id":15},
   //     {"createdAt":1557419625469,"updatedAt":1557419625469,"id":16,"date":"02/05/2019","hours":12,"constructionSite":null,"equipment":2,"_id":16},
   //     {"createdAt":1557419737355,"updatedAt":1557419737355,"id":17,"date":"06/05/2019","hours":20,"constructionSite":null,"equipment":2,"_id":17},
   //     {"createdAt":1557419784241,"updatedAt":1557419784241,"id":18,"date":"09/05/2019","hours":25,"constructionSite":null,"equipment":2,"_id":18},
   //   ])
   // }


   return;


};
