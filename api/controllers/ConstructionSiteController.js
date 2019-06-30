/**
 * ConstructionSiteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  /*
    Direccionamos al view para agregar una nueva obra a la base de datos del sistema.
  */
  new_site: async function(req,res){
    return res.view('pages/site/new_site');
  },
  /*
    Creamos una nueva obra en la base de datos del sistema.
  */
  create: async function(req,res){
    var code = String(req.param('code'));
		var name = String(req.param('name'));
		var province = String(req.param('province'));
		var district = String(req.param('district'));
		var initDate = String(req.param('initDate'));
    var finishDate = String(req.param('finishDate'));
    var minTemp = Number(req.param('minTemp'));
    var maxTemp = Number(req.param('maxTemp'));
    var altitude = Number(req.param('altitude'));
    var distance = Number(req.param('distance'));
		var observations = String(req.param('observations'));


    var site = await ConstructionSite.create({code,name,province,district,
      initDate,finishDate,minTemp,maxTemp,altitude,distance,observations});

    return res.redirect('/site/list');
  },

  /*
    Buscamos todas las obras registradas en el sistema y llamamos al
    view para mostrar una lista de las obras.
  */
  list_view: async function(req,res){

    var sites = await ConstructionSite.find({}).populate('equipments');

    if(!sites){
      // No se encontraron obras registradas.
      return res.redirect('/');
    }else{
      return res.view('pages/site/site_list', {sites});
    }
  },

  details_view: async function(req,res){

    var idSite = req.param('idSite');
    var equipments = await Equipment.find({}).sort([{siteCriticality:"ASC"},{code:"ASC"}]);

    var site = await ConstructionSite.findOne({id:idSite});

    if(site){
      return res.view('pages/site/site_details', {site, equipments});
    }else{
      return res.redirect('/site/list');
    }
  },

  /*
    Eliminamos una obra
  */
  delete: async function(req,res){
    var idSite = req.param('idSite');

    await ConstructionSite.destroy({id:idSite});

    return res.redirect('/site/list');
  },

};
