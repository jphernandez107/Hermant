$('#linkSiteEquipmentModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var idEquipment = button.data('equipmentid')
  var idSite = button.data('siteid')
  var codeEquipment = button.data('equipmentcode')
  var codeSite = button.data('sitecode')

  var modal = $(this)
  modal.find('.modal-title').text('Vincular el equipo ' + codeEquipment + ' con la obra ' + codeSite)
  $("#linkEquipSiteModalForm").attr("action", '/site/details/add/' + idEquipment + '/' + idSite)
})

$(document).ready(function(){
    $("select.existingLubSheetSelect").change(function(){
        var selectedLubSheetToLink = $(this).children("option:selected").val();
        console.log("LubSheet elegida: " + selectedLubSheetToLink);
        if(selectedLubSheetToLink != "none"){
          document.getElementById('lubSheetFormToHide').hidden = true;
        }else{
          document.getElementById('lubSheetFormToHide').hidden = false;
        }
    });
});
