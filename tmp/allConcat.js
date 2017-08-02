//https://forum.supercell.com/showthread.php/1217796-Clash-of-Clans-API-a-tutorial

var apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg3NzExZmZhLTExYmMtNDMyMy05MjdlLTRmZWJkYjc4NzNhNSIsImlhdCI6MTUwMTcxMzExOCwic3ViIjoiZGV2ZWxvcGVyL2VhNjAzNzViLWM1YzctZGUyMS1mN2NjLTRjODUwYWEyZDc5ZiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjI1NS4yNTUuMjU1LjAiXSwidHlwZSI6ImNsaWVudCJ9XX0.-EtPYjntm67S2S2uPRifVPeZetPCZcuH7JA87YLgNIH6FrdEFatSKk2wrZ0KhI4l3E0Tg1RYdxtGKOseb9_cwQ";
var playerTag = "#2U2RPQRVL";
var clanTag = "PO8RVRV9";

$(document).ready(function() {
  $('#locationInputSubmit').click(function() {
    var location = $('#locationInput').val();
    // $('#showLocationResult').text("The location you entered is: " + location);
    // $.get("https://api.clashofclans.com/players/#2U2RPQRVL/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6Ijg3NzExZmZhLTExYmMtNDMyMy05MjdlLTRmZWJkYjc4NzNhNSIsImlhdCI6MTUwMTcxMzExOCwic3ViIjoiZGV2ZWxvcGVyL2VhNjAzNzViLWM1YzctZGUyMS1mN2NjLTRjODUwYWEyZDc5ZiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjI1NS4yNTUuMjU1LjAiXSwidHlwZSI6ImNsaWVudCJ9XX0.-EtPYjntm67S2S2uPRifVPeZetPCZcuH7JA87YLgNIH6FrdEFatSKk2wrZ0KhI4l3E0Tg1RYdxtGKOseb9_cwQ", function(response) {
    //   console.log(response);
    // });
    $.get("", function(response) {
      console.log(response);
    });
  });
});

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
