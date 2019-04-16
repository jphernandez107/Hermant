/**
 * LubricationSheetController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  // Segun la obra en la que esta vinculado el equipo, se actualizan los datos
  // por altura, temperaturas y polvo en ambiente.

  lubsheet_view: async function(req,res){

    var equipmentId = req.param('idEquip');

    var equipment = await Equipment.findOne({id:equipmentId});

    if(equipment){
      return res.view('pages/lubSheet/new_sheet', {equipment});
    }else{
      return res.redirect('/equipment/list');
    }
  },

  lubSheet_new: async function(req,res){

    var equipmentId = req.param('idEquip');
    
  },

};
