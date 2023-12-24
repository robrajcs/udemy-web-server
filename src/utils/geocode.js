const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoicm9icmFqY3MiLCJhIjoiY2xxZmdlZWlrMHEwODJubzQxZjZoaXpzciJ9.L_PGLJb3AzXWwPbJQgu5aw";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      //   console.log("Unable to connect to location services!");
      callback("Unable to connect to location services!");
    } else if (body.features.length === 0) {
      callback("Unable to find location. Try another search.");
    } else {
      const latitude = body.features[0].center[1];
      const longitude = body.features[0].center[0];
      const location = body.features[0].place_name;
      callback(undefined, { latitude, longitude, location });
      //   console.log(latitude, longitude);
    }
  });
};

module.exports = geocode;
