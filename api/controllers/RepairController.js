/**
 * RepairController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

    repair_view: async function(req,res){

      var equipmentId = req.param('idEquip');

      var equipment = await Equipment.findOne({id:equipmentId});


      if(equipment){
            return res.view('pages/repairs/new_repair', {equipment});
      }
      return res.redirect('/equipment/list');
    },

    repair_new: async function (req, res){
        var equipmentId = req.param('idEquip');

        var equipment = await Equipment.findOne({id:equipmentId});

        var date = String(req.param('datepicker'));
        var repairTime = Number(req.param('repairTime'));

        var repairCost = 0;

        var repair = await Repair.create({date, repairTime,totalHoursEquipment:equipment.totalHours, equipment:equipment.id}).fetch(); //con el fetch me quedo con el objeto

        var count = req.param('repairCount');

        for(var j=1; j<=count; j++){
          // Estoy dentro de cada fila y creo el nuevo repuesto correspondiente

         var part = req.param('repairPartInput' + j);
         var cost = req.param('repairCostInput' + j);

            cost = Math.round(cost * 100)/100;

            repairCost += cost;

            await RepairRow.create({part, cost, repair:repair.id});

            // TODO: Restar el stock del repuesto.

        }

        repairCost = Math.round(repairCost * 100)/100;
        await Repair.updateOne({id:repair.id}).set({totalCost:repairCost});//actualiza la reapir que tenia el fetch de antes
        res.redirect('/equipment/details/' + equipmentId);



    },
    repair_details:async function(req,res){

      var repairId = req.param('idRepairs');
      var equipmentId = req.param('idEquip');

      var equipment = await Equipment.findOne({id:equipmentId});
      var repair = await Repair.findOne({id:repairId});
      var repairRows = await RepairRow.find({repair:repairId});


      if(equipment){
        if(repair){
          if(repairRows){
              return res.view('pages/repairs/repair_details', {repair, equipment, repairRows});
          }
        }
      }
      return res.redirect('/equipment/list');
    },

    repair_delete: async function(req,res){
      var idRepair = req.param('idRepairs');
      var equipmentId = req.param('idEquip')

      await Repair.destroy({id:idRepair});

      return res.redirect('/equipment/details/' + equipmentId);
    },
};
