$(document).ready(function(){
  //var idBusqueda = "#filtrar" +
  //var idTabla = "#tabla" +
  $("#filterList").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#bodyTable tr").filter(function() {
      console.log("Filtranding.... " + value)
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
