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
     complete += 1;
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
     complete += 1;
   }else{
     await Equipment.createEach([
       { code: 'FDR386', brand: 'Komatsu', model: 'AR-304', designation: 'Excavadora', serialNumber:'019238201', origin:'Brasil', manufDate:'2019', serviceDate:'2019', power:'200', price:'2000000', observations:'Equipo por default' },
       { code: 'SDD034', brand: 'Samsung', model: 'GT-502', designation: 'Topadora', serialNumber:'019123334', origin:'Mexico', manufDate:'2019', serviceDate:'2019', power:'220', price:'3000000', observations:'Equipo por default' },
       { code: 'TTR440', brand: 'Caterpillar', model: 'KR-123', designation: 'Cargadora', serialNumber:'12339033', origin:'Brasil', manufDate:'2019', serviceDate:'2019', power:'120', price:'1500000', observations:'Equipo por default' },
       { code: 'FDR230', brand: 'Komatsu', model: 'AR-603', designation: 'Retroexcavadora', serialNumber:'019223949', origin:'Brasil', manufDate:'2019', serviceDate:'2019', power:'190', price:'2000000', observations:'Equipo por default' },

     ]);
   }
   if (await SparePart.count() > 0) {
     complete +=1;
   }else{
     await SparePart.createEach([
       { internalCode: 'KOD345', externalCode: '1239390', type: 'Filtro', application: 'Aceite Motor', brand:'YPF', model:'Y220', stock:'40', },
       { internalCode: 'DOS233', externalCode: '5230002', type: 'Aceite', application: 'Motor', brand:'SHELL', model:'S520', stock:'100', },
       { internalCode: 'PDD403', externalCode: '1232113', type: 'Liquido', application: 'Refrigerante', brand:'YPF', model:'R120', stock:'40', },
       { internalCode: 'KER203', externalCode: '1250033', type: 'Filtro', application: 'Combustible', brand:'YPF', model:'C403', stock:'19', },
     ]);
   }
   if (await ConstructionSite.count() > 0) {
     complete +=1;
   }else{
     await ConstructionSite.createEach([
       { code: 'T01', name: 'Taller', province: 'Jujuy', district: 'S.S. de Jujuy', distance:'0', initDate:'-', finishDate:'-', maxTemp:'28', minTemp:'6', altitude:'1250', },
       { code: 'C01', name: 'Cantera Rio Grande', province: 'Jujuy', district: 'S.S. de Jujuy', distance:'7', initDate:'2019', finishDate:'2022', maxTemp:'28', minTemp:'6', altitude:'1250', },
       { code: 'A03', name: 'Mina Aguilar', province: 'Jujuy', district: 'Humahuaca', distance:'234', initDate:'2017', finishDate:'2020', maxTemp:'25', minTemp:'-10', altitude:'3980', },
       { code: 'S02', name: 'Dique Susques', province: 'Jujuy', district: 'Susques', distance:'203', initDate:'2019', finishDate:'2021', maxTemp:'22', minTemp:'-8', altitude:'3900', },
     ]);
   }


   return;


};
