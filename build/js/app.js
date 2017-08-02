(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Location(skinName) {
  this.skin = skinName;
}

Location.prototype.getLocation = function(location) {
  return location.concat("test");
};

exports.locationModule = Location;

},{}],2:[function(require,module,exports){
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

},{"./../js/location.js":1}]},{},[2]);
