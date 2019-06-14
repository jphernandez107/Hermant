$(document).ready(function(){

  if(document.getElementById('sheetID') != null){
    console.log("Tengo una sheet registrada");
  }else{
    console.log("No tengo una sheet registrada");
  }
  var count = 0;

  if(document.getElementById('maintenanceInput1') != null){
    document.getElementById('maintenanceInput1').hidden = false;
    document.getElementById('maintenanceLabel1').hidden = false;
  }


  // Inputs de frecuecnias de mantenimiento dinamicos (Ocultan y a aparecen)
  $(".maintenanceInput").on("change paste keyup", function() {
    var encontrado = false;
    for(var i=9; i>0; i--){
      var input = document.getElementById('maintenanceInput'+i);
      var maintChecks = document.getElementsByClassName('maintenanceCheck' + (i));
      var maintCheckLabels = document.getElementsByClassName('maintenanceCheckLabel' + (i));
      if(input.value != "" && !encontrado){
        encontrado = true;
        count = i;
        if(i<9){
          document.getElementById('maintenanceInput' + (i+1)).hidden = false;
          document.getElementById('maintenanceLabel' + (i+1)).hidden = false;
        }
        for(var j=0; j<maintChecks.length;j++){
          console.log('lenght' + maintChecks.length);
          maintChecks[j].hidden = false;
          maintCheckLabels[j].hidden = false;
        }
      }else if (count < i){
        input.hidden = true;
        document.getElementById('maintenanceLabel' + (i)).hidden = true;
        for(var j=0; j<maintChecks.length;j++){
          document.getElementsByClassName('maintenanceCheck' + (i))[j].hidden = true;
          document.getElementsByClassName('maintenanceCheckLabel' + (i))[j].hidden = true;
        }

      }
    }
    document.getElementById('maintenanceInput' + (1)).hidden = false;
    document.getElementById('maintenanceLabel' + (1)).hidden = false;
    for(var j=0; j<document.getElementsByClassName('maintenanceCheck' + (1)).length;j++){
      document.getElementsByClassName('maintenanceCheck' + (1))[j].hidden = false;
      document.getElementsByClassName('maintenanceCheckLabel' + (1))[j].hidden = false;
    }
    console.log(count);
  });

  var next = 1;
  $(".add-more-repair").click(function(e){ // el . busca por clase, el # busca por id
    e.preventDefault();
    var item = $(this).attr("data-app"); //item = repair
    next = parseInt($("#" + item + "Count").attr("value"));

    // var addto = "#" + item + "Field" + next;
    // var addRemove = "#" + item + "Field" + (next);
    next = next + 1;
    // $("#" + item + "Field" + next).attr('data-source',$(addto).attr('data-source'));

    var row = document.getElementById(item + 'Row1');
    var parent = document.getElementById(item + 'Parent');

    var tmpRow = row.cloneNode(true);

    // Modifico los atributos de los componentes de la nueva fila.
    tmpRow.setAttribute('id', item + 'Row' + next);

    tmpRow.children[0].children[0].setAttribute('id',item + 'PartInput' + next);
    tmpRow.children[0].children[0].setAttribute('name',item + 'PartInput' + next);
    tmpRow.children[0].children[0].setAttribute('value',"");

    tmpRow.children[1].children[0].setAttribute('id',item + 'CostInput' + next);
    tmpRow.children[1].children[0].setAttribute('name',item + 'CostInput' + next);
    tmpRow.children[1].children[0].setAttribute('value',"");

    document.getElementById('rm-'+item + 'Part').hidden = false;

    while (tmpRow.children[2].lastElementChild) {
      tmpRow.children[2].removeChild(tmpRow.children[2].lastElementChild);
    }

    parent.appendChild(tmpRow);


    $("#" + item + "Count").attr("value", next);

  });
  $('.remove-me-repair').click(function(e){
    e.preventDefault();
    var item = $(this).attr("data-app");
    next = parseInt($("#" + item + "Count").attr("value"));
    if(next > 1){
      var fieldNum = next;
      document.getElementById(item + 'Row' + next).remove(true);

      next = next - 1
    }
    if(next == 1){
      document.getElementById('rm-'+item + 'Part').hidden = true;
    }
    $("#" + item + "Count").attr("value", next);
  });



});
