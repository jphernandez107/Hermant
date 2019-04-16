$(document).ready(function(){
  var next = 1;
  $(".add-more").click(function(e){
    e.preventDefault();
    var item = $(this).attr("data-item");
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

    var inputId = item + 'Input' + next;
    var inputDiv = document.getElementById(item + 'InputDiv');
    var input = document.getElementById(item + 'Input');
    var tmpInput = input.cloneNode(true);
    tmpInput.setAttribute('name',inputId);
    tmpInput.setAttribute('id',inputId);
    tmpInput.value = inputValue;
    inputDiv.appendChild(tmpInput);


    var selId = item + 'Select' + next;
    var selectDiv = document.getElementById(item + 'SelectDiv');
    var select = document.getElementById(item + 'Select');
    var tmpSelect = select.cloneNode(true);
    tmpSelect.setAttribute('name',selId);
    tmpSelect.setAttribute('id',selId);
    selectDiv.appendChild(tmpSelect);

    if("otherOil" === item || "otherLiquid" === item){
      var inputId = item + 'Amount' + next;
      var inputDiv = document.getElementById(item + 'AmountDiv');
      var input = document.getElementById(item + 'Amount');
      var tmpInput = input.cloneNode(true);
      tmpInput.setAttribute('name',inputId);
      tmpInput.setAttribute('id',inputId);
      tmpInput.value = inputValue;
      inputDiv.appendChild(tmpInput);
    }

    $("#" + item + "Count").attr("value", next);

  });
  $('.remove-me').click(function(e){
    e.preventDefault();
    var item = $(this).attr("data-item");
    next = parseInt($("#" + item + "Count").attr("value"));
    if(next > 1){
      var fieldNum = next;
      var fieldID = "#" + item + "Input" + fieldNum;
      var selectID = "#" + item + "Select" + fieldNum;
      //$(this).remove();
      $(fieldID).remove();
      $(selectID).remove();
      if("otherOil" == item || "otherLiquid" === item){
        $("#" + item + "Amount" + fieldNum).remove();
      }
      next = next - 1
    }
    $("#" + item + "Count").attr("value", next);
  });
});
