export function getDistanceFromLatLonInKm(
  { latitude, longitude }: { latitude: Number; longitude: Number },
  {
    latitude: latitude2,
    longitude: longitude2,
  }: { latitude: Number; longitude: Number }
) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(latitude2 - latitude); // deg2rad below
  var dLon = deg2rad(longitude2 - longitude);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(latitude)) *
      Math.cos(deg2rad(latitude2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg: Number) {
  return deg * (Math.PI / 180);
}
