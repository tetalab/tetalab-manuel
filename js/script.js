/* Author:

*/
$(document).ready(function() {

  $('.modal').modal({keyboard: true});

  $("#map a").popover({html: true});

  $("#map a[rel=popover]").mouseover(function(){
    $("#location-pin").attr("style", $(this).data("position"));
    $("#location-pin").show();
    $(this).popover('show');
  });

  $("#map a[rel=popover]").mouseout(function(){
    $(this).popover('hide');
    $("#location-pin").hide();
  });
});
