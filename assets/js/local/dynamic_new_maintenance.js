$(document).ready(function(){
  $("#MaintenanceFrequency").on("change paste keyup", function() {
    var maintType = $(this).val();
    $(this).find('option:eq(0)').prop('disabled', true);
    $('#newMaintenanceBtn').prop('disabled', false);

    //$(".noChange-" + maintType + " option:eq(0)").prop('selected', true);
    $('.noChange-' + maintType).each(function(){
      $(this).find('option:eq(0)').prop('selected', true);
    });
    $('.change-' + maintType).each(function(){
      $(this).find("option[data-default='def']").prop('selected', true);
    });
    if($('[name="motorOilSelect1"]').val() != ""){
      $('[name="motorOilSelect2"]').find('option:eq(0)').prop('selected', true);
    }

  });

  $('[name="motorOilSelect1"]').on("change keyup", function(){
    console.log($(this).val());
    if($(this).val() != ""){
      $('[name="motorOilSelect2"]').find('option:eq(0)').prop('selected', true);
    }
  });
  $('[name="motorOilSelect2"]').on("change keyup", function(){
    console.log($(this).val());
    if($(this).val() != ""){
      $('[name="motorOilSelect1"]').find('option:eq(0)').prop('selected', true);
    }
  });

});
