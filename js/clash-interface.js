//https://forum.supercell.com/showthread.php/1217796-Clash-of-Clans-API-a-tutorial
// import axios from 'axios';

var apiKey = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjBlZGZlMDkwLTM5N2YtNGJmOS1hNWVkLWI2MGFlMTk5ZDNiMyIsImlhdCI6MTUwMTc3NTg2NCwic3ViIjoiZGV2ZWxvcGVyL2VhNjAzNzViLWM1YzctZGUyMS1mN2NjLTRjODUwYWEyZDc5ZiIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjM4LjE0MC4yNy4xMDYiXSwidHlwZSI6ImNsaWVudCJ9XX0.VVFJpjXwVf-s4_sTxQ9HJInGkY3CBrIge5bZCu4V_0RAYMaNzXfdvc_mQzremS8n6RRVCAuYTAlIAjQWX28XLw";
var playerTag = "#2U2RPQRVL";

$(document).ready(function() {
  $('#locationInputSubmit').click(function() {
    var clanId = $('#locationInput').val();
    $('#showLocationResult').text("The ID you entered is: " + clanId);
    var encodedClanId = encodeURIComponent(clanId);
    var baseUrl = "https://api.clashofclans.com/v1/players/";
    // var request = new XMLHttpRequest();
    // request.open("GET", url, true);
    // request.setRequestHeader("Authorization", "Bearer " + apiKey);
    // request.setRequestHeader("Accept", "application/json");
    // var result = request.send(null);
    // console.log(result);

    // var httpClient = axios.create({
    //   baseURL = baseUrl,
    //   timeout: 10000,
    //   headers: {
    //     Authorization: 'Bearer ' + apiKey,
    //     Accept: 'application/json'
    //   }
    // });

    // httpClient.get(encodedClanId).then(response => response.data);
    // httpClient.get(encodedClanId).then(function(response) {
    //   console.log(response.data);
    // }).catch(exception error) {
    //   console.log(error.response.data);
    // });

    $.ajax({
      type: "GET",
      url: "https://api.clashofclans.com/v1/players/" + encodedClanId,
      headers: {
        'Authorization' : 'Bearer ' + apiKey,
        'Accept' : 'application/json'
      },
      success: function(data) {
        console.log(data);
      }
    });
  });
});
