/**
 * MaintenanceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  maintenance_view: async function(req,res){

    var equipmentId = req.param('idEquip');

    var equipment = await Equipment.findOne({id:equipmentId});
    var sheetRows = await LubricationSheetRow.find({lubricationSheet:equipment.lubricationSheet}).populate('maintenanceFrequencies');
    var parts = await SparePart.find({});
    var uniqueFreqs = await MaintenanceFrequency.find({lubricationSheetRow:sheetRows[0].id});

    if(equipment){
      if(parts){
        if(sheetRows){
          return res.view('pages/maintenance/new_maintenance', {equipment, parts, sheetRows, uniqueFreqs});
        }
      }
    }
    return res.redirect('/equipment/list');
  },

  maintenance_new: async function(req,res){

    var equipmentId = req.param('idEquip');

    var date = String(req.param('datepicker'));

    var freqs = String(req.param('maintenanceFrequency')).split(',', 2);
    var maintenanceType = Number(freqs[0]);
    var maintenanceFrequency = Number(freqs[1]);

    var maintenanceTime = Number(req.param('maintenanceTime'));
    var observations = String(req.param('observationsTextArea'));

    var maintenanceCost = 0;

    var equipment = await Equipment.findOne({id:equipmentId});

    var sheetRows = await LubricationSheetRow.find({lubricationSheet:equipment.lubricationSheet});
    var uniqueMaintFreqs = await MaintenanceFrequency.find({lubricationSheetRow:sheetRows[0].id});
    var uniqueFreqs = [];
    for(uMF of uniqueMaintFreqs){
      uniqueFreqs.push(uMF.frequency);
    }

    if(maintenanceFrequency == uniqueFreqs[uniqueFreqs.length - 1]){
      equipment = await Equipment.updateOne({id:equipmentId}).set({partialHours:0});
    }

    var maintenance = await Maintenance.create({date, maintenanceType, maintenanceFrequency,
      observations, equipment:equipmentId, totalHoursEquipment:equipment.totalHours,
      partialHoursEquipment:equipment.partialHours, maintenanceTime}).fetch();

    var count = [];//req.param('airFilterCount');
    var item = "airFilter";

    for(var i=0; i<11; i++){

      if(i==0){
        item = "airFilter";
      }else if(i==1){
        item = "oilFilter";
      }else if(i==2){
        item = "fuelFilter";
      }else if(i==3){
        item = "otherFilter";
      }else if(i==4){
        item = "motorOil";
      }else if(i==5){
        item = "hydraulicOil";
      }else if(i==6){
        item = "transmissionOil";
      }else if(i==7){
        item = "otherOil";
      }else if(i==8){
        item = "coolantLiquid";
      }else if(i==9){
        item = "breakLiquid";
      }else if(i==10){
        item = "otherLiquid";
      }
      count[i] = req.param(item + 'Count');

      for(var j=1; j<=count[i]; j++){
        // Estoy dentro de cada fila y creo el nuevo repuesto correspondiente
        var amount = 1;
        var part = req.param(item + 'Select' + j);
        if(part != "" && part != null){
          if(i<4){  // Son Filtros
            desc = req.param(item + 'Input' + j);
          }else if(i<7){  // Son Aceites
            amount = Number(req.param(item + 'AmountInput' + j));
          }else{  // Son Otros Liquidos
            amount = Number(req.param(item + 'AmountInput' + j));
          }
          var sparePart = await SparePart.findOne({id:part});
          // TODO: Chequear si el stock disponible en deposito es mayor que el necesario.
          var newStock = sparePart.stock - amount;
          await SparePart.update({id:part}).set({ stock:newStock });

          var partialCost = Number(amount * Number(sparePart.pricePerUnit));
          partialCost = Math.round(partialCost * 100)/100;
          var lubSheetRowID = Number(req.param(item + 'SheetRowID' + j));
          var lubSheetRow = await LubricationSheetRow.findOne({id:lubSheetRowID});

          maintenanceCost += partialCost;

          await MaintenanceRow.create({sparePart:part, application:lubSheetRow.application, amount, partialCost, maintenance:maintenance.id});

          // TODO: Restar el stock del repuesto.
        }
      }
    }
    maintenanceCost = Math.round(maintenanceCost * 100)/100;
    await Maintenance.updateOne({id:maintenance.id}).set({maintenanceCost:maintenanceCost});

    var maints = await Maintenance.find({});
    //var reps = await Repair.find({});
    var costsSum = 0;
    var minHour = equipment.totalHours;
    for(maint of maints){
      if(maint.totalHoursEquipment < minHour){
        minHour = maint.totalHoursEquipment;
      }
      costsSum += maint.maintenanceCost;
    }
    // for(rep of reps){
    //   costSum += rep.repairCost;
    // }
    if(equipment.totalHours > minHour){
      costsSum = costsSum / (equipment.totalHours - minHour);
    }

    await EquipmentCostIndex.create({date, equipment:equipmentId, index:costsSum});

    res.redirect('/equipment/details/' + equipmentId);

  },

  maintenance_details: async function(req,res){

    var maintenanceId = req.param('idMaintenance');
    var equipmentId = req.param('idEquip');

    var equipment = await Equipment.findOne({id:equipmentId});
    var maintenance = await Maintenance.findOne({id:maintenanceId});
    var maintenanceRows = await MaintenanceRow.find({maintenance:maintenanceId});

    var parts = await SparePart.find({});

    if(maintenance){
      if(equipment){
        if(maintenanceRows){
          if(parts){
            return res.view('pages/maintenance/maintenance_details', {maintenance, equipment, maintenanceRows, parts});
          }
        }
      }
    }
    return res.redirect('/equipment/list');
  },

  maintenance_delete: async function(req,res){
    var mantenanceId = req.param('idMantenance');
    var equipmentId = req.param('idEquip')

    await Maintenance.destroy({id:mantenanceId});

    return res.redirect('/equipment/details/' + equipmentId);
  },

};
