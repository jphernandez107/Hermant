
// $(document).ready(function() {
//   $('#calendar').fullCalendar({
//     plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
//     themeSystem: 'bootstrap4',
//     header: { left: 'today',
//               center: 'title',
//               right: 'prev,next'},
//     locale: 'es',
//     lang: 'es',
//     height:'auto',
//     timeZone:'UTC',
//     firstDay:1, //Lunes
//     dayNames:['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
//     dayNamesShort: ['Dom','Lun','Mar','Mie','Jue','Vie','Sáb'],
//     monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
//     monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
//     views: {
//       month: { // name of view
//         titleFormat: 'MMMM YYYY'
//         // other view-specific options here
//       }
//     },
//     weekends: true,
//     // dayClick: function(day) {
//     //   var d = new Date(day + 3*60*60*1000);
//     //   //d.setUTCSeconds(day/1000);
//     //   alert('a day has been clicked!' + d);
//     // },
//
//     defaultView: 'month',
//     //color: '#378006',
//     events: '/calendar/events'
//
//   });
//
// });

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
    themeSystem: 'bootstrap4',
    header: { left: 'today',
              center: 'title',
              right: 'prev,next'},
    locale: 'es',
    lang: 'es',
    height:'auto',
    timeZone:'UTC',
    firstDay:1, //Lunes
    dayNames:['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
    dayNamesShort: ['Dom','Lun','Mar','Mie','Jue','Vie','Sáb'],
    monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    // views: {
    //   month: { // name of view
    //     titleFormat: 'MMMM YYYY'
    //     // other view-specific options here
    //   }
    // },
    weekends: true,
    dayClick: function(day) {
      var d = new Date(day + 3*60*60*1000);
      //d.setUTCSeconds(day/1000);
      alert('a day has been clicked!' + d);
    },

    //defaultView: 'month',
    //color: '#378006',
    events: '/calendar/events'
  });

  calendar.render();
});
/*document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
    locale:'es',
    lang:'es',
    defaultView: 'dayGridMonth',
    defaultDate: '2019-05-07',
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    events: [
      {
        title: 'All Day Event',
        start: '2019-05-01'
      },
      {
        title: 'Long Event',
        start: '2019-05-07',
        end: '2019-05-10'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2019-05-09T16:00:00'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2019-05-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2019-05-11',
        end: '2019-05-13'
      },
      {
        title: 'Meeting',
        start: '2019-05-12T10:30:00',
        end: '2019-05-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2019-05-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2019-05-12T14:30:00'
      },
      {
        title: 'Birthday Party',
        start: '2019-05-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2019-05-28'
      }
    ]
  });

  calendar.render();
});*/
