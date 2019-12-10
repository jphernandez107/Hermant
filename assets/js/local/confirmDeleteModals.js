$('#deleteEquipmentModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var idEquipment = button.data('equipmentid')
    var codeEquipment = button.data('equipmentcode')
  
    var modal = $(this)
    modal.find('.modal-title').text('⚠️ CUIDADO! Seguro desea eliminar el equipo ' + codeEquipment + '?')
  })

  $('#deleteSiteModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var idSite = button.data('siteid')
    var codeSite = button.data('sitecode')
  
    var modal = $(this)
    modal.find('.modal-title').text('⚠️ CUIDADO! Seguro desea eliminar la obra <' + codeSite + '>?')
    $("#deleteSiteLink").attr('href', '/site/delete/' + idSite)
})

$('#deleteSparePartModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var idPart = button.data('partid')
    var codePart = button.data('partcode')
  
    var modal = $(this)
    modal.find('.modal-title').text('⚠️ CUIDADO! Seguro desea eliminar el repuesto con codigo interno <' + codePart + '>?')
    $("#deletePartLink").attr('href', '/parts/delete/' + idPart)
  })
  