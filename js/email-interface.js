$(document).ready(function() {
  $("#email-form").submit(function(event) {
    event.preventDefault();
    var email = $("#email").val();
    $("#emailText").text("Thank you, " + email + " has been added to our list");
  });
});
