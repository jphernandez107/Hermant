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
  $(".add-more").click(function(e){
    e.preventDefault();
    var item = $(this).attr("data-app") + $(this).attr("data-part");
    next = parseInt($("#" + item + "Count").attr("value"));

    var addto = "#" + item + "Field" + next;
    var addRemove = "#" + item + "Field" + (next);
    next = next + 1;
    $("#" + item + "Field" + next).attr('data-source',$(addto).attr('data-source'));

    var inputValue = "Primario";
    switch (next) {
      case 1:
        inputValue = "Primario";
        break;
      case 2:
        inputValue = "Secundario";
        break;
      case 3:
        inputValue = "Terciario";
        break;
      default:
        inputValue = "Otro";
    }

    var row = document.getElementById(item + 'Row1');
    var parent = document.getElementById(item + 'Parent');

    var tmpRow = row.cloneNode(true);

    // Modifico los atributos de los componentes de la nueva fila.
    tmpRow.setAttribute('id', item + 'Row' + next);

    tmpRow.children[0].children[0].setAttribute('id',item + 'Select' + next);
    tmpRow.children[0].children[0].setAttribute('name',item + 'Select' + next);

    tmpRow.children[1].children[0].setAttribute('id',item + 'Input' + next);
    tmpRow.children[1].children[0].setAttribute('name',item + 'Input' + next);
    tmpRow.children[1].children[0].setAttribute('value',inputValue);

    document.getElementById('rm-'+item).hidden = false;

    var checks = tmpRow.getElementsByClassName(item + 'MaintenanceCheckbox1');
    console.log('length ' + checks.length);
    for(var i=0; i<checks.length; i++){
      if(checks[i].type == "checkbox" || checks[i].type == "hidden"){
        console.log('name: ' + checks[i].getAttribute('name'));
        var newName = item + 'MaintenanceCheckbox' + next;
        checks[i].setAttribute('name', newName);
        console.log('name: ' + checks[i].getAttribute('name'));
      }
    }

    if("otherOil" != item && "otherLiquid" != item){
      while (tmpRow.children[2].lastElementChild) {
        tmpRow.children[2].removeChild(tmpRow.children[2].lastElementChild);
      }
    }else{
      while (tmpRow.children[3].lastElementChild) {
        tmpRow.children[3].removeChild(tmpRow.children[3].lastElementChild);
      }
      tmpRow.children[2].children[0].setAttribute('id',item + 'AmountInput' + next);
      tmpRow.children[2].children[0].setAttribute('name',item + 'AmountInput' + next);
    }

    parent.appendChild(tmpRow);

    /*if("otherOil" === item || "otherLiquid" === item){
      var inputId = item + 'Amount' + next;
      var inputDiv = document.getElementById(item + 'AmountDiv');
      var input = document.getElementById(item + 'Amount');
      var tmpInput = input.cloneNode(true);
      tmpInput.setAttribute('name',inputId);
      tmpInput.setAttribute('id',inputId);
      tmpInput.value = inputValue;
      inputDiv.appendChild(tmpInput);
    }*/

    $("#" + item + "Count").attr("value", next);

  });
  $('.remove-me').click(function(e){
    e.preventDefault();
    var item = $(this).attr("data-app") + $(this).attr("data-part");
    next = parseInt($("#" + item + "Count").attr("value"));
    if(next > 1){
      var fieldNum = next;
      document.getElementById(item + 'Row' + next).remove(true);

      /*if("otherOil" == item || "otherLiquid" === item){
        $("#" + item + "Amount" + fieldNum).remove();
      }*/
      next = next - 1
    }
    if(next == 1){
      document.getElementById('rm-'+item).hidden = true;
    }
    $("#" + item + "Count").attr("value", next);
  });

  $(".sheetName").on("change paste keyup", function() {
    //console.log("Tengo una sheet registrada");
  });

});
