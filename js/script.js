/* Author:

*/
$(document).ready(function() {
  $("#map a").mouseover(function(){
    $("#location-pin").attr("style", $(this).data("position"));
  });

  $("#map a").mouseout(function(){
    $("#location-pin").attr("style", "position:relative;top:-400px;left:-660px;");
  });
});
