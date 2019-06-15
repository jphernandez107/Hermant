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

      update_calendar_events_list();

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

  show_calendar: async function(req,res){
    //calendar_events_list();
    return res.view('pages/calendar/calendar');
  },

  readJsonFile: async function (req, res) {
    let ev = await Events.find({});
    if(ev){
      if(ev[ev.length - 1] != undefined){
        let events = ev[ev.length - 1].events;
        // console.log(ev[ev.length - 1]);
        // console.log(ev[ev.length - 1].events);
        if(events){
          return res.json(events)

        }
      }
    }
    return res.json([]);

  },

  reload_events: async function(req,res){
    update_calendar_events_list();
    return res.redirect('back');
  },

};

async function update_calendar_events_list(){
  /*
    Calculo el promedio de horas de uso por dia que tiene un equipo en un mes
    hacemos una prediccion de los proximos mantenimientos de cada equipo
    en base al promedio de uso y guardo los datos en el JSON de eventos
  */

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

  var equipments = await Equipment.find().populate('equipmentUseHours');

  var events = '[';


  // Busco todas las obras y a cada ID de obra le asigno un color aleatorio
  var colorArray = ['#0A6633', '#F0B3A9', '#F3D347', '#22AA99', '#00B3E6',
                    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
                    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
                    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
                    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
                    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];



  for(equipment of equipments){
    // Calculo el promedio de horas de uso que tiene cada equipo
    var dates = [];
    var totalHours = 0;
    var avg = 7;
    if(equipment.equipmentUseHours.length > 0){
      for(useHour of equipment.equipmentUseHours){
        var date = stringToDate(useHour.date);
        if(date.getTime() >= monthAgo.getTime()){
          dates.push(useHour.date);
          totalHours += Number(useHour.hours);
        }
      }
    }
    // Filtro las fechas encontradas y me quedo solo con las que no se repiten para el calculo del promedio.
    // Esto es porque si agregaron varios objetos de horas con una misma fecha, no tome los dos objetos si
    // no que filtre la fecha unicamente.
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

      /*
      Busco todos los X proximos mantenimientos de cada equipo, y los registro en JSON de eventos
      */
      var partialHours2 = equipment.partialHours;
      var nextMaintenance = 0;
      var hoursToNextMaintenance = 0;
      var partialHours = 0;
      for(var j=0; j<5; j++){
        partialHours = partialHours2;
        for(var i = uniqueFreqs.length-1; i>=1 ;i--){
          if(partialHours >= uniqueFreqs[uniqueFreqs.length-1]){
            partialHours -= uniqueFreqs[uniqueFreqs.length-1];
          }
          if(partialHours > uniqueFreqs[i]){
            partialHours -= uniqueFreqs[i];
          }else{
            nextMaintenance = uniqueFreqs[i];
          }
        }

        hoursToNextMaintenance = uniqueFreqs[1] + partialHours2 - equipment.partialHours*2;

        var daysToNextMaintenance = Math.round(hoursToNextMaintenance/avg);

        //Creo una fecha de hoy y le sumo los dias que faltan para el proximo manteimiento
        var dateNextMaintenance = new Date();
        dateNextMaintenance.setDate(dateNextMaintenance.getDate() + daysToNextMaintenance);

        //Seteo las horas y minutos a 0.
        dateNextMaintenance.setHours(0,0,0,0);
        if(dateNextMaintenance.getDay() == 0){// Si cae domingo, lo paso para el lunes
          dateNextMaintenance.setDate(dateNextMaintenance.getDate() + 1);
        }else if(dateNextMaintenance.getDay() == 6){// Si cae sabado, lo adelanto para el viernes
          dateNextMaintenance.setDate(dateNextMaintenance.getDate() - 1);
        }
        var dd = String(dateNextMaintenance.getDate()).padStart(2, '0');
        var mm = String(dateNextMaintenance.getMonth() + 1).padStart(2, '0');
        var yyyy = dateNextMaintenance.getFullYear();

        var newdate = yyyy + "-" + mm + "-" + dd;
        events += '{"title":"[' + nextMaintenance + 'Hs] Equipo ' + (equipment.code) + '",';
        events += '"start":"' + newdate + '",';
        if(equipment.constructionSite != null){
          events += '"color":"' + String(colorArray[equipment.constructionSite]) + '",';
        }
        events += '"url": "/equipment/details/' + equipment.id + '"},';

        var title = '[' + nextMaintenance + 'Hs] Equipo' + equipment.code;
        var start = newdate;
        var url = '/equipment/details/' + equipment.id;
        var color = "";
        if(equipment.constructionSite != null){
          color = String(colorArray[equipment.constructionSite]);
        }

        partialHours2 += uniqueFreqs[1];
      }
    }
  }
  events = events.substring(0, events.length-1);
  events += ']';

  if(await Events.count() > 0){
    //console.log("Estoy en events mayor a 0");
    //console.log(await Events.find({}));
    await Events.destroy({});
    //console.log(await Events.find({}));
    await Events.create({events:JSON.parse(events)});
  }else{
    await Events.create({events:JSON.parse(events)});
  }


  // if(Events.count() > 0){
  //   await Events.updateOne({id:1}).set({events:events.JSON.parse(events)});
  // }else{
  //   await Events.create({events:JSON.parse(events)});
  // }

  // 'use strict';
  //  const Fs = require('fs-extra');
  //  await Fs.writeFile('./assets/json/calendar_events.json', events);
}
