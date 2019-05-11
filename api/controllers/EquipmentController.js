/**
 * EquipmentController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  /*
    Direccionamos al view para agregar un nuevo equipo a la base de datos del sistema.
  */
  new_equipment: async function(req,res){
    return res.view('pages/equipment/new_equipment');
  },
  /*
    Creamos un nuevo equipo en la base de datos del sistema.
  */
  create: async function(req,res){
    var designation = String(req.param('designacion'));
		var brand = String(req.param('marca'));
		var model = String(req.param('modelo'));
		var totalHours = Number(req.param('horasTotales'));
		var partialHours = Number(req.param('horasParciales'));

		var code = String(req.param('codigo'));
		var serialNumber = String(req.param('nroSerie'));
		var origin = String(req.param('origen'));
		var manufDate = String(req.param('fechaFab'));
		var serviceDate = String(req.param('fechaServicio'));

    var power = Number(req.param('potencia'));
		var weight = Number(req.param('peso'));
		var price = Number(req.param('precio'));
		var observations = String(req.param('observaciones'));

        console.log("hola");
    var constructionSite = await ConstructionSite.findOne({code:'T01'});

    console.log(constructionSite);


    var equipment = await Equipment.create({designation,brand,model,totalHours,partialHours,code,
                                      serialNumber,origin,manufDate,serviceDate,
                                      power,weight,price,observations, constructionSite:constructionSite.id});

    return res.redirect('/equipment/list');
  },

  /*
    Creamos un nuevo equipo en la base de datos del sistema.
  */
  update: async function(req,res){
    var equipment = await Equipment.findOne({id:req.param('id')});

    Equipment.update(equipment, {designation:req.param('d'),brand:req.param('b')});

    res.redirect('/equipment/list');

  },

  // TODO: Agregar metodos de eliminado de maquinas.

  /*
    Buscamos todos los equipos registrados en el sistema y llamamos al
    view para mostrar una lista de los equipos.
  */
  list_view: async function(req,res){

    var equipments = await Equipment.find({}).sort([{designation:'ASC'},{brand:'ASC'},{createdAt:'ASC'}]);

    if(!equipments){
      // No se encontraron equipos registrados.
      return res.redirect('/');
    }else{
      return res.view('pages/equipment/equipment_list', {equipments});
    }
  },

  details_view: async function(req,res){

    var equipmentId = req.param('idEquip');

    var equipment = await Equipment.findOne({id:equipmentId});

    if(equipment){
      return res.view('pages/equipment/equipment_details', {equipment});
    }else{
      return res.redirect('/equipment/list');
    }
  },

  /*
    Eliminamos un equipo
  */
  delete: async function(req,res){
    var idEquip = req.param('idEquip');

    await Equipment.destroy({id:idEquip});

    return res.redirect('/equipment/list');
  },

  setSite: async function(req, res){
      var idEquipo = req.param('idEquip');
      var idSite = req.param('idSite');
      console.log(idEquipo + ' ' + idSite);
      var equipment = await Equipment.updateOne({id:idEquipo}).set({constructionSite:idSite});
      return res.redirect('/site/details/' + idSite);
  },
  deleteSite: async function(req, res){
      var idEquipo = req.param('idEquip');
      var idSite = req.param('idSite');
      var idSiteTaller = 1; //se pone en el id del taller
      var equipment = await Equipment.updateOne({id:idEquipo}).set({constructionSite:idSiteTaller});
      return res.redirect('/site/details/' + idSite);
    }

};
