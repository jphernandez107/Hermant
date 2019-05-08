
var today = new Date();
//console.log(today);
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

var todayStr = dd + '/' + mm + '/' + yyyy

$('#datepicker').datepicker({
  uiLibrary: 'bootstrap4',
  locale: 'en-us',
  format: 'dd/mm/yyyy',
  value: todayStr,
  disableDaysOfWeek: [0, 6],
  keyboardNavigation: true,
  showOtherMonths: true,
  showOnFocus: true,
  size: 'small',
  minDate:  function() {
              var date = new Date();
              date.setDate(date.getDate()-7);
              return new Date(date.getFullYear(), date.getMonth(), date.getDate());
            },
  maxDate:  function() {
              var date = new Date();
              date.setDate(date.getDate()+7);
              return new Date(date.getFullYear(), date.getMonth(), date.getDate());
            },

});

$('[name="datepicker"]').each(function(){
  $(this).datepicker({
    uiLibrary: 'bootstrap4',
    locale: 'en-us',
    format: 'dd/mm/yyyy',
    value: todayStr,
    disableDaysOfWeek: [0, 6],
    keyboardNavigation: true,
    showOtherMonths: true,
    showOnFocus: true,
    minDate:  function() {
                var date = new Date();
                date.setDate(date.getDate()-7);
                return new Date(date.getFullYear(), date.getMonth(), date.getDate());
              },
    maxDate:  function() {
                var date = new Date();
                date.setDate(date.getDate());
                return new Date(date.getFullYear(), date.getMonth(), date.getDate());
              },
  });
});

//$('#MaintenanceFrequency').dropdown();
/*$('#MaintenanceFrequency').each(function(){
  $(this).dropdown({
    uiLibrary: 'bootstrap4',
    change: function (e) {
        //alert('Change is fired');
        console.log(e);
    },
  });
});*/
