$(document).ready(function(){
  var tables = document.getElementsByClassName('table-sheet');

  for(table of tables){
    console.log("Tabla con " + table.rows.length + " filas.");
    if(table.rows.length == 2){
      //table.parentNode.removeChild(table);
      table.hidden = true;
    }
  }

});
