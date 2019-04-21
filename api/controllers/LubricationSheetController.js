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
    var parts = await SparePart.find({});
    var sheet = await LubricationSheet.findOne({id:equipment.lubricationSheet});

    if(equipment){
      if(parts){
        if(sheet){
          return res.view('pages/lubSheet/new_sheet', {equipment, parts, sheet});
        }
        return res.view('pages/lubSheet/new_sheet', {equipment, parts});
      }
    }
    return res.redirect('/equipment/list');
  },

  lubsheet_new: async function(req,res){

    var equipmentId = req.param('idEquip');

    var lubSheet = await LubricationSheet.create({}).fetch();
    await LubricationSheet.addToCollection(lubSheet.id, 'equipments').members([equipmentId]);

    var count = [];//req.param('airFilterCount');
    var item = "airFilter";
    var maintCount;
    for(var k=1; k<10; k++){
      if(req.param('maintenanceInput' + k) == ""){
        break;
      }else{
        maintCount = k;
      }
    }
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
      console.log("Hay " +count[i]+ ' subfilas');

      for(var j=1; j<=count[i]; j++){
        // Estoy dentro de cada fila y creo el nuevo repuesto correspondiente
        var amount = 1;
        var desc = "";
        var part = req.param(item + 'Select' + j);
        if(part != ""){
          if(i<4){
            desc = req.param(item + 'Input' + j);
          }else if(i<7){
            amount = Number(req.param(item + 'AmountInput' + j));
          }else{
            desc = req.param(item + 'Input' + j);
            amount = Number(req.param(item + 'AmountInput' + j));
          }

          var row = await LubricationSheetRow.create({sparePart:part, application:desc, amount:amount, lubricationSheet:lubSheet.id}).fetch();

          if(item === "motorOil"){
            part = req.param(item + 'LowTempSelect' + j);
            if(part != ""){
              desc = "lowTemperature";
              var row = await LubricationSheetRow.create({sparePart:part, application:desc, amount:amount, lubricationSheet:lubSheet.id}).fetch();
            }
          }

          var maints = req.param(item + 'MaintenanceCheckbox' + j);
          console.log(maints);
          var found = 0;
          var realMaints = [];
          for(var l=0; l<maints.length; l++){
            if(maints[l+1] === 'on'){
              realMaints[l-found] = true;
              found ++;
              l++;
            }else{
              realMaints[l-found] = false;
            }
          }

          console.log(realMaints);
          console.log('Hay ' + maintCount + ' frecuencias y '+realMaints.length+' mants');
          for(var k=1; k <= maintCount; k++){
            var change = false;
            change = realMaints[k-1];
            console.log('El check '+k+' de '+item+' es ' + realMaints[k-1]);

            var maint = await MaintenanceFrequency.create({type: k,frequency:req.param('maintenanceInput' + k),
            change:change, lubricationSheetRow:row.id}).fetch();
          }
        }

      }

    }
    res.redirect('/equipment/details/' + equipmentId);

  },

  lubsheet_details: async function(req,res){

    var lubSheetId = req.param('idLubSheet');
    var equipmentId = req.param('idEquip');

    var equipment = await Equipment.findOne({id:equipmentId});
    var sheet = await LubricationSheet.findOne({id:lubSheetId});
    var sheetRows = await LubricationSheetRow.find({lubricationSheet:lubSheetId});
    var parts = [];
    var maintFreqs = [];
    for(sheetRow of sheetRows){
      var maintFreq = await MaintenanceFrequency.find({lubricationSheetRow:sheetRow.id});
      for (maint of maintFreq){
        maintFreqs.push(maint);
      }
    }
    var parts = await SparePart.find({});

    if(sheet){
      if(equipment){
        if(sheetRows){
          if(parts){
            if(maintFreqs){
              return res.view('pages/lubSheet/sheet_details', {sheet, equipment, sheetRows, parts, maintFreqs});
            }
          }
        }
      }
    }
    return res.redirect('/equipment/list');
  },

};
