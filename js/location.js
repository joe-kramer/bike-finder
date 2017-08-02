function Location(skinName) {
  this.skin = skinName;
}

Location.prototype.getLocation = function(location) {
  return location.concat("test");
}

exports.locationModule = Location;
