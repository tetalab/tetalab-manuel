/* Author:

*/
$(document).ready(function() {

  $("#map a").popover({html: true});

  $("#map a").mouseover(function(){
    $("#location-pin").attr("style", $(this).data("position"));
    $(this).popover('show');
  });

  $("#map a").mouseout(function(){
    $(this).popover('hide');
    $("#location-pin").attr("style", "position:relative;top:-400px;left:-660px;");
  });
});
