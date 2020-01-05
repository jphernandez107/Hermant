$(document).ready(function(){
  var tables = document.getElementsByClassName('table-sheet');
  // console.log("Tabla con " + 'Hola' + " filas.");
  for(var table of tables){
    // console.log("Tabla con " + table.rows.length + " filas.");
    if(table.rows.length == 2){
      //table.parentNode.removeChild(table);
      table.hidden = true;
    }
  }

});
