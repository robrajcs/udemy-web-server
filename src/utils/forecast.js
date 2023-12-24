const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=ee0658ee13106834c3370d3a9e7b5071&query=" +
    latitude +
    "," +
    longitude;

  //   console.log(url);

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      //   console.log("Unable to connect to location services!");
      callback("Unable to connect to weather services!");
    } else if (body.error) {
      callback("Unable to find location.");
    } else {
      const msg =
        body.current.weather_descriptions[0] +
        ". It is currently " +
        body.current.temperature +
        " degrees out.";

      callback(undefined, msg);
      //   console.log(latitude, longitude);
    }
  });
};

module.exports = forecast;
