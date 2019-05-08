/**
 * EquipmentUseHourController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  new_use_hour: async function(req,res){

    let equipmentId = req.param('idEquip');

    let time = Number(req.param('timeOfUse'));
    let date = String(req.param('datepicker'));

    //console.log(date + ' -> ' + time + 'Hs');

    if(time > 0){
      var equipment = await Equipment.findOne({id:equipmentId});
      var newTotalHours = Number(equipment.totalHours) + time;
      var newPartialHours = Number(equipment.partialHours) + time;

      await Equipment.updateOne({id:equipmentId}).set({totalHours:newTotalHours, partialHours:newPartialHours});
      await EquipmentUseHour.create({date, hours:time, equipment:equipmentId});

      return res.redirect('/equipmentusehour/list');
    }else{
      return res.redirect('/equipmentusehour/list');
    }

  },

  list_view: async function(req,res){

    var equipments = await Equipment.find({}).sort([/*{constructionSite:'ASC'},*/{designation:'ASC'},{brand:'ASC'},{createdAt:'ASC'}]);

    if(!equipments){
      // No se encontraron equipos registrados.
      return res.redirect('/');
    }else{
      return res.view('pages/equipment/use_hour_equipment_list', {equipments});
    }
  },

  calendar_events_list: async function(req,res){

    function stringToDate(_date){
      var _delimiter = "/";
      var formatLowerCase=String("dd/mm/yyyy");
      var formatItems=formatLowerCase.split(_delimiter);
      var dateItems=_date.split(_delimiter);
      var monthIndex=formatItems.indexOf("mm");
      var dayIndex=formatItems.indexOf("dd");
      var yearIndex=formatItems.indexOf("yyyy");
      var month=parseInt(dateItems[monthIndex]);
      month-=1;
      var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
      return formatedDate;
    }

    function distinct(value, index, self) {
        return self.indexOf(value) === index;
    }

    var today = new Date();
    var monthAgo = new Date();
    monthAgo.setDate(today.getDate() - 30);
    monthAgo.setHours(0,0,0,0)

    //var useHours = await EquipmentUseHour.find();
    var equipments = await Equipment.find().populate('equipmentUseHours');

    var events = '[';

    for(equipment of equipments){
      var dates = [];
      var totalHours = 0;
      var avg = 7;
      //console.log(equipment.equipmentUseHours.length);
      if(equipment.equipmentUseHours.length > 0){
        for(useHour of equipment.equipmentUseHours){
          var date = stringToDate(useHour.date);
          if(date.getTime() >= monthAgo.getTime()){
            dates.push(useHour.date);
            totalHours += Number(useHour.hours);
            //console.log("Toy dentro de los 3 dias");
          }
          //console.log(useHour.date);
        }
      }
      // console.log('El equipo ' + equipment.id +' tiene ' + totalHours + 'Hs de uso en ' + dates.filter(distinct).length + ' dias');
      // console.log(dates.filter(distinct));
      if(dates.filter(distinct).length > 0){
        avg = Math.round(totalHours / dates.filter(distinct).length * 100) / 100;
      }

      // Tengo que conseguir los valores de las frecuencias de mantenimientos de cada equipo.
      if(equipment.lubricationSheet != null){
        var sheetRows = await LubricationSheetRow.find({lubricationSheet:equipment.lubricationSheet});
        var uniqueMaintFreqs = await MaintenanceFrequency.find({lubricationSheetRow:sheetRows[0].id});
        var uniqueFreqs = [];
        for(uMF of uniqueMaintFreqs){
          uniqueFreqs.push(uMF.frequency);
        }
        //console.log(uniqueFreqs)

        var partialHours2 = equipment.partialHours;
        var nextMaintenance = 0;
        var hoursToNextMaintenance = 0;
        var tmpPartialHours = 0;
        var partialHours = 0;
        for(var j=0; j<10; j++){
          partialHours = partialHours2;
          for(var i = uniqueFreqs.length-1; i>=1 ;i--){
            if(partialHours >= uniqueFreqs[uniqueFreqs.length-1]){
              partialHours -= uniqueFreqs[uniqueFreqs.length-1];
            }
            if(partialHours > uniqueFreqs[i]){
              partialHours -= uniqueFreqs[i];
            }else{
              nextMaintenance = uniqueFreqs[i];
              if(i < uniqueFreqs.length - 1){
                //hoursToNextMaintenance -= uniqueFreqs[i+1];
              }
            }
          }
          //console.log(tmpPartialHours + 'Hs, nextMaintenance -> ' + nextMaintenance + 'Hs')
          hoursToNextMaintenance = uniqueFreqs[1] + partialHours2 - equipment.partialHours*2;

          //console.log('Faltan ' + hoursToNextMaintenance + 'Hs para el prox mant');

          var daysToNextMaintenance = Math.round(hoursToNextMaintenance/avg);

          var dateNextMaintenance = new Date();
          dateNextMaintenance.setDate(dateNextMaintenance.getDate() + daysToNextMaintenance);

          //console.log('Faltan ' + daysToNextMaintenance + ' dias para el prox mant');
          dateNextMaintenance.setHours(0,0,0,0);
          var dd = String(dateNextMaintenance.getDate()).padStart(2, '0');
          var mm = String(dateNextMaintenance.getMonth() + 1).padStart(2, '0');
          var yyyy = dateNextMaintenance.getFullYear();

          var newdate = yyyy + "-" + mm + "-" + dd;
          //console.log(newdate);
          events += '{"title":"' + nextMaintenance + 'Hs ' + equipment.designation + ' ' + equipment.brand + '",';
          events += '"start":"' + newdate + '",';
          events += '"url": "/equipment/details/' + equipment.id + '"},';


          partialHours2 += uniqueFreqs[1];

          if(nextMaintenance === uniqueFreqs[uniqueFreqs.length-1]){
            tmpPartialHours += uniqueFreqs[uniqueFreqs.length-1];
          }

          //console.log(equipment.partialHours + 'Hs, nextMaintenance -> ' + nextMaintenance + 'Hs. El dia: ' + dateNextMaintenance);

        }
      }
    }
    events = events.substring(0, events.length-1);
    events += ']';

    'use strict';
    //let data = JSON.stringify(events, null, 2);
    //console.log(data);
    //const fs = require('fs');
    //fs.writeFileSync('./assets/json/calendar_events.json', events);
     const Fs = require('fs-extra');
     await Fs.writeFile('./assets/json/calendar_events.json', events);
    // //const json = JSON.stringify(data, null, 2);
    //
    // try {
    //   await Fs.writeFile('./assets/json/calendar_events.json', events);
    //   console.log('Saved data to file.')
    // } catch (error) {
    //   console.error(error)
    // }

    return res.view('pages/calendar/calendar');

  },

  readJsonFile: async function (req, res) {

    'use strict';
    const fs = require('fs');
    let rawdata = fs.readFileSync('./assets/json/calendar_events.json');
    let events = JSON.parse(rawdata);
    //console.log(student[0].title);
    if(events){
      return res.json(events)
    }

  },

  writeJsonFile: async function (req, res) {

    'use strict';
    const fs = require('fs');
    let events = '[{"title": "Mantenimiento Maquina 1", "start": "2019-05-02 00:00:00"},{"title": "Mantenimiento Maquina 2", "start": "2019-05-03 00:00:00"}]';
    let data = JSON.parse(events);
    //fs.writeFileSync('./assets/json/calendar_events.json', data);

  },

};
