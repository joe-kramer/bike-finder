var apiKey = "";

$(document).ready(function() {
  $('#locationInputSubmit').click(function() {
    var location = $('#locationInput').val();
    $('#showLocationResult').text("The location you entered is: " + location);
    $.get("", function(response) {
      console.log(response);
    });
  });
});
