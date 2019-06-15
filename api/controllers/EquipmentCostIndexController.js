/**
 * EquipmentCostIndexController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  index_view: function(req,res){
    return res.view('pages/index');
  },

  get_json_cost: function(req,res){
    var costIndexes = EquipmentCostIndex.find({});

    var mydate = new Date('25-03-2019');
    console.log(mydate.toDateString());

  },


};
