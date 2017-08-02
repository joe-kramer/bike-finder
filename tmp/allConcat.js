$(document).ready(function() {
  $("#email-form").submit(function(event) {
    event.preventDefault();
    var email = $("#email").val();
    $("#emailText").text("Thank you, " + email + " has been added to our list");
  });
});

var Location = require('./../js/location.js').locationModule;

$(document).ready(function() {
  $('#location-form').submit(function(event) {
    event.preventDefault();
    var location = $('#location').val();
    var locationObject = new Location("yellow");
    var output = locationObject.getLocation(location);
    $('#locationText').text(output);
  });
});
