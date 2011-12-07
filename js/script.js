/* Author:

*/
$(document).ready(function() {

  $("#map a").popover({html: true});

  $("#map a").mouseover(function(){
    $("#location-pin").attr("style", $(this).data("position"));
    $("#location-pin").show();
    $(this).popover('show');
  });

  $("#map a").mouseout(function(){
    $(this).popover('hide');
    $("#location-pin").hide();
  });
});
