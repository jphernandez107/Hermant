$(document).ready(function() {
  $('#calendar').fullCalendar({
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
    views: {
      month: { // name of view
        titleFormat: 'MMMM YYYY'
        // other view-specific options here
      }
    },
    weekends: true,
    // dayClick: function(day) {
    //   var d = new Date(day + 3*60*60*1000);
    //   //d.setUTCSeconds(day/1000);
    //   alert('a day has been clicked!' + d);
    // },

    defaultView: 'month',
    //color: '#378006',
    events: '/calendar/events'

  });

});
