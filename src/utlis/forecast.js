const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon='+ longitude + '&appid=464446327fbb12ad15f78e50eaaa99f4&units=metric'

    request({ url, json: true}, (error, { body }) => {
        if  (error) {
            callback ('Unable to conect to weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 'It is ' + body.current.feels_like + ' degrees out. Must be ' + body.current.weather[0].description + ' outside. Tomorrow there will be ' + body.daily[0].weather[0].description + ' & the day after tomorrow there may be ' + body.daily[1].weather[0].description + '.')
          }
        })
}

module.exports = forecast